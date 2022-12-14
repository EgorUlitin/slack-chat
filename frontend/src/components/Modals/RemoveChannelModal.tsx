import React, { useEffect, useRef } from 'react';
import { useAppSelector } from 'hooks';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';
import { useApi } from '../../contexts/ApiProvider';

import { dataModalSelector } from '../../slices';

function RemoveChannelModal({ onHide }: { onHide: () => void }) {
  const { apiRemoveChannel } = useApi();
  const { t } = useTranslation();
  const ref = useRef<HTMLButtonElement>(null);

  const currentChannelId = useAppSelector(dataModalSelector);

  useEffect(() => {
    ref.current?.focus();
  });

  const onSubmit = (id: number | null) => {
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
