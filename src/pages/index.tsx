import Head from 'next/head';
import Post from '@components/Post';
import PostForm from '@components/PostForm';
import Bio from '@components/Bio';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          imagePath="https://pbs.twimg.com/profile_images/503598295365599232/jL6ZtIhR_400x400.jpeg"
          name="Steve Reid"
          tagline="Learning by doing!"
          position="Fullstack Developer @ On The Money Ltd"
        />

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

        <PostForm />
      </main>
    </div>
  );
}
