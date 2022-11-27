import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

import { channelsSelector, currentChannelIdSelector } from '../../slices';
import { switchChannel } from '../../slices/channelsSlice';
import { openModal } from '../../slices/modalsSlice';

import ChannelAdder from "./ChannelAdder";

const ChannelList = () => {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelector);
  const { t } = useTranslation();

  const currentChannelId = useSelector(currentChannelIdSelector);

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChannelAdder />
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map(({ id, name, removable }) => {
          const isActiveChannel = id === currentChannelId;
          const style = cn("w-100 rounded-0 text-start btn text-truncate", { 'btn-secondary': isActiveChannel });
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
                <span class="visually-hidden">Управление каналом</span>
                <Dropdown.Item onClick={() => dispatch(openModal({ type: 'remove', data: id }))} eventKey="1">{t('channelList.delete')}</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(openModal({ type: 'rename', data: id }))} eventKey="2">{t('channelList.rename')}</Dropdown.Item>
              </DropdownButton>}
            </ButtonGroup>
          </li>
        })}
      </ul>
    </div>)
}

export default ChannelList;