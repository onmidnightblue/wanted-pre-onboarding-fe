import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feedLists, setFeedLists] = useState([1]);

  // data
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

  // item concat
  const getMoreFeed = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let Feeds = feeds;
    setFeedLists((feedLists) => feedLists.concat(Feeds));
    setIsLoaded(false);
  };

  // add feed
  const onIntersect = async ([entries], observer) => {
    if (entries.isIntersecting && !isLoaded) {
      await getMoreFeed();
    }
  };

  // new IntersectionObserver
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.unobserve();
  }, [target]);

  console.log(target);

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
      <div ref={setTarget}>{isLoaded && console.log('loading')}</div>
    </Styles.Wrap>
  );
};

export default Feeds;
