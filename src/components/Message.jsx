import { forwardRef } from "react";
import './style.css'

// eslint-disable-next-line react/display-name
const Message = forwardRef(({message, systemUsername}, ref) => {
    const {username, time} = message
    const isSelf = username === systemUsername
    const h = time.toDate().getHours();
    const m = time.toDate().getMinutes();
    //{message.time.toDate().toLocaleDateString()}
    return (
        <div ref={ref} className={`message__box ${ isSelf ? 'self__message' : 'others__message'}`}>
            {!isSelf && <h5 className='message__username'>{message.username}</h5>}
            <h3 className='message__text'>{message.message}</h3>
            <p className='message__time'>{`${h<9 ? '0':''}${h.toString()}:${m<9 ? '0':''}${m.toString()}`}</p>
        </div>
    );
});

export default Message;