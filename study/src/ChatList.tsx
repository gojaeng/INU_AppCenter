import React from 'react';
import { Icons } from './Icons';

const ChatList: React.FC<{ chatItems: { title: string; chatId: string; lastChat: number }[] }> = ({ chatItems }) => {
    const chatIcon = Icons.chat;
    const lastDay = new Date().getTime();

    const groupByDate: {
        lastDay?: { title: string; chatId: string; lastChat: number }[];
        lastWeek?: { title: string; chatId: string; lastChat: number }[];
        lastMonth?: { title: string; chatId: string; lastChat: number }[];
    } = {};

    chatItems.forEach((item) => {
        const diff = Math.floor((lastDay - item.lastChat) / (1000 * 3600 * 24));
        const groupKey = diff <= 1 ? 'lastDay' : diff <= 7 ? 'lastWeek' : 'lastMonth';

        if (!groupByDate[groupKey]) {
            groupByDate[groupKey] = [];
        }

        groupByDate[groupKey]?.push(item);
    });

    return (
        <div style={{ textAlign: 'left' }}>
            {groupByDate.lastDay && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 1일</p>

                    {groupByDate.lastDay.map((chat) => (
                        <p style={{ marginLeft: '20px', cursor: 'pointer' }} key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </p>
                    ))}
                </>
            )}
            {groupByDate.lastWeek && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 7일</p>

                    {groupByDate.lastWeek.map((chat) => (
                        <p style={{ marginLeft: '20px', cursor: 'pointer' }} key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </p>
                    ))}
                </>
            )}
            {groupByDate.lastMonth && (
                <>
                    <p style={{ marginLeft: '20px', color: '#8282A0' }}>지난 30일</p>

                    {groupByDate.lastMonth.map((chat) => (
                        <p style={{ marginLeft: '20px', cursor: 'pointer' }} key={chat.chatId}>
                            {chatIcon} &nbsp;
                            {chat.title}
                        </p>
                    ))}
                </>
            )}
        </div>
    );
};

export default ChatList;
