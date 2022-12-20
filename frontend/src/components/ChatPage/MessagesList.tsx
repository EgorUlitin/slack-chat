import { useAppSelector } from 'hooks';
import React, { useRef, useEffect } from 'react';
import { currentChannelMessagesSelector } from '../../slices';
import { IMessage } from '../../slices/messagesSlice';

const MessagesList = () => {
  const ref = useRef<HTMLElement>(null);

  const messages = useAppSelector(currentChannelMessagesSelector);

  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'end', inline: 'nearest' });
  });

  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5">
      {messages.map(({ username, body, id }: IMessage) => (
        <div key={id} className="text-break mb-2">
          <b ref={ref}>{username}</b>
          :
          {' '}
          {body}
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
