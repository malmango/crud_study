import { promises as fsPromises } from "fs";

export async function getBoardDetail(bid) {
  const filePath = "D:/dev/study/crud/front/public/data/data.json";

  try {
    const data = await fsPromises.readFile(filePath, "utf-8");
    const jsonData = await JSON.parse(data);
    const boardList = jsonData.find((obj) => obj.bid === parseInt(bid));
    // console.log(boardList);
    return boardList;
  } catch (error) {
    console.log(error);
  }

  return boardList;
}
