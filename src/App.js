import { ChatEngine } from 'react-chat-engine';
import './App.css'

import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="
            f2dbf2bf-bd43-4f47-b978-477d3a66ecea"
            userName="aripei"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    )
}

export default App;