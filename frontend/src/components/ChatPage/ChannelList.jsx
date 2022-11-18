import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { channelsSelector, currentChannelIdSelector } from '../../slices';
import { switchChannel } from '../../slices/channelsSlice';
import { openModal } from '../../slices/modalsSlice';

import ChannelAdder from "./ChannelAdder";

import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const ChannelList = () => {
  const dispatch = useDispatch();

  const channels = useSelector(channelsSelector);
  const currentChannelId = useSelector(currentChannelIdSelector);

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChannelAdder />
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map(({ id, name, removable }) => {
          const isActiveChannel = id === currentChannelId;
          const style = cn("w-100 rounded-0 text-start btn", { 'btn-secondary': isActiveChannel });
          return <li key={id} className="nav-item w-100">
            <ButtonGroup className='d-flex'>
              <button onClick={() => dispatch(switchChannel({ id }))} className={style}>
                <span className="me-1">#</span>
                {name}
              </button>
              {removable && <DropdownButton
                as={ButtonGroup}
                key={id}
                variant={isActiveChannel ? 'secondary' : ''}
                title={''}
              >
                <Dropdown.Item onClick={() => dispatch(openModal({ type: 'remove', data: id }))} eventKey="1">Удалить</Dropdown.Item>
                <Dropdown.Item eventKey="2">Переименовать</Dropdown.Item>
              </DropdownButton>}
            </ButtonGroup>
          </li>
        })}
      </ul>
    </div>)
}

export default ChannelList;