import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="" alt="logo"/>
            </div>
            <div className={styles.auth}>
                <div className={styles.user_photo}>
                    <img src="" alt="user-photo"/>
                </div>
                <a href="#">Выйти</a>
            </div>

        </div>
    );
};

export default Header;