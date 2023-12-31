import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ ...it }) => {
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(it.content);
  const localContentInput = useRef();

  const handleClickRemove = () => {
    if (window.confirm(`${it.id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(it.id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(it.content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${it.id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(it.id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {it.author} | 감정점수 : {it.emotion}
        </span>
        <br />
        <span className="date">
          {new Date(it.created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{it.content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
