import React, { useState } from 'react'

const responses = {
    'hello': 'Hi! I am Chat Bot. How can I be of assistance?',
    'how are you':'I am just a simple bot, I do not have emotions but maybe one day!',
    'can you do math' : '9 + 10 = 21',
    'default' : 'I am not sure how to respond to that. My capabilities are limited at the moment'
};

const Chatbot = () => {
    const[messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isBot: false}]);
            setInput('');
            const botResponse = responses[input.toLowerCase()] ||['default'];
            setMessages([...messages, {text: input, isBot: false}, {text: botResponse, isBot:true}]);
        }
    }
  return (
    <div>Chatbot</div>
  )
}

export default Chatbot