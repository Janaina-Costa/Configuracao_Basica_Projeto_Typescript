import express from "express";

const app = express();

const PORT = 3000;
const HOST = "http://localhost:";

app.get("/", (req, res) => {
  res.send("Servidor");
});

app.listen(PORT, () =>
  console.log(`${process.env.PROJECT_NAME} .. Server running at ${HOST}${PORT}`)
);
