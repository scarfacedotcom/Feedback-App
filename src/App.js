import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components and Pages
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './components/pages/AboutPages';
import {FeedbackProvider} from './context/FeedbackContext'

//styles
import './App.css';

function App() {


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPages />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
