import styles from './Footer.module.css';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.socialContainer}>
                    <a href="https://github.com/dkharley" target="_blank" rel="noopener noreferrer" aria-label="Github" className={styles.socialLink}>
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/dkharley" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:davidsonkharley@gmail.com" aria-label="Email" className={styles.socialLink}>
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
