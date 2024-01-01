import './index.scss';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div className='header'>
            <ul className='menu'>
                <li className='menu-item'>
                    <Link to="">Main</Link>
                </li>
                <li className='menu-item'>
                    <Link to="posts">Post List</Link>
                </li>
                <li className='menu-item'>
                    <Link to="todos">Todo list</Link>
                </li>
                <li className='menu-item'>
                    <Link to="users">User List</Link>
                </li>
            </ul>
        </div> 
    )
}

export default Header;