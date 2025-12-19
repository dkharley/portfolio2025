import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={200}
              height={193}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Hey there...
            </h1>
            <p className={styles.subtitle}>
              I'm a Developer excited for new opportunities and challenges. I consider myself a lifelong learner and work hard to stay up to date with the latest technologies. I create modern, accessible, and performant web applications, working in frontend, backend and cloud technologies.
              Look around to learn more about me and my work.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/work" className="button button-primary">
                View Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
