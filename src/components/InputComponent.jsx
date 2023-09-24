import {Button, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import db from './firebase.js'
import SendIcon from '@mui/icons-material/Send';
import './style.css'

const InputComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const {username, message, setMessage} = props;
    const handleSubmit = (e) => {
        e.preventDefault();

        async function addToDatabase() {
            try {
                const docRef = await addDoc(collection(db, "messages"), {
                    username: username,
                    message: message,
                    time: new Date()
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        addToDatabase().then(()=>{
            setMessage("");
        }).catch(err => console.log(err));
    }
    return(
        <form className='input__form'>
            <FormControl className='form__control'>
                <InputLabel>Enter Your Message...</InputLabel>
                <Input className='input__field' value={message} onChange={(e) => setMessage(e.target.value)}/>
            </FormControl>
            <Button disabled={!message} variant="contained" type='submit' onClick={handleSubmit}>
                <SendIcon/>
            </Button>
        </form>
    )
}
export default InputComponent