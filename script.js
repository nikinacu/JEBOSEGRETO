{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const messagesDiv = document.getElementById('messages');\
const usernameInput = document.getElementById('username');\
const messageInput = document.getElementById('message');\
const sendButton = document.getElementById('send');\
\
const messageList = [];\
\
function updateChat() \{\
    messagesDiv.innerHTML = messageList\
        .map(msg => `<p><strong>$\{msg.user\}:</strong> $\{msg.text\}</p>`)\
        .join('');\
    messagesDiv.scrollTop = messagesDiv.scrollHeight;\
\}\
\
sendButton.addEventListener('click', () => \{\
    const user = usernameInput.value.trim();\
    const text = messageInput.value.trim();\
\
    if (user && text) \{\
        messageList.push(\{ user, text \});\
        updateChat();\
        messageInput.value = '';\
    \}\
\});\
}
