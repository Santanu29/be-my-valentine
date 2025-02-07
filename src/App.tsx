import { useState } from "react";
import ReactConfetti from "react-confetti";
import "./App.css";
import BeatingHeart from "./component/BeatingHeart";
import RippleButton from "./component/RippleButton";

const messages = [
  `Will you be my Valentine? Pretty please with sprinkles on top? 🍩💕`,
  `Saying yes means unlimited hugs and your favorite dessert. Tempted yet? 🍰🥰`,
  `Are you sure? Because my heart just skipped a beat waiting for you! 💓😳`,
  `Each 'no' makes my puppy eyes even bigger. Do you really want that? 🥺🐶`,
  `Okay, but what if I promise to do all the chores for a week?! 🏠😇`,
  `I might cry if you say no again… but in a cute way! 😢💖`,
  `At this point, I'm about to write a sad love song about you rejecting me! 🎶💔`,
  `I am but a lonely soul, wandering in despair, waiting for your ‘yes’... 😩🌹`,
  `Please… have mercy on this poor heart. I am but a fool in love! 😭💘`,
  `Enough is enough. There's only one choice now… Press YES 😑💖`,
  `FINALLY! You said YES! 🎉🥳 Happiest person alive—now let's celebrate! 💖🎊`,
];

const App = () => {
  const [count, setCount] = useState(0);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  };
  return (
    <>
      {isConfettiActive && <ReactConfetti />}
      <div className="App">
        <div className="card-wrapper">
          <div className="title">Will you be my Valentine?</div>
          {/* <BeatingHeart size={30} rotation={-20} top={90} left={25} /> */}
          <BeatingHeart size={40} rotation={-80} top={95} right={20} delay={0.3} />
          <BeatingHeart size={20} rotation={-50} top={120} left={30} delay={0.1} />
          <BeatingHeart size={30} rotation={-20} bottom={70} left={25} delay={0.4} />
          <BeatingHeart size={35} rotation={-30} bottom={150} right={50} delay={0.7} />
          <BeatingHeart size={15} rotation={-90} bottom={10} right={50} delay={0.6} />

          {/* <BeatingHeart size={15} rotation={-90} top={15} right={150} delay={0.5} /> */}

          <BeatingHeart size={15} rotation={-90} top={350} left={30} delay={0.5} />
          <BeatingHeart size={15} rotation={-30} top={250} right={30} delay={0.9} />
          <BeatingHeart size={20} rotation={-60} bottom={15} left={180} delay={0.55} />
          {/* <BeatingHeart size={25} rotation={-70} top={150} left={180} delay={0.5} /> */}

          <div className="center-text">{messages[count]}</div>
          <div className="button-wrapper">
            {count !== 10 && (
              <RippleButton
                className="yes-button ripple"
                onClick={() => {
                  setCount(10);
                  handleConfetti();
                }}
              >
                Yes
              </RippleButton>
            )}
            {count < 9 && (
              <RippleButton
                className="no-button ripple"
                onClick={() => setCount(Math.min(count + 1, 9))}
              >
                No
              </RippleButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
