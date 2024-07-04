import React from "react";
import "./Menu.css"


class Menu extends React.Component {
    render() {
        return(
            <section className="menu">
                <div className="part-logo">
                    <a href="#"><img src="./images/logo.png" alt="img" width={'60em'}/></a>
                </div>
                <div className="part-blank"></div>
                <div className="part-socialmedia">
                <a href="https://www.linkedin.com/in/lucas-lima-cunha-824b25210/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/in.png" alt="Linkedin" width={'40em'} />
                </a>
                <a href="https://portfolio-lucaslima022.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/Port.png" alt="Portifolio"  width={'40em'} />
                </a>
                <a href="https://github.com/LucasLima0202?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src="./images/Github.png" alt="GitHub"  width={'40em'} />
                </a>
                </div>
            </section>
        )
    }
}

export default Menu;