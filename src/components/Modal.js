import React from 'react';

import style from "../static/css/Modal.module.css"
import x from "../static/img/x.svg";

const Modal = ({ visible, onClose, title, subtitle, children }) => {
    if(!visible) return <></>

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        <p className={style.title}>{title}</p>
                        <p className={style.subtitle}>{subtitle}</p>
                    </div>
                    <div className={style.xIcon} onClick={onClose}>
                        <img src={x} className={style.close} />
                    </div>
                </div>
                <hr className={style.hr} />
                {children}
            </div>
        </div>
    );
}

export default Modal;