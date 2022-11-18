import { useSelector } from 'react-redux';
import { currentChannel, currentChannelMessagesSelector } from '../../slices';

const ChannelHeader = () => {
  const { name } = useSelector(currentChannel) || {};
  const messages = useSelector(currentChannelMessagesSelector);

  return <div className="bg-light mb-4 p-3 shadow-sm small">
    <p className="m-0"><b># {name}</b></p>
    <span className="text-muted">{messages.length} сообщений</span>
  </div>
}

export default ChannelHeader;