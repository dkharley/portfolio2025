import Image from 'next/image';
import styles from './page.module.css';

import personalImg1 from '@/assets/images/personal-image-1.jpeg';
import personalImg2 from '@/assets/images/personal-image-2.jpg';
import personalImg3 from '@/assets/images/personal-image-3.jpg';
import personalImg4 from '@/assets/images/personal-image-4.jpg';
import personalImg5 from '@/assets/images/personal-image-5.jpg';

export default function PersonalPage() {
  return (
    <div className="container">
      <div className={styles.textSection}>
        <h1>About Me</h1>
        <p className={styles.intro}>
          When I'm not coding you can generally find me outside. Snowboarding, mountain biking, camping and hiking are some of my favorite activities. I also enjoy reading, science fiction and fantasy being some of my favorite genres. <br />
          And of course spending time with my family (and dog Baxter) is a priority.
        </p>
      </div>

      <div className={styles.visualSection}>
        <div className={styles.imageCollage}>
          <div className={styles.collageItem1}>
            <Image
              src={personalImg1}
              alt="Personal photo 1"
              fill
              className={`${styles.collageImg} ${styles.img1}`}
            />
          </div>
          <div className={styles.collageItem2}>
            <Image
              src={personalImg2}
              alt="Personal photo 2"
              fill
              className={`${styles.collageImg} ${styles.img2}`}
            />
          </div>
          <div className={styles.collageItem3}>
            <Image
              src={personalImg3}
              alt="Personal photo 3"
              fill
              className={`${styles.collageImg} ${styles.img3}`}
            />
          </div>
          <div className={styles.collageItem4}>
            <Image
              src={personalImg4}
              alt="Personal photo 4"
              fill
              className={`${styles.collageImg} ${styles.img4}`}
            />
          </div>
          <div className={styles.collageItem5}>
            <Image
              src={personalImg5}
              alt="Personal photo 5"
              fill
              className={`${styles.collageImg} ${styles.img5}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
