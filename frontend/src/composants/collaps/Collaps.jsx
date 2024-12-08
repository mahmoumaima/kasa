import React, { useState } from "react";
import style from './Collaps.module.css'
import openImg from '../../assets/open.svg'
import closeImg from '../../assets/close.svg'

function Collaps({title, children}) {

    const [isOpen, setIsOpen] = useState(false);

    const clickImage = () => {
        setIsOpen((prev) => !prev);
    };
    
  return (
    <>
      <div className={style.collaps}>
        <div className={style.collapsHeader} onClick={clickImage}>
            <h2>{title}</h2>
            <img src={isOpen ? closeImg : openImg} alt={isOpen ? "Close" : "Open"}/>
        </div>
        {isOpen && <div className={style.collapsDescription}>{children}</div>}
      </div>
    </>
  );
}
export default Collaps