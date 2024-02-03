import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('0d7d730e-5dc0-400b-989a-f62b9809f126', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />

    </div>
    )
}
export default ChatsPage;