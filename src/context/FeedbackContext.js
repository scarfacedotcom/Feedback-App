import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackConext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch (`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    
    setFeedback(data)
  }

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