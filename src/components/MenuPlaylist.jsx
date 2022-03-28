import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';

import { Playlist } from './';

const MenuPlaylist = () => {
  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>Playlist</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll">
        {Playlist.map((list) => (
          <div key={list.id} className="playlist">
            <i className="list">
              <BsMusicNoteList />
            </i>
            <p>{list.name}</p>
            <i className="trash">
              <BsTrash />
            </i>
          </div>
        ))}
      </div>
    </div>
  );
};
export { MenuPlaylist };
