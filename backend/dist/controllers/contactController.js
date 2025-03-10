"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = void 0;
const db_1 = require("../config/db");
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, message } = req.body;
        // Basit validasyon
        if (!name || !email || !message) {
            res.status(400).json({
                success: false,
                message: 'Lütfen gerekli alanları doldurun'
            });
            return;
        }
        const query = `
      INSERT INTO contact_messages (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
        const values = [name, email, phone || null, message];
        const result = yield db_1.pool.query(query, values);
        // Email gönderme işlemi burada eklenebilir
        res.status(201).json({
            success: true,
            message: 'Mesajınız başarıyla gönderildi',
            data: result.rows[0]
        });
    }
    catch (error) {
        console.error('Hata:', error);
        res.status(500).json({
            success: false,
            message: 'Bir hata oluştu'
        });
    }
});
exports.createContact = createContact;
