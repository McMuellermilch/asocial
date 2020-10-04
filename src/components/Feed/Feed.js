import React, { useEffect, useState, useContext } from 'react';

import { auth, firestore } from '../../Base';
import empty_image from './empty_feed.svg';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../../context/AuthProvider';
import { Paper, IconButton } from '@material-ui/core';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';

import FeedElement from './FeedElement/FeedElement';
import CreatePost from './CreatePost/CreatePost';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '30px',
    padding: 10,
  },
  layout: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '20px',
  },
  emptyFeed: {
    placeSelf: 'center',
  },
  emptyFeedImage: {
    height: 250,
  },
}));

const Feed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [postsFeed, setPostsFeed] = useState([]);
  const [userObj, setUserObj] = useState();
  const [direction, setDirection] = useState('desc');
  const user = useContext(AuthContext);

  const checkFollowing = (userId) => {
    return userObj.following.includes(userId);
  };

  const sortArray = (direction) => {
    posts.sort(function compare(a, b) {
      if (direction == 'asc') {
        return a.createdAt - b.createdAt;
      } else {
        return b.createdAt - a.createdAt;
      }
    });
  };

  const handleClick = () => {
    if (direction == 'desc') {
      setDirection('asc');
    } else {
      setDirection('desc');
    }
  };

  useEffect(() => {
    if (userObj) {
      sortArray(direction);
      let validPosts = posts.map((post) => {
        if (post.userId == user.uid || checkFollowing(post.userId)) {
          return (
            <FeedElement
              key={post._id}
              text={post.text}
              date={post.createdAt}
              uid={post.userId}
            />
          );
        }
      });
      setPostsFeed(validPosts);
    }
  }, [posts, userObj, direction]);

  useEffect(() => {
    firestore.collection('posts').onSnapshot((querySnapshot) => {
      let postdata = [];
      querySnapshot.forEach((doc) => {
        postdata.push(doc.data());
      });
      setPosts(postdata);
    });

    firestore
      .collection('users')
      .doc(user.uid)
      .onSnapshot(function (doc) {
        setUserObj(doc.data());
      });
  }, []);

  return (
    <div className={classes.layout}>
      <CreatePost />
      <Paper className={classes.root} elevation={3}>
        {postsFeed.length > 0 ? (
          <div>
            <div>
              <IconButton onClick={handleClick}>
                {direction == 'desc' ? (
                  <ArrowUpwardRounded />
                ) : (
                  <ArrowDownwardRounded />
                )}
              </IconButton>
            </div>
            <div>{postsFeed}</div>
          </div>
        ) : (
          <div className={classes.emptyFeed}>
            <img className={classes.emptyFeedImage} src={empty_image} alt="" />
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Feed;
