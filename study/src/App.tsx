import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Icons } from './Icons';
import styled from 'styled-components';

const Side = styled.div`
    width: 23vh;
    height: 100vh;
    background-color: #202123;
    color: #ececf1;
`;
const NewChat = styled.button`
    width: 150px;
    height: 50px;
`;

function App() {
    const Image = '/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
    const setting = Icons.setting;
    const sidebar = Icons.sidebar;
    const add = Icons.add;
    const chat = Icons.chat;
    const logout = Icons.logout;
    const more = Icons.more;
    return (
        <Side>
            <NewChat>{add}</NewChat>
            <img src={Image} alt="Profile" style={{ width: '30px' }} />
            안녕하세요
        </Side>
    );
}

export default App;
