import React, { useEffect, useState } from "react";
import GlobalApi from "../../services/GlobalApi";

const GenreList = ({setGenresId, selectedGenreName}) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenreList(res.data.results);
    });
  };
  return (
    <aside>
      <h2 className="text-[30px] font-bold dark:text-white mb-2">Category</h2>
      {genreList.map((item, index) => (
        <div key={index}
        onClick={()=>{setActiveIndex(index);setGenresId(item.id)
        selectedGenreName(item.name)}}
          className={`flex gap-2 items-center mb-2 cursor-pointer
        hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-700 group
        ${activeIndex == index? "bg-gray-300 dark:bg-slate-700":null} `}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all
            ease-out duration-300  ${activeIndex == index? "scale-105":null}`}
          />
          <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all
            ease-out duration-300 ${activeIndex == index? "font-bold":null}`}>{item.name}</h3>
        </div>
      ))}
    </aside>
  );
};

export default GenreList;
