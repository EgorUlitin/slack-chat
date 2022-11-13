import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { channelsSelector, currentChannelIdSelector } from '../../slices';
import { switchChannel } from '../../slices/channelsSlice';

const ChannelList = () => {
  const dispatch = useDispatch();

  const channels = useSelector(channelsSelector);
  const currentChannelId = useSelector(currentChannelIdSelector);

  return (<ul className="nav flex-column nav-pills nav-fill px-2">
    {channels.map(({ id, name }) => {
      const style = cn("w-100 rounded-0 text-start btn", { 'btn-secondary': id === currentChannelId });
      return <li key={id} className="nav-item w-100">
        <button onClick={() => dispatch(switchChannel({ id }))} className={style}>
          <span className="me-1">#</span>
          {name}
        </button>
      </li>
    })}
  </ul>)
}

export default ChannelList;