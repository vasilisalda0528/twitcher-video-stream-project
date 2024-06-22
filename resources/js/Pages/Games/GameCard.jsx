import React from "react";

import GameImg from "./game-thumbnail.jpg";

const GameCard = ({ game }) => {
  return (
    <div
      className="border dark:border-zinc-800 shadow-sm rounded-lg bg-white dark:bg-zinc-900 w-[300px] flex flex-col justify-between"
      key={`gamecard-${game.id}`}
    >
      <div className="m-1 text-lg text-[#5b21b6] dark:text-gray-200 items-center text-center  flex-grow flex justify-center items-center">
        {game.title}
      </div>
      <div className="relative">
        <img
          // src={game.thumbnail}
          src={game.thumbnail || GameImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default GameCard;
