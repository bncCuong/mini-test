/** @format */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import PlayerInput from "./PlayerInput";
import PlayerList from "./PlayerList";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Player {
  name: string;
  jerseyNumber: string;
  defenseScore: number; // Chỉ số phòng thủ
  techniques: string[]; // Danh sách kỹ thuật
  penaltyOrder: number | null; // Thứ tự bị phạt
  score: number; // Điểm số
}

const techniquesList = [
  "Neymar Rainbow Flick",
  "El Tornado",
  "Waka Waka",
  "Sombrero Flick",
  "Okocha Sombrero Flick",
  "Bolasie Flick",
  "Fake Pass",
  "Ball Roll Chop",
  "Ball Roll Cut",
  "Ball Hop",
  "Simple Rainbow",
];

const fakeData = [
  {
    name: "Ronaldo",
    jerseyNumber: "7",
    defenseScore: 2,
    techniques: [
      "Okocha Sombrero Flick",
      "Ball Roll Cut",
      "Bolasie Flick",
      "Waka Waka",
      "El Tornado",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Messi",
    jerseyNumber: "10",
    defenseScore: 3,
    techniques: [
      "Okocha Sombrero Flick",
      "Neymar Rainbow Flick",
      "Simple Rainbow",
      "Ball Roll Chop",
      "El Tornado",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Steven Gerrard",
    jerseyNumber: "8",
    defenseScore: 5,
    techniques: [
      "Okocha Sombrero Flick",
      "El Tornado",
      "Ball Roll Chop",
      "Fake Pass",
      "Ball Hop",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Fernando Torres",
    jerseyNumber: "9",
    defenseScore: 5,
    techniques: [
      "Sombrero Flick",
      "Neymar Rainbow Flick",
      "Simple Rainbow",
      "Bolasie Flick",
      "Waka Waka",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Neymar",
    jerseyNumber: "11",
    defenseScore: 2,
    techniques: [
      "Sombrero Flick",
      "Okocha Sombrero Flick",
      "Neymar Rainbow Flick",
      "Simple Rainbow",
      "Bolasie Flick",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Kylian Mbappe",
    jerseyNumber: "12",
    defenseScore: 1,
    techniques: [
      "Neymar Rainbow Flick",
      "Simple Rainbow",
      "Okocha Sombrero Flick",
      "Ball Hop",
      "El Tornado",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Manuel Neuer",
    jerseyNumber: "1",
    defenseScore: 5,
    techniques: [
      "Bolasie Flick",
      "Sombrero Flick",
      "Ball Roll Cut",
      "Ball Roll Chop",
      "El Tornado",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Pique",
    jerseyNumber: "4",
    defenseScore: 2,
    techniques: [
      "Sombrero Flick",
      "Neymar Rainbow Flick",
      "Okocha Sombrero Flick",
      "Ball Hop",
      "Bolasie Flick",
    ],
    penaltyOrder: null,
    score: 0,
  },
  {
    name: "Iniesta",
    jerseyNumber: "6",
    defenseScore: 3,
    techniques: [
      "Sombrero Flick",
      "El Tornado",
      "Neymar Rainbow Flick",
      "Fake Pass",
      "Ball Roll Cut",
    ],
    penaltyOrder: null,
    score: 0,
  },
];

const PlayGame = () => {
  const [players, setPlayers] = useState<Player[]>(fakeData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [round, setRound] = useState(0);
  const [penalizedPlayers, setPenalizedPlayers] = useState<Player[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [techniqueUsage, setTechniqueUsage] = useState<{
    [key: string]: number;
  }>({});

  const navigate = useNavigate();

  const handleAddPlayer = (
    player: Omit<
      Player,
      "defenseScore" | "techniques" | "penaltyOrder" | "score"
    >
  ) => {
    const newPlayer: Player = {
      ...player,
      defenseScore: Math.floor(Math.random() * 5) + 1, // Chỉ số phòng thủ ngẫu nhiên từ 1-5
      techniques: getRandomTechniques(),
      penaltyOrder: null,
      score: 0,
    };
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const getRandomTechniques = () => {
    const shuffled = techniquesList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // Lấy 5 kỹ thuật ngắu nhiên
  };

  const handleRemovePlayer = (index: number) => {
    setPlayers((prevPlayers) => prevPlayers.filter((_, i) => i !== index));
  };

  const startGame = () => {
    setRound(1);
    setGameOver(false);
    setPenalizedPlayers([]);
    setTechniqueUsage({}); // Reset thống kê kỹ thuật
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        penaltyOrder: null,
        score: 0,
      }))
    );
  };

  const checkPassing = (techniqueScore: number, defenseScore: number) => {
    const defensiveRatio = defenseScore / (techniqueScore + defenseScore);
    return Math.random() < defensiveRatio ? 0 : 1; // 0: thất bại, 1: thành công
  };

  const playRound = () => {
    if (gameOver) return;

    const availablePlayers = players.filter(
      (player) => player.penaltyOrder === null
    );
    if (availablePlayers.length === 1) {
      setGameOver(true);
      calculateScores();
      return;
    }

    const passerIndex = Math.floor(Math.random() * availablePlayers.length);
    const passer = availablePlayers[passerIndex];
    const receiverIndex = Math.floor(Math.random() * players.length);
    const receiver = players[receiverIndex];

    const technique =
      passer.techniques[Math.floor(Math.random() * passer.techniques.length)];

    const techniqueScore = techniquesList.indexOf(technique) + 2; // Độ khó kỹ thuật
    const defenseScore = receiver.defenseScore;

    setTechniqueUsage((prevUsage) => ({
      ...prevUsage,
      [technique]: (prevUsage[technique] || 0) + 1,
    }));

    const result = checkPassing(techniqueScore, defenseScore);

    if (result === 0) {
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) =>
          player.name === passer.name
            ? { ...player, penaltyOrder: round }
            : player
        )
      );
      setPenalizedPlayers((prev) => [...prev, passer]);
    }

    setRound((prev) => prev + 1);
  };

  const calculateScores = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        const penaltyOrder = player.penaltyOrder || 10;
        const techniqueScore = player.techniques.length; // Tổng điểm kỹ thuật
        return {
          ...player,
          score: 10 - penaltyOrder + techniqueScore,
        };
      })
    );
    openModal();
  };

  const chartData = {
    labels: Object.keys(techniqueUsage),
    datasets: [
      {
        label: "Số lần sử dụng",
        data: Object.values(techniqueUsage),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const displayTechniqueStats = () => {
    const sortedTechniques = Object.entries(techniqueUsage).sort(
      (a, b) => b[1] - a[1]
    );

    return (
      <div>
        <h3>Thống kê kỹ thuật:</h3>
        <ul>
          {Object.entries(sortedTechniques).map(([technique, count]) => {
            return <li key={technique}> {count} lần</li>;
          })}
        </ul>

        <Bar data={chartData} />
      </div>
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (round > 0 && !gameOver) {
      playRound();
    }
  }, [round]);

  return (
    <div className=" max-w-[1440px] mx-auto min-h-screen  bg-[#021843] h-auto py-5 flex  flex-col items-center">
      <h1>Chơi Game Đá Bóng Ma</h1>
      <div>
        <PlayerInput onAddPlayer={handleAddPlayer} existingPlayers={players} />
        <PlayerList
          players={players}
          onRemovePlayer={handleRemovePlayer}
          gameOver={gameOver}
        />

        {gameOver && displayTechniqueStats()}

        <div className="flex items-center justify-between">
          {players.length >= 10 && (
            <button
              onClick={startGame}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4">
              Bắt đầu trò chơi
            </button>
          )}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4 "
            onClick={() => navigate("/")}>
            Trở về
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal bg-black/90 w-[500px] h-[300px] px-36 py-6 rounded-lg">
          <h2 className="text-xl">Trò chơi đã kết thúc!</h2>
          <h3 className="text-lg">Top 3 cầu thủ:</h3>
          <ol className="">
            {players
              .sort((a, b) => b.score - a.score)
              .slice(0, 3)
              .map((player, index) => (
                <li key={index}>
                  Cầu thủ {player.name} - đạt {player.score} điểm
                </li>
              ))}
          </ol>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white py-2 px-4 rounded mt-4">
            Đóng
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default PlayGame;
