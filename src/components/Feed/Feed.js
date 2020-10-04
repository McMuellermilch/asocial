import React, { useEffect, useState, useContext } from 'react';

import { auth, firestore } from '../../Base';
import empty_image from './empty_feed.svg';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../../context/AuthProvider';
import { Paper } from '@material-ui/core';

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
  const user = useContext(AuthContext);

  const checkFollowing = (userId) => {
    return userObj.following.includes(userId);
  };

  useEffect(() => {
    console.log('x');
    if (userObj) {
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
  }, [posts, userObj]);

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
          postsFeed
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
