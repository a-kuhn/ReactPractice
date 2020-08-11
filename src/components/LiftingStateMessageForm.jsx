import React, {useState} from 'react';

export default ({onNewMessage}) => {

    const [msg, setMsg] = useState('');

    const newMessageHandler = (e) => {
        e.preventDefault();
        onNewMessage(msg);
    };

    return(
        <div>
            <form onSubmit={newMessageHandler}>
                <textarea 
                    rows="5"
                    columns="160"
                    name="msg" 
                    placeholder="type new message here..."
                    onChange={(e)=>{setMsg(e.target.value)}}
                    value={msg}
                >
                </textarea>
                <button type="submit" >post message</button>
            </form>
        </div>
    );
}