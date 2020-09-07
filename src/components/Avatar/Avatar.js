import React from 'react'
import avatar from './../../avatar.jpeg'
import styles from './Avatar.module.css';


const Avatar = ({dark, local}) => {
    return (
        <>
            {local
                ?
                <div className={dark ? styles.wrapperDark : styles.wrapper}>
                    <div>
                        <img className={styles.avatar} src={avatar} alt='аватар'/>
                    </div>
                    <strong className={dark ? styles.nameDark : styles.name}>Силкин Никита</strong>
                    <span className={styles.text}>Junior Frontend Developer</span>
                    <span className={styles.looking}>Ищу работу</span>
                </div>
                :
                <div className={dark ? styles.wrapperDark : styles.wrapper}>
                    <div>
                        <img className={styles.avatar} src={avatar} alt='аватар'/>
                    </div>
                    <strong className={dark ? styles.nameDark : styles.name}>Silkin Nikita</strong>
                    <span className={styles.text}>Junior Frontend Developer</span>
                    <span className={styles.looking}>Looking for a job</span>
                </div>
            }
        </>
    );
};

export default Avatar;