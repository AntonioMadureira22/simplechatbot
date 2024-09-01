import React, { useState } from 'react'

const responses = {
    'hello': 'Hi! I am Chat Bot. How can I be of assistance?',
    'how are you':'I am just a simple bot, I do not have emotions but maybe one day!',
    'default' : 'I am not sure how to respond to that.',
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
    <div className='w-full max-w-md bg-gray shadow-xl rounded-lg p-4'>
        <div className='h-64 overflow-y-scroll shadow-xl mb-4 p-2 border border-gray-300 rounded'>
            {messages.map((msg, index) =>(
               <div key={index} className={`p-2 mb-2 ${msg.isBot ? 'bg-gray-200' : 'bg-purple-500 text-white'} rounded`}>
                        {msg.text}
                </div>

            ))}
        </div>
        <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        className="w-full border p-2 rounded"
                placeholder="Type your message..."
            />
            <button
                onClick={handleSendMessage}
                className="w-full bg-purple-500 text-white p-2 rounded mt-2"
            >
                Send
            </button>
        </div>
    );
};

export default Chatbot;
