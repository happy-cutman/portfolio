import React from 'react'
import {Switch} from '@material-ui/core';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import LanguageIcon from '@material-ui/icons/Language';

import styles from './About.module.css'

const About = ({dark, toggleDark, toggleLocal, local}) => {
    return (
        <>
            {local ?
                <div>
                    <div className={dark ? styles.wrapperDark : styles.wrapper}>
                        <strong className={dark ? styles.titleDark : styles.title}>Обо мне</strong>
                        <div className={dark ? styles.aboutDark : styles.about}>
                            <div onClick={() => {
                                toggleLocal(prevMode => !prevMode)
                            }} className={styles.languageContainer}>
                                <LanguageIcon fontSize='inherit' className={dark ? styles.planetIconDark : styles.planetIcon}/>
                                {local ?
                                    <span className={dark ? styles.languageDark : styles.language}>RU</span>
                                    : <span className={dark ? styles.languageDark : styles.language}>EN</span>
                                }
                            </div>
                            <div className={styles.toggleContainer}>
                                <WbSunnyOutlinedIcon fontSize='inherit' className={dark ? styles.sunIconDark : styles.sunIcon}/>
                                <Switch size='small' color='default' checked={dark} onChange={() => {
                                    toggleDark(prevMode => !prevMode)
                                }}/>
                                <Brightness2OutlinedIcon fontSize='inherit' className={dark ? styles.moonIconDark : styles.moonIcon}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={dark ? styles.textDark : styles.text}>Имею опыт разработки лендингов и SPA приложений
                            с
                            нуля на связке React Redux. Ищу интересные
                            проекты и дружную команду, а также возможность развития и новый опыт. </p>
                    </div>
                </div>
                :
                <div>
                    <div className={dark ? styles.wrapperDark : styles.wrapper}>
                        <strong className={dark ? styles.titleDark : styles.title}>About me</strong>
                        <div className={dark ? styles.aboutDark : styles.about}>
                            <div onClick={() => {
                                toggleLocal(prevMode => !prevMode)
                            }} className={styles.languageContainer}>
                                <LanguageIcon fontSize='inherit' className={dark ? styles.planetIconDark : styles.planetIcon}/>
                                {local ?
                                    <span className={dark ? styles.languageDark : styles.language}>RU</span>
                                    : <span className={dark ? styles.languageDark : styles.language}>EN</span>
                                }
                            </div>
                            <div className={styles.toggleContainer}>
                                <WbSunnyOutlinedIcon fontSize='inherit' className={dark ? styles.sunIconDark : styles.sunIcon}/>
                                <Switch size='small' color='default' checked={dark} onChange={() => {
                                    toggleDark(prevMode => !prevMode)
                                }}/>
                                <Brightness2OutlinedIcon fontSize='inherit' className={dark ? styles.moonIconDark : styles.moonIcon}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={dark ? styles.textDark : styles.text}>I have experience in developing landings and SPA applications from scratch on React Redux bundle. I am looking for interesting projects and a friendly team, and the opportunity to gain new experience. </p>
                    </div>
                </div>}
        </>
    );
};

export default About;