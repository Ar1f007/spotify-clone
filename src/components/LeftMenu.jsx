import '../Styles/LeftMenu.css';
import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

import { Menu, MenuList, MenuPlaylist } from './';

const LeftMenu = () => {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={'Menu'} menuItems={MenuList} />
      <MenuPlaylist />
    </div>
  );
};
export { LeftMenu };
