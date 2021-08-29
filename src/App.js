import { ChatEngine, ChatFeed } from "react-chat-engine"; 
import './App.css'; 


function App()
{
    return (
        <ChatEngine 
            height="100vh"
            projectID="0b09f94d-ba10-4ee4-ab4c-ec4e9b05286f"
            userName="javascriptDev"
            userSecret="12345678"
            renderChatFeed={ (ChatAppProps) => <ChatFeed {...ChatAppProps}  />} 
        />
    )
}

export default App  ; 
