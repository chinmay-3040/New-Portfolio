import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Chinmay!</h1>
            <p className={styles.description}>I am pursuing Btech. from the Indian Institute of Technology, Indore.</p>
            <div className={styles.resume}>
                <a id={styles.resumeBtn} className={styles.contactBtn} href="https://drive.google.com/file/d/19eZPghybXlNKuVERUtvenjuK1C8LjHYH/view?usp=drive_link" target='blank'>Resume</a>
                <a id={styles.resumeBtn} className={styles.contactBtn} href=" https://drive.google.com/file/d/1M7sUwQjlNvrSkQPmui7Se-a5_JXmLDir/view?usp=sharing" target='blank'>Cover Letter</a>
            </div>
           
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage2.png")}  alt="My Image"></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
