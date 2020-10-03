import React, { useEffect, useState, useContext } from 'react';

import { auth, firestore } from '../../Base';

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
}));

const Feed = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [userObj, setUserObj] = useState();
  const user = useContext(AuthContext);

  const ckeckFollowing = (userId) => {
    return userObj.following.includes(userId);
  };

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
    <Paper className={classes.root} elevation={3}>
      <CreatePost />
      {userObj ? (
        posts.map((post) => {
          if (post.userId == user.uid || ckeckFollowing(post.userId)) {
            return (
              <FeedElement
                key={post._id}
                text={post.text}
                date={post.createdAt}
                uid={post.userId}
              />
            );
          }
        })
      ) : (
        <></>
      )}
      {}
    </Paper>
  );
};

export default Feed;
