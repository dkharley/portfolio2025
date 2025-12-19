import Link from 'next/link';
import styles from './page.module.css';

const posts = [
  {
    slug: 'todo-app',
    title: 'Entry 1',
    date: 'Dec 19, 2025',
    excerpt: 'todo...',
    readTime: '5 min read'
  },
  {
    slug: 'todo-app',
    title: 'Entry 2',
    date: 'Dec 19, 2025',
    excerpt: 'todo...',
    readTime: '5 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Blog</h1>
        <p>A place to share my thoughts, insights and experiences about software development.</p>
      </div>

      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <Link href={`/blog/${post.slug}`} className={styles.postLink}>
              <div className={styles.postMeta}>
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
