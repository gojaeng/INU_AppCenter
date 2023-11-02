import React, { EventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { Icons } from './Icons';
import styled from 'styled-components';
import ChatList from './ChatList';
import { useState } from 'react';

const Side = styled.div`
    width: 23vh;
    height: 100vh;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const NewChat = styled.button`
    width: 150px;
    height: 40px;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
`;
const Sidebar = styled.button`
    width: 40px;
    height: 40px;
    background-color: #202123;
    color: #ececf1;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    cursor: pointer;
`;
const Profile = styled.div`
    height: 60px;
    background-color: #202123;
    color: #ececf1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
`;
const More = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-left: auto;
    margin-right: 30px;
    color: #8282a0;
`;

function App() {
    const Image = '/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
    const setting = Icons.setting;
    const sidebar = Icons.sidebar;
    const add = Icons.add;
    const chat = Icons.chat;
    const logout = Icons.logout;
    const more = Icons.more;

    const [chatItems, setChatItems] = useState([
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
    ]);
    const Addchat = async () => {
        const newchat = {
            title: '새로운 채팅',
            chatId: chatItems.length.toString(),
            lastChat: new Date().getTime(),
        };
        setChatItems((prevchatItems) => [newchat, ...prevchatItems]);
    };

    return (
        <div className="App">
            <Side>
                <div>
                    <h3>채팅</h3>
                    <div>
                        <NewChat onClick={Addchat}>{add} 새로운 채팅</NewChat> <Sidebar>{sidebar}</Sidebar>
                    </div>
                    <br />
                    <ChatList chatItems={chatItems} />
                </div>

                <div>
                    <hr style={{ border: '1px solid #8282A0' }} />
                    <Profile>
                        <br />
                        <img src={Image} alt="Profile" style={{ width: '30px' }} />
                        &nbsp;고재현
                        <More>{more}</More>
                    </Profile>
                </div>
            </Side>
        </div>
    );
}

export default App;
