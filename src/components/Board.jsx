import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Board() {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((result) => setBoardData(result));
  }, []);

  return (
    <div>
      <ul>
        {boardData.map((item) => (
          <Link to={`/board/${item.bid}`}>
            <li key={item.bid}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
