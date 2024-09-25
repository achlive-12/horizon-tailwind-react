import React, { Suspense, useEffect } from 'react';
import PredictiveGame from './components/PredictiveGame';
import { IoDocuments } from "react-icons/io5";
import { MdBarChart} from "react-icons/md";
import Widget from 'components/widget/Widget';
import Banner from './components/Banner';

// Lazy load MathGame component
const LazyMathGame = React.lazy(() => import('./components/MathGame'));

const GamePage = () => {
  const title1 = "Predict & Win";
  const title2 = "Calculate & Win";
  const subtitle1 = "Place your bets and see where the number lands!";
  const subtitle2 = "Solve the math problems and earn points!";

  // Preload MathGame manually by triggering the import early
  useEffect(() => {
    const preloadMathGame = () => {
      import('./components/MathGame');
    };
    preloadMathGame();
  }, []);

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"GHS 340"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Deposit"}
          subtitle={"GHS 15"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Balance"}
          subtitle={"GHS 355"}
        />
      </div>

      {/* Banner Showcasing Games, 2 on a row */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Banner title={title1} subtitle={subtitle1} id='predictive-game-section'/>
        <Banner title={title2} subtitle={subtitle2} id='math-game'/>
      </div>

      {/* Games Section */}
      <div className="w-full flex flex-col justify-center items-start gap-8">
        {/* Predictive Game Section */}
        <PredictiveGame />
        {/* Math Game Section with Suspense */}
        <Suspense fallback={<div>Loading Math Game...</div>}>
          <LazyMathGame />
        </Suspense>
      </div>
    </div>
  );
};

export default GamePage;
