import { promises as fsPromises } from "fs";

export function getBoardList(req, res) {
  const filePath = "D:/dev/study/crud/front/public/data/data.json";

  const allBoard = fsPromises
    .readFile(filePath, "utf-8")
    .then((res) => {
      return JSON.parse(res);
    })
    .catch((error) => console.log(error));

  return allBoard;
}
