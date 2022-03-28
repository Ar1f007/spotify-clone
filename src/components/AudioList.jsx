import { useState, useEffect } from 'react';
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Songs, MusicPlayer } from './';

const AudioList = () => {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);

  const changeFavorite = (id) => {
    console.log('i');
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favorite = !song.favorite;
      }
    });

    setSongs([...songs]);
  };

  useEffect(() => {
    const songs = document.querySelectorAll('.songs .songName');
    function changeActiveClass() {
      songs.forEach((song) => song.classList.remove('active'));
      this.classList.add('active');
    }

    songs.forEach((song) => song?.songName?.addEventListener('click', changeActiveClass));
  }, []);

  const setMainSong = (songSrc, img) => {
    setSong(songSrc);
    setImg(img);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{Songs.length} songs</span>
      </h2>
      <div className="songsContainer">
        {songs?.map((song) => (
          <div
            key={song.id}
            className="songs"
            onClick={() => setMainSong(song?.song, song?.imgSrc)}
          >
            <div className="count">{song?.id < 10 ? `#0${song.id}` : `#${song.id}`}</div>
            <div className="song">
              <div className="imgBox">
                <img src={song.imgSrc} alt="song cover" />
              </div>

              <section className="section">
                <p className="songName">
                  {song.songName} <span className="spanArtist">{song.artist}</span>
                </p>
                <div className="hits">
                  <p className="hit">
                    <i>
                      <FaHeadphones />
                    </i>
                    95,939,535
                  </p>

                  <p className="duration">
                    <i>
                      <FaRegClock />
                      3.04
                    </i>
                  </p>

                  <div className="favorite" onClick={() => changeFavorite(song?.id)}>
                    {song?.favorite ? (
                      <i>
                        <FaHeart />
                      </i>
                    ) : (
                      <i>
                        <FaRegHeart />
                      </i>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
};
export { AudioList };
