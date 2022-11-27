import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';
import { useApi } from '../../contexts/ApiProvider';

import { dataModalSelector } from '../../slices';

function RemoveChannelModal({ onHide }) {
  const { apiRemoveChannel } = useApi();
  const { t } = useTranslation();
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
          {t('modals.removeChannelModal.title')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {t('modals.removeChannelModal.body')}
        <div className="d-flex justify-content-end">
          <Button className="me-2 btn-secondary" onClick={onHide}>{t('modals.removeChannelModal.cancel')}</Button>
          <Button ref={ref} onClick={() => onSubmit(currentChannelId)} className="btn-danger">{t('modals.removeChannelModal.delete')}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RemoveChannelModal;
