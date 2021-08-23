import { ChatEngine } from 'react-chat-engine';
import './App.css'
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="
            f2dbf2bf-bd43-4f47-b978-477d3a66ecea"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    )
}

export default App;