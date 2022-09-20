import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackConext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This Feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This Feedback item 2',
      rating: 9
    },{
      id: 3,
      text: 'This Feedback item 3',
      rating: 8
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm('Opps! Are you sure that you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item ))
    )
  }

  const editFeedback = (item) => {
    setFeedbackEdit ({
      item,
      edit: true
    })
  }
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


  return <FeedbackConext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
  }} >
    {children}
  </FeedbackConext.Provider>
}

export default FeedbackConext