import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList/GenreList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../components/Banner/Banner";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import GamesByGenre from "../components/GamesByGenre/GamesByGenre";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedgenresName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((res) => {
      setAllGameList(res.data.results);
    });
  };
  const getGameListByGenreId = (id) => {
    console.log(id);
    if (id != 0) {
      GlobalApi.getGameListByGenreId(id).then((res) => {
        setGameListByGenre(res.data.results);
      });
    }
  };
  return (
    <div className="grid grid-cols-4 p-8">
      <div className="  hidden md:block dark:text-white">
        <GenreList
          setGenresId={(setGenresId) => getGameListByGenreId(setGenresId)}
          selectedGenreName={(name) => setSelectedgenresName(name)}
        />
      </div>

      <div className="col-span-4 md:col-span-3 dark:text-white">
        {allGameList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[19]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenre
              gameList={gameListByGenre}
              selectedGenreName={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
