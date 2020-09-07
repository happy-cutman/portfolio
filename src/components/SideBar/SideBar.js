import React from 'react'
import Avatar from '../Avatar/Avatar';

import styles from './SideBar.module.css';
import Contacts from '../Contacts/Contacts';

const SideBar = ({dark, local}) => {
    return (
        <>
            {local ?
                <div className={styles.container}>
                    <Avatar dark={dark} local={local}/>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Ожидаемая зарплата</strong>
                        <span className={dark ? styles.moneyDark : styles.money}>$300 - $500</span>
                    </div>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Местоположение</strong>
                        <span className={styles.text}>Украина, Киев</span>
                        <span className={styles.text}>Готов к удалённой работе</span>
                    </div>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Стаж</strong>
                        <span className={styles.text}>Опыт работы: <span className={dark ? styles.experienceTimeDark : styles.experienceTime}>9 месяцев</span></span>
                    </div>
                    <Contacts dark={dark} local={local}/>
                </div>
                :
                <div className={styles.container}>
                    <Avatar dark={dark} local={local}/>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Expected salary</strong>
                        <span className={dark ? styles.moneyDark : styles.money}>$300 - $500</span>
                    </div>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Location</strong>
                        <span className={styles.text}>Ukraine, Kiev</span>
                        <span className={styles.text}>Ready for remote work</span>
                    </div>
                    <div className={dark ? styles.sideBarItemDark : styles.sideBarItem}>
                        <strong className={dark ? styles.titleDark : styles.title}>Experience</strong>
                        <span className={styles.text}>Work experience: <span className={dark ? styles.experienceTimeDark : styles.experienceTime}>9 months</span></span>
                    </div>
                    <Contacts dark={dark} local={local}/>
                </div> }
        </>
    );
};

export default SideBar;