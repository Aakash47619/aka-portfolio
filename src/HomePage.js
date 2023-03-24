import React, { useState } from "react";
import "./HomePage.css"

export default function HomePage() {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setTweets([...tweets, tweet]);
      setTweet("");
    };
  
    return (
      <div className="HomePage">
        <form onSubmit={handleSubmit}>
          <textarea
            value={tweet}
            onChange={(event) => setTweet(event.target.value)}
            placeholder="Enter your note here"
            rows="3"
            className="TweetInput"
          />
          <button type="submit" className="TweetButton">Save</button>
        </form>
        <ul className="TweetList">
          {tweets.map((tweet, index) => (
            <li key={index}>{tweet}</li>
          ))}
        </ul>
      </div>
    );
  }


