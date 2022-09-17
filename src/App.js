import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components and Pages
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './components/pages/AboutPages';

//styles
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Opps! Are you sure that you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} 
                handleDelete = {deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
