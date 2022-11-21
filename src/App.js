import "./App.css";

import TopicOneHome from "./components/TopicOne/TopicOneHome";
import TopicThreeHome from "./components/TopicThree/TopicThreeHome";
import TopicTwoHome from "./components/TopicTwo/TopicTwoHome";
// 
// import Counters from "./components/TopicThree/Counters";
// import Counter from "./components/TopicTwo/Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to AU Small Finance Bank</h1>
      <hr />
      {/* <TopicOneHome /> */}
      {/* <TopicTwoHome/> */}
      <TopicThreeHome/>
    </div>
  );
}