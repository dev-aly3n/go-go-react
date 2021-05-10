import React, { useState } from "react";
import Tweet from "./Tweet";

function TweetList({ tweetList, setTweetList }) {
  return (
    <div className="tweet-list">
      {tweetList.map((tweet) => (
        <Tweet
          name="aly3n"
          message={tweet}
          tweetList={tweetList}
          setTweetList={setTweetList}
          key={tweet.id}
        />
      ))}
    </div>
  );
}

export default TweetList;
