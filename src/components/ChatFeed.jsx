import MesssageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat] 
    console.log(chat, userName, messages)

    const renderMessages = () => {
        const keys = Object.keys(messages)
    }
    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;