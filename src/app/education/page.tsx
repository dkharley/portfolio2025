import { GraduationCap } from 'lucide-react';
import styles from './page.module.css';

const education = [
  {
    institution: 'University of California Santa Cruz',
    degree: 'Bachelor of Science in Computer Science: Computer Game Design',
    period: '2010 - 2014',
    location: 'Santa Cruz, CA',
    description: 'The Bachelor of Science in Computer Science: Computer Game Design is an undergraduate degree program focused on the construction and design of interactive computer games as well as computer science fundamentals. The program is regularly ranked among the very best public university game design programs in the U.S.'
  },
];

export default function EducationPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Education</h1>
        <p>From a young age I had an interest in computers and technology. In high school my favorite classes were always math and science based. Finding UCSC's Computer Science: Computer Game Design program was the perfect fit for me.
          I was able to learn computer science fundamentals as well as game design and development. It was an amazing opportunity to learn from some amazing professors as well as making connections with classmates that I still keep in touch with to this day.
        </p>
      </div>

      <div className={styles.timeline}>
        {education.map((edu, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <GraduationCap size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.metaHeader}>
                <span className={styles.date}>{edu.period}</span>
                <span className={styles.location}>{edu.location}</span>
              </div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
