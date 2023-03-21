import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import UsersPage from "./components/UsersPage/UsersPage";


function App() {


    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper_content'}>
            <Routes>
                <Route path="/profile" element={ <ProfilePage/> } />
                <Route path="/users" element={ <UsersPage/> } />
                <Route path="/dialogs" element={ <DialogsPage/> } />
            </Routes>
            </div>
        </div>
    );
}

export default App;
