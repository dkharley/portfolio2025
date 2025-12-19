import { Briefcase } from 'lucide-react';
import styles from './page.module.css';

const experiences = [
  {
    company: 'NBCUniversal',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    location: 'Remote - Truckee, CA',
    skills: ['React', 'Node.js', 'Typescript', 'AWS', 'VSCode', 'Git/Github', 'Jira'],
    description: 'Senior software engineer working in the Enterprise Applications organization as a lead developer, creating and maintaining multiple full-stack, cloud-native applications that are critical to NBCUniversal.'
  },
  {
    company: 'Hamilton Company',
    role: 'Software Developer II',
    period: '2019 - 2022',
    location: 'Reno, NV',
    skills: ['C#', 'JavaScript', 'SQL Server Management Studio', 'Angular', 'ASP.NET', 'TypeScript', 'Internet Information Services (IIS)'],
    description: 'Leading the frontend team in building scalable React applications. Improved performance by 40% and reduced technical debt.'
  },
  {
    company: 'Spin Games LLC',
    role: 'Software Developer',
    period: '2017 - 2019',
    location: 'Reno, NV',
    skills: ['Game Development', 'Web/Mobile', 'Scrum', 'Project Management', 'MongoDB', 'Python', 'Phaser.js'],
    description: 'Developing casino games which are deployed to web and mobile platforms. Implementing frontend testing and backend simulations to ensure a reliable experience and accurate payouts.'
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Entry Level Developer -> Software Engineer',
    period: '2016 - 2017',
    location: 'Reno, NV',
    skills: ['Web Development', 'Business Applications'],
    description: 'Developing costumer facing web sites to aid in essential health care business functions.'
  },
  {
    company: 'Squaw Valley Preparatory',
    role: 'Computer Science and Game Design Instructor',
    period: '2014 - 2015',
    location: 'Olympic Valley, CA',
    skills: ['Teaching', 'Curriculum Design', 'Game Design'],
    description: 'Teaching high school and middle school students the fundamentals of computer science and game design. Creating a year long syllabus, leading lectures and classroom discussions, assisting students with projects and grading assignments.'
  },
  {
    company: 'UCSC',
    role: 'Grader / Tutor for CMPS 80K',
    period: '2014',
    location: 'Santa Cruz, CA',
    skills: ['Gamemaker', 'Mentoring', 'Game Design'],
    description: 'Tutoring a section of over 30 game design students. Grading submitted assignments and providing instruction and feedback for ongoing projects.'
  },
];

export default function WorkPage() {
  return (
    <div className="container">
      <div className={styles.pageHeader}>
        <h1>Work Experience</h1>
        <p>My professional journey and career milestones. Worked my way up from entry level developer to senior software engineer, and am excited to continue learning and growing.</p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((job, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.metaHeader}>
                <span className={styles.date}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
              <div className={styles.skillsContainer}>
                {job.skills.map(skill => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
