import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'
import exp1 from './exp1.png';

import skills from '../../data/skills.json';  /*This is an array variable(Json Object)*/
import history from '../../data/history.json';  /*This is an array variable(Json Object)*/


const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills and Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id) => {

                    return <div  className={styles.skill} key={id} >
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })


            }
            </div>
            {/* <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <li className={styles.historyItem} key={id}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.title} Logo`} />
                        <div className={styles.historyItemDetails}>
                            <h3>{ `${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                            <ul>{
                                historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>
                                        {experience}
                                    </li>
                                })
                            }</ul>

                        </div>
                    </li>
                })


            }
            </ul> */}

            <ul className={styles.history}>
                
                     <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Data Structures and Algorithms</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Web Developement</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Competitive Programming</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Object Oriented Programming</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Database Management Systems</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Operating System</h3>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <div className={styles.historyItemDetails}>
                            <h3>⦿ Machine Learning</h3>
                        </div>
                    </li>
            </ul>

        </div>
        

        <h2 className={styles.title2}>Internship: REAN Foundation</h2>
        <div style={{display:"flex"}}>
               <img src={exp1} style={{height:'220px', borderRadius:"10px"}} alt="REAN Foundation Internship" />
               <div>
                    <p className={styles.interncontent}>Developed LLM-powered chatbot agents utilizing LangChain, enabling advanced conversational capabilities.</p>
                    <p className={styles.interncontent}>Designed and implemented comprehensive test cases for healthcare chatbots, ensuring their accuracy and reliability.</p>
                    <p className={styles.interncontent}>Crafted dynamic and responsive user interface for chatBot application with the SvelteKit framework.</p>
                    <a id={styles.resumeBtn} className={styles.contactBtn} href="https://drive.google.com/file/d/1dhuo1yOT8EtsEn-8N8Z1gUHw3qbDPaeG/view?usp=sharing" target='blank'>Certificate</a>
                </div>
               
        </div>

    </section>
  )
}

export default Experience
