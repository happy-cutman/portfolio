import React from 'react'
import styles from './Contacts.module.css'


const Contacts = ({dark, local}) => {
    return (
        <>
            {local
                ?
                <div className={styles.contacts}>
                    <strong className={dark ? styles.titleDark : styles.title}>Контакты</strong>
                    <span className={styles.text}>Телефон: <span className={dark ? styles.contactsTextDark : styles.contactsText}>+380(099)3716501</span></span>
                    <span className={styles.text}>Skype: <span className={dark ? styles.contactsTextDark : styles.contactsText}>Cooq11</span></span>
                    <span className={styles.text}>Telegram: <a  href='https://telegram.me/happy_cutman'>@happy_cutman</a></span>
                    <span className={styles.text}>Github: <a  href='https://github.com/happy-cutman'>happy-cutman</a></span>
                    <span className={styles.text}>Почта: <a  href='mailto:happy.cutman@gmail.com'>happy.cutman@gmail.com</a></span>
                </div>
                :
                <div className={styles.contacts}>
                    <strong className={dark ? styles.titleDark : styles.title}>Contacts</strong>
                    <span className={styles.text}>Phone: <span className={dark ? styles.contactsTextDark : styles.contactsText}>+380(099)3716501</span></span>
                    <span className={styles.text}>Skype: <span className={dark ? styles.contactsTextDark : styles.contactsText}>Cooq11</span></span>
                    <span className={styles.text}>Telegram: <a className={dark ? styles.link : null} href='https://telegram.me/happy_cutman'>@happy_cutman</a></span>
                    <span className={styles.text}>Github: <a className={dark ? styles.link : null} href='https://github.com/happy-cutman'>happy-cutman</a></span>
                    <span className={styles.text}>Email: <a className={dark ? styles.link : null} href='mailto:happy.cutman@gmail.com'>happy.cutman@gmail.com</a></span>
                </div>
            }
        </>
    );
};

export default Contacts;