import React from "react";

function Tweet({ name, message, tweetList, setTweetList }) {
  function deleteTweet() {
    setTweetList(tweetList.filter((state) => state.id !== message.id));
  }

  return (
    <div>
      <h1>{name}</h1>
      <h3>{message.message}</h3>
      <button>Like</button>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
}

export default Tweet;
