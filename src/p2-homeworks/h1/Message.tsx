import React from 'react'
import styles from "./Message.module.css"
import {messageData} from "./HW1";

type messageDataType = typeof messageData

const Message = ({avatar, name, message, time}: messageDataType) => {

    return (
        <div>
            <div className={styles.messageInstance}>
                <div>
                    <img className={styles.img} src={avatar}/>
                </div>
                <div>
                    <div className={styles.messageText}>
                        <div className={styles.userName}>{name}</div>
                        <div className={styles.userMessage}>
                            {message}
                        </div>
                        <div className={styles.userMessageTime}>
                            {time}
                        </div>
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <textarea></textarea>*/}
            {/*    <button>send</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Message
