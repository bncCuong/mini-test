/** @format */

import React from "react";

interface Player {
  name: string;
  jerseyNumber: string;
}

interface PlayerListProps {
  players: Player[];
  onRemovePlayer: (index: number) => void;
  gameOver?: boolean;
}

const PlayerList: React.FC<PlayerListProps> = ({
  players,
  onRemovePlayer,
  gameOver,
}) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">
        Danh Sách Cầu Thủ{" "}
        {players.length > 0 && <span>({players.length})</span>}
      </h2>
      <ul className="list-none p-0">
        {players.map((player, index) => (
          <li
            key={index}
            className={`p-2 mb-2 ${
              gameOver === true && (index == 0 || index == 1 || index == 2)
                ? "bg-blue-500 hover:bg-blue-600 "
                : "bg-gray-200 hover:bg-gray-300 "
            } rounded  flex items-center justify-between`}>
            <p className="text-black ">
              Cầu thủ số {index + 1} :
              <span className="font-bold text-black"> {player.name}</span> - Số
              áo: {player.jerseyNumber}
            </p>
            <button
              onClick={() => onRemovePlayer(index)} // Gọi hàm xóa khi nhấn nút
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ">
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
