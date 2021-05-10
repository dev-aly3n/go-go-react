import React from 'react';



function Tweet({name,message}) {


    return(
        <div>
            <h1>{name}</h1>
            <h3>{message}</h3>
            <button>Like</button>
            <button>Delete</button>
        </div>
    );


}

export default Tweet;