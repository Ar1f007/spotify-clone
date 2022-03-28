import { NavLink } from 'react-router-dom';
import '../Styles/MainContainer.css';
import { Banner } from './';
import { FaUsers } from 'react-icons/fa';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <NavLink to="/">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/albums">Albums</NavLink>
          </li>
          <li>
            <NavLink to="/songs">Songs</NavLink>
          </li>
          <li>
            <NavLink to="/fans">Fans</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
    </div>
  );
};
export { MainContainer };
