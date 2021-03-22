import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>

        <ul className={styles.posts}>
          <li>
            <p className={styles.postsContent}>
              I’m working in Figma trying to design a new website that shows all
              of my tweets!
            </p>
            <p className={styles.postsDate}>14/3/2021</p>
          </li>
          <li>
            <p className={styles.postsContent}>
              I’m working in Figma trying to design a new website that shows all
              of my tweets!
            </p>
            <p className={styles.postsDate}>14/3/2021</p>
          </li>
          <li>
            <p className={styles.postsContent}>
              I’m working in Figma trying to design a new website that shows all
              of my tweets!
            </p>
            <p className={styles.postsDate}>14/3/2021</p>
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
