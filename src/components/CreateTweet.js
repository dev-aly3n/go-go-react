import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTweet({ textInput, setTextInput, tweetList, setTweetList }) {
  function changeTextInput(e) {
    setTextInput(e.target.value);
  }
  function submitTweet(e) {
    e.preventDefault();
    setTweetList([...tweetList, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  }

  return (
    <div>
      <form onSubmit={submitTweet}>
        <textarea
          onChange={changeTextInput}
          value={textInput}
          name="tweet"
          cols="60"
          rows="10"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}

export default CreateTweet;
