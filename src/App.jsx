import { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import ReportPage from './components/ReportPage';

const SCREENS = { landing: 'landing', quiz: 'quiz', report: 'report' };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.landing);
  const [result, setResult] = useState(null);

  const handleStart = () => setScreen(SCREENS.quiz);

  const handleQuizComplete = (data) => {
    setResult(data);
    setScreen(SCREENS.report);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setResult(null);
    setScreen(SCREENS.landing);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (screen === SCREENS.quiz) return <QuizPage onComplete={handleQuizComplete} />;

  if (screen === SCREENS.report && result) {
    return (
      <ReportPage
        ownerElement={result.ownerElement}
        petElement={result.petElement}
        petName={result.petName}
        petType={result.petType}
        onRestart={handleRestart}
      />
    );
  }

  return <LandingPage onStart={handleStart} />;
}
