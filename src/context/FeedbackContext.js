import { createContext, useState } from "react";

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

  return <FeedbackConext.Provider value={{
    feedback,
    deleteFeedback,
  }} >
    {children}
  </FeedbackConext.Provider>
}

export default FeedbackConext