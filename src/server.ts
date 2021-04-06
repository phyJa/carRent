import express from 'express';

const server = express();

server.get(
  '/',
  (request, response) => response.json({ message: 'HIIHIHIHIHI' }),
);

server.listen(3333);
