import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project,id) => {
                return <div className={styles.container2} key={id}>
                    <img className={styles.image} src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} />
                    <h3 className={styles.title2}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.skills}>
                        {project.skills.map((skill,id) => {
                            return <li className={styles.skill} key={id}>
                                {skill}
                            </li>
                        })
                        }
                    </ul>
                    <div className={styles.links}>
                        <a className={styles.link} href={project.demo}>Demo</a>
                        <a className={styles.link} href={project.source}>Source</a>
                    </div>

                </div>
            }) 
        }  
        </div>
    </section>
  )
}

export default Projects



// {
//     "name": "react-portfolio",
//     "private": true,
//     "version": "0.0.0",
//     "type": "module",
//     "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
//       "preview": "vite preview"
//     },
//     "dependencies": {
//       "react": "^18.2.0",
//       "react-dom": "^18.2.0",
  
//       "@fontsource/outfit": "^5.0.8",
//         "@fontsource/roboto": "^5.0.8"
//     },
//     "devDependencies": {
//       "@types/react": "^18.2.43",
//       "@types/react-dom": "^18.2.17",
//       "@vitejs/plugin-react": "^4.2.1",
//       "eslint": "^8.55.0",
//       "eslint-plugin-react": "^7.33.2",
//       "eslint-plugin-react-hooks": "^4.6.0",
//       "eslint-plugin-react-refresh": "^0.4.5",
//       "vite": "^5.0.8"
//     }
    
    
//   }
  