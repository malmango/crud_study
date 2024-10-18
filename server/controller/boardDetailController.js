import * as repository from "../repository/boardDetailRepository.js";

export async function getBoardDetail(req, res) {
  const { bid } = req.params;
  const result = await repository.getBoardDetail(bid);
  // console.log("컨트롤러", result);
  res.json(result);
}
