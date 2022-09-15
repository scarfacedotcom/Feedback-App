import { useState } from 'react';

// components
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

//styles
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
