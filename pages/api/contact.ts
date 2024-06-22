import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss';
import { runMiddleware } from '../../utils/runMiddleware';

// limitation du taux de requêtes avec générateur de clé personnalisé
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 15, // limite de 15 requêtes par fenêtre par IP
  message: 'Trop de requêtes créées à partir de cette IP, veuillez réessayer après 15 minutes',
  keyGenerator: (req: NextApiRequest) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return Array.isArray(ip) ? ip[0] : ip || '127.0.0.1';
  }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Middlewares helmet et rateLimit exécutés de manière séquentielle
    await runMiddleware(req, res, helmet());
    await runMiddleware(req, res, limiter);

    if (req.method === 'POST') {
      // désinfection des champs (contre les attaques XSS)
      const nameadzaSanitized = xss(req.body.nameadza);
      const emaildzasSanitized = xss(req.body.emaildzas);
      const messageSanitized = xss(req.body.message);

      // Middlewares de validation des champs
      await runMiddleware(req, res, body('nameadza').trim().escape().notEmpty().withMessage('Le nom est requis.'));
      await runMiddleware(req, res, body('emaildzas').isEmail().withMessage('L\'email est invalide').normalizeEmail());
      await runMiddleware(req, res, body('message').trim().escape().notEmpty().withMessage('Le message est requis'));

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // extraction de l'adresse IP et d'autres informations
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const transporter = nodemailer.createTransport({
        host: process.env.SERVER_MAIL,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Nouveau message depuis le formulaire de contact',
        text: `Nom: ${nameadzaSanitized}\nEmail: ${emaildzasSanitized}\nMessage: ${messageSanitized}\n\nAdresse IP: ${ip}\nUser-Agent: ${userAgent}`,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'email' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  } catch (error) {
    console.error('Erreur interne du serveur:', error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
