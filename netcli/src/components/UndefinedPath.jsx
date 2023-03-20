import './estilo.css';
import { Link } from 'react-router-dom';
export default function UndefinedPath() {
  return (
    <>
      <div className='error-page'>
        <div>
          <h1 data-h1='404'>404</h1>
          <p>NOT FOUND</p>
        </div>
      </div>
      <Link to='/' className='back'>
        GO BACK
      </Link>
    </>
  );
}
