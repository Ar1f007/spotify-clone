import ArtistImg from '../img/artist.jpg';
import CheckMarkImg from '../img/check.png';
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <img src={ArtistImg} alt="artist" className="bannerImg" />
      <div className="content">
        <div className="breadcrumb">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <img src={CheckMarkImg} alt="check" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <Link to="/">Play</Link>
            <Link to="/">
              <i>
                <FaCheck />
              </i>
              Following
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
};
export { Banner };
