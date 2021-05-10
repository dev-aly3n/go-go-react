import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [textInput, setTextInput] = useState("");
  const [tweetList, setTweetList] = useState([]);
  return (
    <div>
      <h1>Tweeter</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweetList={tweetList}
        setTweetList={setTweetList}
      />
      <TweetList
        tweetList={tweetList}
        setTweetList={setTweetList}
      />
    </div>
  );
}

export default App;
