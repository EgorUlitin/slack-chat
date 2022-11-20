import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useApi } from '../../contexts/ApiProvider';
import { Modal, Button } from 'react-bootstrap';

import { dataModalSelector } from '../../slices';

const RemoveChannelModal = ({ onHide }) => {
  const { apiRemoveChannel } = useApi();
  const ref = useRef();

  const currentChannelId = useSelector(dataModalSelector);

  useEffect(() => {
    ref.current?.focus();
  });

  const onSubmit = (id) => {
    apiRemoveChannel(id);
    onHide();
  };

  return (
    <Modal
      show
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Удалить канал
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Уверены?
        <div className='d-flex justify-content-end'>
          <Button className='me-2 btn-secondary' onClick={onHide}>Отменить</Button>
          <Button ref={ref} onClick={() => onSubmit(currentChannelId)} className='btn-danger'>Удалить</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
};

export default RemoveChannelModal;