import React from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from './Post.module.scss';

interface PostProps {
  content: string;
  date: string;
}

const Post: React.FunctionComponent<PostProps> = ({ content, date }) => (
  <div>
    <p className={styles.postsContent}>{content}</p>
    <ul className={styles.postsMeta}>
      <li className={styles.postsMetaData}>
        <FaHeart /> 34
      </li>
      <li className={styles.postsMetaData}>
        <FaShareAlt /> Share
      </li>
      <li className={styles.postsMetaData}>{date}</li>
    </ul>
  </div>
);

export default Post;
