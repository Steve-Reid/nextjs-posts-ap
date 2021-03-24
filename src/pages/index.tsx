import Head from 'next/head';
import Post from '@components/Post';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>

        <ul className={styles.posts}>
          <li>
            <Post content="This is a new post" date="22/3/2021" />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all of my tweets!"
              date="22/3/2021"
            />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all of my tweets!"
              date="22/3/2021"
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent} />
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
