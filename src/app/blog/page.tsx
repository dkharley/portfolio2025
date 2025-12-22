import Link from 'next/link';
import styles from './page.module.css';

const posts = [
  {
    slug: 'Entry 1',
    title: 'Starting Out',
    date: 'Dec 22, 2025',
    excerpt:
      "After college, due to personal circumstances I returned home to Lake Tahoe, CA. While it's beatiful, there are not many software development opportunities there. This was 2014 and remote work was not as available as it is today. Through some local connections I was able to land a job instructing middle/high school students in computer science." +
      "While it may not have been as glamorous as a FAANG(or whatever the latest acronym is now) job, it really helped me develop some core skills, mainly communication. There's a saying that goes something like 'you don't really iunderstand something until you are able to teach it to someone else' and for me this was true. Teaching fundamental CS concepts to students who had no experience with coding was a great way for me to grow as a developer. " +
      "This wasn't the most traditional way to start a career in software development but at the time it was the best option available to me, and it ended up setting me on a path towards becoming a full stack software developer...",
  }
];

export default function BlogPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Blog</h1>
        <p>A place to share my thoughts, insights and experiences about software development. I'll share my experiences working my way up through the industry as well as my thoughts on the latest trends and technologies.</p>
      </div>

      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <div className={styles.postLink}>
              <div className={styles.postMeta}>
                <time>{post.date}</time>
                <span>•</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
