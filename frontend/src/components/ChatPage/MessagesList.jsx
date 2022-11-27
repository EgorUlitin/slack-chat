import { useSelector } from 'react-redux';
import React, { useRef, useEffect } from 'react';
import { currentChannelMessagesSelector } from '../../slices';

function MessagesList() {
  const ref = useRef();

  const messages = useSelector(currentChannelMessagesSelector);

  useEffect(() => {
    ref.current?.scrollIntoView({ alignToTop: false });
  });

  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5">
      {messages.map(({ username, body, id }) => (
        <div key={id} className="text-break mb-2">
          <b ref={ref}>{username}</b>
          :
          {' '}
          {body}
        </div>
      ))}
    </div>
  );
}

export default MessagesList;
