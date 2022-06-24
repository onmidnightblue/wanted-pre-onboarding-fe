import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../UI/LoadingSpinner';
import Feed from './Feed';

const Styles = {
  Wrap: styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  `,
};

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get('/data/FEEDDATA.json').then((response) => {
      const feedData = [];
      const data = response.data;
      for (const key in data) {
        feedData.push({
          id: key,
          username: data[key].username,
          image: data[key].image,
        });
      }
      setFeeds(feedData);
    });
  }, []);

  return (
    <Styles.Wrap>
      {feeds.map((feed) => (
        <Feed
          key={feed.id}
          id={feed.id}
          username={feed.username}
          image={feed.image}
        />
      ))}
    </Styles.Wrap>
  );
};

export default Feeds;
