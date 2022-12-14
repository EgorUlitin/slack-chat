import React from 'react';
import { useAppSelector } from 'hooks';
import { useTranslation } from 'react-i18next';
import { currentChannel, currentChannelMessagesSelector } from '../../slices';

function ChannelHeader() {
  const { t } = useTranslation();
  const { name } = useAppSelector(currentChannel) || {};
  const messages = useAppSelector(currentChannelMessagesSelector);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {' '}
          {name}
        </b>
      </p>
      <span className="text-muted">{t('channelHeader.messages', { count: messages.length })}</span>
    </div>
  );
}

export default ChannelHeader;
