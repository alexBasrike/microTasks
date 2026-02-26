import './App.css'
import {FullInput} from "./components/FullInput/FullInput.tsx";
import {useState} from "react";

type MessagesType = {
    message: string;
}

function App() {

    const [messages, setMessages] = useState<MessagesType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const addMessage = (message: string) => {
        if ( message.trim().length >= 1 ) {
            const newMessage = {message: message};
            setMessages([newMessage, ...messages]);
        }
    };

    return (
        <>

            <FullInput callBack={addMessage}/>

            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </>
    )
}

export default App
