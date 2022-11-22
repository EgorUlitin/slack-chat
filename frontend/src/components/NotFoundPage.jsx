import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from '../404image.svg';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div className="text-center">
    <img className='img-fluid h-25' src={image} alt="Страница не найдена" />
    <h1 className="h4 text-muted">{t('notFoundPage.h1')}</h1>
    <p className='text-muted'>
      <span>{t('notFoundPage.span')}</span>
      <Link to='/'>{t('notFoundPage.link')}</Link>
    </p>
  </div>
}

export default NotFoundPage;