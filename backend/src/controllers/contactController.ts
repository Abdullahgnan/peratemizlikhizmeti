import { Request, Response, RequestHandler } from 'express';
import { pool } from '../config/db';

export const createContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basit validasyon
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Lütfen gerekli alanları doldurun'
      });
    }

    const query = `
      INSERT INTO contact_messages (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    
    const values = [name, email, phone || null, message];
    const result = await pool.query(query, values);
    
    // Email gönderme işlemi burada eklenebilir

    res.status(201).json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({
      success: false,
      message: 'Bir hata oluştu'
    });
  }
}; 