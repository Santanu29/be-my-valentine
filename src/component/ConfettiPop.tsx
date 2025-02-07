import { useState } from "react";
import ReactConfetti from "react-confetti";

const ConfettiPop = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  };

  return (
    <div>
      <button onClick={handleConfetti}>Pop Confetti!</button>
      {isConfettiActive && <ReactConfetti />}
    </div>
  );
};

export default ConfettiPop;
