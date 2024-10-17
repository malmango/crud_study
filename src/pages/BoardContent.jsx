import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BoardContent() {
  const { bid } = useParams();
  const [detailContent, setDetailContent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((result) => {
        const bContent = result.find((item) => item.bid === parseInt(bid));
        setDetailContent(bContent);
      });
  }, [bid]);

  /* 수정, 삭제 이동 */
  const handleNavigate = (type) => {
    navigate(`/board/${type}/${bid}`);
  };

  return (
    <div>
      <h1>게시글 내용</h1>
      <h3>제목 : {detailContent.title}</h3>
      <p>{detailContent.content}</p>
      <button type="button" onClick={() => handleNavigate("modify")}>
        수정
      </button>
      <button type="button" onClick={() => handleNavigate("delete")}>
        삭제
      </button>
      <p>
        <Link to="/">
          <span>뒤로가기</span>
        </Link>
      </p>
    </div>
  );
}
