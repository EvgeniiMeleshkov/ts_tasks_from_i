import React from 'react'
import styles from "./Message.module.css"

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = ({avatar, name, message, time}: MessageDataType) => {

    return (
        <div >
            <div className={styles.messageInstance}>
                <div>
                    <img alt={''} className={styles.img} src={avatar}/>
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

        </div>
    )
}

export default Message
