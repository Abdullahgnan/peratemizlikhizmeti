"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use((0, cors_1.default)({
    origin: 'https://www.peratemizlik.com', // Alan adınız
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express_1.default.json());
// Routes
app.use('/api', contactRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});
