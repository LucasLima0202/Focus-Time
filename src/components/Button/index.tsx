import React from "react";
import style from "./Button.module.scss"

interface props {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void
}


function Button({type, children, onClick }:props ) {
  return(
    <button onClick={onClick} type={type} className={style.button}>
        {children}
      </button>
    
  )
}


export default Button;