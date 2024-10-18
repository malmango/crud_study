import express from "express";
import cors from "cors";
import homeRouter from "./router/homeRouter.js";
import boardDetailRouter from "./router/boardDetailRouter.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

/* 미들웨어 */
server.use("/", homeRouter);
server.use("/board", boardDetailRouter);

server.listen(port, () => {
  console.log("server start!");
});
