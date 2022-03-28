import { FaDesktop } from 'react-icons/fa';
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs';
import TrackImg from '../img/track.png';

const TrackList = () => {
  return (
    <div className="trackList">
      <div className="top">
        <img src={TrackImg} alt="Track Cd" />
        <p className="trackName-artist">
          name <span>Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" name="songRange" id="songRange" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
};
export { TrackList };
