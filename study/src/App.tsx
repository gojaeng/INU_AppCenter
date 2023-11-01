import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Icons } from './Icons';
import styled from 'styled-components';
import ChatList from './ChatList';

const Side = styled.div`
    width: 23vh;
    height: 100vh;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
`;
const NewChat = styled.button`
    width: 150px;
    height: 50px;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
`;
const ChatListContainer = styled.div`
    margin-top: 20px;
    width: 20vh;
`;
function App() {
    const Image = '/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
    const setting = Icons.setting;
    const sidebar = Icons.sidebar;
    const add = Icons.add;
    const chat = Icons.chat;
    const logout = Icons.logout;
    const more = Icons.more;
    const chatItems = [
        {
            title: 'react에서 list 렌더링 하는 법',
            chatId: '3',
            lastChat: new Date().getTime(),
        },
        {
            title: 'react 장점',
            chatId: '2',
            lastChat: new Date().getTime() - 3600 * 24 * 3 * 1000,
        },
        {
            title: 'react JSX',
            chatId: '1',
            lastChat: new Date().getTime() - 3600 * 24 * 8 * 1000,
        },
        {
            title: 'react 프레임워크',
            chatId: '0',
            lastChat: new Date().getTime() - 3600 * 24 * 9 * 1000,
        },
    ];

    return (
        <div className="App">
            <Side>
                <h3>채팅</h3>
                <NewChat>{add}</NewChat>
                <br></br>
                <ChatListContainer>
                    <ChatList chatItems={chatItems} />
                </ChatListContainer>
                <img src={Image} alt="Profile" style={{ width: '30px' }} />
                안녕하세요
            </Side>
        </div>
    );
}

export default App;
