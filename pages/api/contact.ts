import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import { runMiddleware } from '../../utils/runMiddleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // validation des champs
    await runMiddleware(req, res, [
      body('nameadza').trim().escape().notEmpty().withMessage('Le nom est requis.'),
      body('emaildzas').isEmail().withMessage('L\'email est invalide').normalizeEmail(),
      body('message').trim().escape().notEmpty().withMessage('Le message est requis'),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nameadza, emaildzas, message } = req.body;

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
      text: `Nom: ${nameadza}\nEmail: ${emaildzas}\nMessage: ${message}`,
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
}
