import { useState } from 'react';

// components
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

//styles
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Opps! Are you sure that you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} 
        handleDelete = {deleteFeedback}
      />
      </div>
    </>
  );
}

export default App;
