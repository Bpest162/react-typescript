import './index.scss';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    const setActive = ({isActive}: any) => isActive ? 'active-link' : ''

    return(
        <div className='header'>
            <ul className='menu'>
                <li className='menu-item'>
                    <NavLink to="" className={setActive}>Main</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to="posts" className={setActive}>Post List</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to="todos" className={setActive}>Todo list</NavLink>
                </li>
                <li className='menu-item'>
                    <NavLink to="users" className={setActive}>User List</NavLink>
                </li>
            </ul>
        </div> 
    )
}

export default Header;