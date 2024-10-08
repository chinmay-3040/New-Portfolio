import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.maincontainer} id='contact'>
       <div  className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.description}>Feel free to reach out!</p>
        </div>
        <div className={styles.content2}>
            <div className={styles.medium}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                <a href="mailto:chinmaydawalbaje129@gmail.com" target='blank'>chinmaydawalbaje129@gmail.com</a>
            </div>
            <div className={styles.medium}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                <a href="https://www.github.com/chinmay-3040" target='blank'>github.com/Chinmay-Dawalbaje</a>
            </div>
            <div className={styles.medium}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Lnkd In Icon" />
                <a href="https://www.linkedin.com/in/chinmay-dawalbaje-783aa6235/" target='blank'>linked.com/Chinmay-Dawalbaje</a>
            </div>
        </div>
        </div>
        <hr/>
        <div className={styles.othercontacts}>
        
            <a href="tel:+919356763040" target="_blank"><img className={styles.othercontactsImg} src={getImageUrl('contact/call.png')} /></a>
            <a href="https://www.instagram.com/chinmay_3040/" target="_blank"><img className={styles.othercontactsImg} src={getImageUrl('contact/insta.png')}/></a>
            <a href="https://www.facebook.com/chinmay.dawalbaje" target="_blank"><img className={styles.othercontactsImg} src={getImageUrl('contact/facebook.png')}/></a>
            
        </div>
    </section>
  )
}

export default Contact
