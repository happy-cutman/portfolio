import React from 'react'
import styles from './Main.module.css'
import About from '../About/About';


const Main = ({dark, toggleDark, local, toggleLocal}) => {
    return (
        <>
        {local ?
            <div className={styles.container}>
                <About dark={dark} toggleDark={toggleDark} toggleLocal={toggleLocal} local={local}/>
                <strong className={dark ? styles.titleDark : styles.title}>Фронтенд:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}>HTML, CSS, JavaScript(ES6)</li>
                        <li className={dark ? styles.ulItem : null}>ReactJS</li>
                        <li className={dark ? styles.ulItem : null}>Redux, ReduxThunk</li>
                        <li className={dark ? styles.ulItem : null}>SCSS, styled-components</li>
                        <li className={dark ? styles.ulItem : null}>Bootstrap, Material UI</li>
                    </ul>
                <strong className={dark ? styles.titleDark : styles.title}>Дополнительные навыки:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}>Git/Github</li>
                        <li className={dark ? styles.ulItem : null}>AJAX, JSON, REST API</li>
                    </ul>
                <strong className={dark ? styles.titleDark : styles.title}>Мои проекты:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}><a href='https://reactpies.web.app/'>ReactPies</a> - интернет магазин</li>
                        <li className={dark ? styles.ulItem : null}><a href='https://alan-news-bc5b1.web.app/'>Alan news</a> - голосовой помощник поиска новостей (работает только на английском)</li>
                    </ul>
            </div>
            :
                <div className={styles.container}>
                    <About dark={dark} toggleDark={toggleDark} toggleLocal={toggleLocal} local={local}/>
                    <strong className={dark ? styles.titleDark : styles.title}>Frontend:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}>HTML, CSS, JavaScript(ES6)</li>
                        <li className={dark ? styles.ulItem : null}>ReactJS</li>
                        <li className={dark ? styles.ulItem : null}>Redux, ReduxThunk</li>
                        <li className={dark ? styles.ulItem : null}>SCSS, styled-components</li>
                        <li className={dark ? styles.ulItem : null}>Bootstrap, Material UI</li>
                    </ul>
                    <strong className={dark ? styles.titleDark : styles.title}>Additional skills:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}>Git/Github</li>
                        <li className={dark ? styles.ulItem : null}>AJAX, JSON, REST API</li>
                    </ul>
                    <strong className={dark ? styles.titleDark : styles.title}>My projects:</strong>
                    <ul>
                        <li className={dark ? styles.ulItem : null}><a className={dark ? styles.link : null} href='https://reactpies.web.app/'>ReactPies</a> - ecommerce</li>
                        <li className={dark ? styles.ulItem : null}><a className={dark ? styles.link : null} href='https://alan-news-bc5b1.web.app/'>Alan news</a> - News search voice assistant (works only in English)</li>
                    </ul>
                </div>
        }
        </>
    );
};

export default Main;