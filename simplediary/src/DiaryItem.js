const DiaryItem = ({ onDelete, ...it }) => {
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
      <div className="content">{it.content}</div>
      <button
        onClick={() => {
          console.log(it.id);
          if (window.confirm(`${it.id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(it.id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
