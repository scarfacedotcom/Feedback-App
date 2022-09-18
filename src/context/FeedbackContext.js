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
  return <FeedbackConext.Provider value={{
    feedback,
  }} >
    {children}
  </FeedbackConext.Provider>
}

export default FeedbackConext