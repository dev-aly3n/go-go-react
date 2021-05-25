import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import {useSelector, useDispatch} from 'react-redux';


function App() {
  const counter = useSelector ((state) => state.counter);
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [tweetList, setTweetList] = useState([]);
  return (
    <div>
    <div>
      <h1> coounter : {counter}</h1>
    <button onClick={()=> dispatch({type:'INCREAMENT'})} >INCREAment</button> 
    </div>


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
