import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BoardModify() {
  const { bid } = useParams();
  const [detailContent, setDetailContent] = useState({});

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((result) => {
        const bContent = result.find((item) => item.bid === parseInt(bid));
        setDetailContent(bContent);
      });
  }, [bid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailContent({ ...detailContent, [name]: value });
  };

  /* 수정완료 버튼 */
  const handleSubmit = () => {};

  /* 데이터 바뀌는거 감시 */
  useEffect(() => {
    console.log(detailContent);
  }, [detailContent]);

  return (
    <div>
      <h1>수정페이지</h1>
      <h3>
        제목 :
        <input
          type="text"
          name="title"
          value={detailContent.title}
          onChange={(e) => handleChange(e)}
        />
      </h3>
      <textarea
        name="content"
        value={detailContent.content}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <p>
        <button type="button" onClick={handleSubmit}>
          수정완료
        </button>
      </p>
    </div>
  );
}
