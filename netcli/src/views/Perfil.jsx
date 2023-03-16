import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContex';

export default function Perfil() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <div className='text-center mt-7'>
        <img
          className='inline-block h-32 w-32 rounded-full ring-2 ring-white'
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
        <p>
          Perfil de
          <span className='font-bold block'>Mike wasauskye</span>
        </p>
      </div>
    </div>
  );
}
