import React from 'react';
import "./Portfolio.css";
import IMG1 from "../../assets/weather.jpg";
import IMG2 from "../../assets/Qrcode.png";
import IMG3 from "../../assets/BMI.jpg";
import IMG4 from "../../assets/zenticket.png";
import IMG6 from "../../assets/Todo.jpg";
import IMG7 from "../../assets/news.jpg";
import IMG8 from "../../assets/CRUD.jpeg";
import IMG9 from "../../assets/Usermanagement.jpeg";

export const Portfolio = () => {
    const soloProjects = [
        {
          id: 1,
          title: "Weather App with React",
          img: IMG1,
          description:
            "Accurate and up-to-date weather forecasts to keep you prepared for any day.",
          technologies: "Html | CSS | Javascript | React ",
          link: "https://weatherappreactpro.netlify.app/ ",
          github:"https://github.com/Kalaivanisudee/Projects/tree/main/React/Weather%20App"
        },
        {
          id: 2,
          title: "QR_Code_Generator",
          img: IMG2,
          description:
            "Effortlessly create and customize QR codes for all your needs",
          technologies: "HTML | CSS | JavaScript | React  ",
          link: "https://qrcodegeneratedreact.netlify.app/",
          github: "https://github.com/Kalaivanisudee/Projects/tree/main/React/QR-CODE-GENERATOR",
        },
        {
            id: 3,
            title: "BMI_Calculator",
            img: IMG3,
            description:
              "Quickly calculate your BMI to track and manage your health.",
            technologies: "HTML | CSS | JavaScript | React ",
            link: "https://bmicalculatorreactprj.netlify.app/",
            github: "https://github.com/Kalaivanisudee/Projects/tree/main/React/BMI%20Calculator",
          },
          {
            id: 4,
            title: "Zen Class Ticketing system for query resolving",
            img: IMG4,
            description:
              "Effortlessly manage and resolve queries with the Zen Class Ticketing System, enhancing your support efficiency and user satisfaction.",
            technologies: " React | Express | Node | MongoDB ",
            link: "https://main--gorgeous-puffpuff-19ce92.netlify.app/",
            github: "	https://github.com/Kalaivanisudee/capstone-FE",
          },
         
          {
            id: 5,
            title: "Todo List App",
            img: IMG6,
            description:
              "An easy-to-use app for managing tasks, setting reminders, and organizing to-do lists with sharing options...",
            technologies: "React | Express | Node | MongoDB ",
            link: "https://mytodo-app-mern.netlify.app/",
            github: "https://github.com/Kalaivanisudee/Todo_FE",
          },
          {
            id: 6,
            title: "News Media App",
            img: IMG7,
            description:
              "A comprehensive app for staying updated with the latest news, offering personalized content and real-time notifications. Features include multimedia articles, live streams, and social sharing....",
            technologies: " React | Express | Node | MongoDB  ",
            link: "https://newsmedia-app-mern.netlify.app/",
            github: "https://github.com/Kalaivanisudee/News_Media_FE",
          },
          {
            id: 7,
            title: "CRUD App",
            img: IMG8,
            description:
              "To enable efficient creation, reading, updating, and deletion of data in a user-friendly interface.....",
            technologies: " React | Express | Node | MongoDB  ",
            link: "https://mycrud-app-mernstack.netlify.app/",
            github: "https://github.com/Kalaivanisudee/CRUD_App_Client",
          },
          {
            id: 8,
            title: "User Manangement App",
            img: IMG9,
            description:
              "To efficiently manage user accounts and access control.....",
            technologies: " React | Express | Node | MongoDB  ",
            link: "https://user-management-app-mern.netlify.app/",
            github: "https://github.com/Kalaivanisudee/User_Management_Client",
          },
    ]
    return (
    <>
     <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href={pro.link}
                target="_blank"
                className="btn btn-success"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  
    </>
  )
}
