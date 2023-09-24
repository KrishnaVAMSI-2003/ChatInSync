import Message from "./Message.jsx";
import FlipMove from "react-flip-move";
import './style.css'

// eslint-disable-next-line react/prop-types
const Messages = ({messages, username}) => {
    return(
        <div className='messages__container'>
            <FlipMove style={{all:'inherit', margin: '0', boxShadow: 'none'}}>
                {
                    messages.map(message => (
                        <Message key={message.id}  message={message.data} systemUsername={username}/>
                    ))
                }
            </FlipMove>
        </div>
    )
}
export default Messages;