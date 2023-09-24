import {useEffect, useState} from "react";
import InputComponent from './components/InputComponent.jsx'
import Messages from "./components/Messages.jsx";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from './components/firebase.js';
import './index.css';
import Navbar from "./components/Navbar.jsx";

const App = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let user = localStorage.getItem('chatAppUserName');
        if(user) setUsername(user);
        else {
            user = prompt('Enter your name:');
            while(!user) user = prompt('Username is required, please enter it: ');
            setUsername(user);
            localStorage.setItem('chatAppUserName', user);
        }
    }, []);
    useEffect(()=>{
        const q = query(collection(db, "messages"), orderBy("time", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({data: doc.data(), id : doc.id})));
        });
    },[])

    return(
        <div className='app'>
            <Navbar/>
            <Messages messages={messages} username={username}/>
            <InputComponent
                username = {username}
                message={message} setMessage={setMessage}
            />
        </div>
    )
}
export default App;