import React, { Suspense, useEffect, useRef, useState } from 'react';
import PredictiveGame from './components/PredictiveGame';
import { IoDocuments } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import Widget from 'components/widget/Widget';
import Banner from './components/Banner';

// Lazy load MathGame component
const LazyMathGame = React.lazy(() => import('./components/MathGame'));

const GamePage = () => {
  const title1 = "Predict & Win";
  const title2 = "Calculate & Win";
  const subtitle1 = "Place your bets and see where the number lands!";
  const subtitle2 = "Solve the math problems and earn points!";

  // State to control visibility of floating button
  const [isBalanceOffScreen, setIsBalanceOffScreen] = useState(false);

  // Ref to observe the Balance widget
  const balanceRef = useRef(null);

  // Intersection Observer to detect if the balance widget is off screen
  useEffect(() => {
    const currentBalanceRef = balanceRef.current;  // Store ref value in local variable

    // Define the Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state based on whether the balance widget is visible
        setIsBalanceOffScreen(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    // Observe the balance widget
    if (currentBalanceRef) {
      observer.observe(currentBalanceRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentBalanceRef) {
        observer.unobserve(currentBalanceRef);
      }
    };
  }, []);

  return (
    <div>
      {/* Widgets Section */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6" ref={balanceRef}>
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
          ref={balanceRef}  // Attach ref to Balance widget
        />
      </div>
      
      {/* Banner Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Banner title={title1} subtitle={subtitle1} id="predictive-game-section" />
        <Banner title={title2} subtitle={subtitle2} id="math-game" />
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

      {/* Floating Button for Balance */}
      {isBalanceOffScreen && (
        <button
          className="fixed bottom-4 right-4 bg-white text-gray-400 p-4 rounded-full shadow-lg flex items-center justify-center dark:bg-navy-800 dark:text-white dark:border border-gray-400"
        >
          Balance: GHS 355
        </button>
      )}
    </div>
  );
};

export default GamePage;
