"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const HOST = "http://localhost:";
app.get("/", (req, res) => {
    res.send("Servidor");
});
app.listen(PORT, () => console.log(`${process.env.PROJECT_NAME} .. Server running at ${HOST}${PORT}`));
