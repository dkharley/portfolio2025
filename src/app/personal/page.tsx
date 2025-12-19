import Image from 'next/image';
import styles from './page.module.css';

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
              src="/images/personal-image-1.jpeg"
              alt="Personal photo 1"
              fill
              className={`${styles.collageImg} ${styles.img1}`}
            />
          </div>
          <div className={styles.collageItem2}>
            <Image
              src="/images/personal-image-2.jpg"
              alt="Personal photo 2"
              fill
              className={`${styles.collageImg} ${styles.img2}`}
            />
          </div>
          <div className={styles.collageItem3}>
            <Image
              src="/images/personal-image-3.jpg"
              alt="Personal photo 3"
              fill
              className={`${styles.collageImg} ${styles.img3}`}
            />
          </div>
          <div className={styles.collageItem4}>
            <Image
              src="/images/personal-image-4.jpg"
              alt="Personal photo 4"
              fill
              className={`${styles.collageImg} ${styles.img4}`}
            />
          </div>
          <div className={styles.collageItem5}>
            <Image
              src="/images/personal-image-5.jpg"
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
