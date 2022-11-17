
import ChannelHeader from "./ChannelHeader";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";

const MessageBox = () => {
  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <ChannelHeader />
        <MessagesList />
        <MessageInput />
      </div>
    </div>
  )
};

export default MessageBox;