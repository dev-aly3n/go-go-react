import React, {useState} from 'react';
import Tweet from './Tweet';



function TweetList({tweetList}){


    return(
        <div className='tweet-list'>
            {tweetList.map((tweet)=>(
                <Tweet name='aly3n' message = {tweet} />
            ))}
        </div>
    )
}

export default TweetList;