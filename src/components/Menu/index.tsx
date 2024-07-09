import React from "react";
import style from "./Menu.module.scss"


class Menu extends React.Component {
    render() {
        return(
            <section className={style.menu}>
                <div className={style.part_logo}>
                    <a href="#"><img src="./images/logo.png" alt="img" width={'60em'}/></a>
                </div>
                <div className={style.part_blank}>Timer Task</div>
                <div className={style.part_socialmedia}>
                <a href="https://www.linkedin.com/in/lucas-lima-cunha-824b25210/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/in.png" alt="Linkedin" width={'30em'} />
                </a>
                <a href="https://portfolio-lucaslima022.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/Port.png" alt="Portifolio"  width={'30em'} />
                </a>
                <a href="https://github.com/LucasLima0202?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src="./images/Github.png" alt="GitHub"  width={'30em'} />
                </a>
                </div>
            </section>
        )
    }
}

export default Menu;