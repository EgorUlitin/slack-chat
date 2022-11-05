import { Link } from 'react-router-dom';
import image from '../404image.svg';

const NotFoundPage = () => {
  return <div className="text-center">
    <img className='img-fluid h-25' src={image} alt="Страница не найдена" />
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className='text-muted'>
      <span>Но вы можете перейти </span>
      <Link to='/'>на главную страницу</Link>
    </p>
  </div>
}

export default NotFoundPage;