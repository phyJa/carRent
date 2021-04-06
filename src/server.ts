import express from "express";

const server = express();

const test = "asd";

server.get("/", (request, response) =>
  response.json({ message: "HIIHIHIHIHI" })
);

server.listen(3333);
