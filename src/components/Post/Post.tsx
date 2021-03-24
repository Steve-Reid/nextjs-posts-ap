import React from 'react';
import styles from './Post.module.scss';

interface PostProps {
  content: string;
  date: string;
}

const Post: React.FunctionComponent<PostProps> = ({ content, date }) => (
  <div>
    <p className={styles.postsContent}>{content}</p>
    <p className={styles.postsDate}>{date}</p>
  </div>
);

export default Post;
