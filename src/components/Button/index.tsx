import React from "react";
import style from "./Button.module.scss"

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    type: 'button'
  };

  render() {
    const { type, children } = this.props;
    return (
      <button type={type} className={style.button}>
        {children}
      </button>
    );
  }
}

export default Button;