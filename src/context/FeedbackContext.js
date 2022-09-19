import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackConext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Opps! Are you sure that you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


  return <FeedbackConext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
  }} >
    {children}
  </FeedbackConext.Provider>
}

export default FeedbackConext