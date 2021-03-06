import Layout from "../components/Layout";
import Entry from "../components/Entry";
import styles from '../styles/Blog.module.css';

const Blog = ({ entries }) => {
  return (
    <Layout page="Blog">
      <main className="container">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {entries.map((entry) => (
            <Entry key={entry.id}
              entry={entry}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/blogs";
  const response = await fetch(url);
  const entries = await response.json();

  console.log(entries);

  return {
    props: {
      entries,
    },
  };
}

export default Blog;
