import * as repository from "../repository/homeRepository.js";

export async function getBoardList(req, res) {
  const result = await repository.getBoardList();
  res.json(result);
}
