import { useSelector } from "react-redux";
// import { useEffect } from "react";
import { currentChannelMessagesSelector } from '../../slices';

const MessageBox = () => {
  const messages = useSelector(currentChannelMessagesSelector);

  return (
    <div id='messages-box' className="chat-messages overflow-auto px-5">
      {messages.map(({ username, body, id }) => <div key={id} className="text-break mb-2"><b>{username}</b>: {body}</div>)}
    </div>
  )
}

export default MessageBox;