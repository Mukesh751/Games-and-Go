import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../Homepage/Homepage/Homepage";
import Tictactoe from "../Games/Tictactoe/tictactoe";
import Ninetynine from "../Games/Ninetynine/ninetynine";
import Memory from "../Games/Memory/memory";
import TriviaGame from "../Games/Trivia/quiz";
import Fifteenpuzzle from "../Games/15Puzzle/Fifteenpuzzle";
import RockPaperScissors from "../Games/RockPaperScissors/RockPaperScissors";
import BrickBreakout from "../Games/BrickBreakout/BrickBreakout";
import Typo from "../Games/Typo/Typo";
import BallShooting from "../Games/BallShooting/BallShooting";
import MagicMatch from "../Games/Magic-match/magic_match";

// import Spin_the_wheel from "../Games/Spin_the_wheel/Spin_the_wheel";

import DiceThrow from "../Games/DiceThrow/main";
import Wordle from "../Games/Wordle/Wordle";


function AllRoutes() {
  return (
    <Routes>
      {/* Add all the routes with the right path here after importing them  */}
      <Route path="/" element={<Homepage />} />
      <Route path="/Tic" element={<Tictactoe />} />
      <Route path="/99" element={<Ninetynine />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/trivia" element={<TriviaGame />} />
      <Route path="15puzzle" element={<Fifteenpuzzle />} />
      <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
      <Route path="/brick-breakout" element={<BrickBreakout />} />
      <Route path="/typo" element={<Typo />} />
      <Route path="/BallShooting" element={<BallShooting/>} />
      <Route path="/MagicMatch" element={<MagicMatch/>}/>

      {/* <Route path="/Spin_the_wheel" element={<Spin_the_wheel/>}/> */}

      <Route path="/DiceThrow" element={<DiceThrow/>}/>
      <Route path="/Wordle" element={<Wordle/>} />

    </Routes>
  );
}

export default AllRoutes;
