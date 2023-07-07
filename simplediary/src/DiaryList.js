import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// 에러가 안나게 기본 정보 입력해주기
// 만약에 undefinded 로 내려오면 에러 방지
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
