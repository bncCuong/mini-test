/** @format */

import React, { useState } from "react";

interface Player {
  name: string;
  jerseyNumber: string;
}

interface PlayerInputProps {
  onAddPlayer: (player: Player) => void;
  existingPlayers: Player[];
}

const PlayerInput: React.FC<PlayerInputProps> = ({
  onAddPlayer,
  existingPlayers,
}) => {
  const [name, setName] = useState<string>("");
  const [jerseyNumber, setJerseyNumber] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Thêm state để quản lý lỗi

  const handleAddPlayer = () => {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseJerseyNumber = jerseyNumber.toLowerCase();

    console.log(name);
    if (lowerCaseName == "") {
      setError("Bạn phải nhập tên cầu thủ");
    }

    if (jerseyNumber == "") {
      setError("Bạn phải số áo cầu thủ");
    }
    // Kiểm tra trùng tên và số áo
    const isNameTaken = existingPlayers.some(
      (player) => player.name.toLowerCase() === lowerCaseName
    );
    const isJerseyNumberTaken = existingPlayers.some(
      (player) => player.jerseyNumber === jerseyNumber
    );

    if (isNameTaken) {
      setError("Tên cầu thủ đã tồn tại.");
      return;
    }

    if (isJerseyNumberTaken) {
      setError("Số áo đã tồn tại.");
      return;
    }

    if (name && jerseyNumber) {
      onAddPlayer({ name, jerseyNumber });
      setName("");
      setJerseyNumber("");
      setError(""); // Reset lỗi khi thêm thành công
    }
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg bg-black">
      <h2 className="text-lg font-semibold mb-2 ">Thêm Cầu Thủ</h2>
      <input
        type="text"
        placeholder="Nhập tên cầu thủ"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border border-blue-500 rounded w-full text-black"
      />
      <input
        type="number"
        placeholder="Nhập số áo"
        value={jerseyNumber}
        onChange={(e) => setJerseyNumber(e.target.value)}
        className="mb-2 p-2 border border-blue-500 rounded w-full text-black"
      />
      <button
        onClick={handleAddPlayer}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Thêm Cầu Thủ
      </button>
      {error && error != "" && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PlayerInput;
