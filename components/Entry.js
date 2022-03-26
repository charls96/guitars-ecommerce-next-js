import { formatDates } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entry.module.css'

const Entry = ({ entry }) => {
  const { title, summary, image, published_at, id, content } = entry;
  return (
    <article>
      <Image priority='true' layout='responsive' width={800} height={600} src={image.url} alt={`blog image ${title}`} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDates(published_at)}</p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.link}>Read</a>
        </Link>
      </div>
    </article>
  );
};

export default Entry;
