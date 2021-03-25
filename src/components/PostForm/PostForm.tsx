import React from 'react';
import styles from './PostForm.module.scss';

interface PostFormProps {}

const PostForm: React.FunctionComponent<PostFormProps> = () => (
  <>
    <form>
      <textarea className={styles.formContent} />
      <button className={styles.formButton}>Add New Post</button>
    </form>
  </>
);

export default PostForm;
