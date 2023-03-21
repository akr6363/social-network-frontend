import React from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link to='/profile'>
                        Профиль
                    </Link>
                </li>
                <li>
                    <Link to='/users'>
                        Пользователи
                    </Link>
                </li>
                <li>
                    <Link to='/dialogs'>
                        Сообщения
                    </Link>
                </li>
                <li>
                    <Link to='/photos'>
                        Фотографии
                    </Link>
                </li>
                <li>
                    <Link to='/news'>
                        Новости
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;