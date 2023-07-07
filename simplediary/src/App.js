import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이다혜",
    content: "hi",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "hi",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "유창호",
    content: "hi",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "김혜인",
    content: "3점으로 올려달라함...",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "강가에",
    content: "hi",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
