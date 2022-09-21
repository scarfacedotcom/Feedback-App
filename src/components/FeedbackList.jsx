import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedbackConext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

export default function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackConext)

  if (!isLoading && (!feedback || feedback.length === 0) ) {
    return <p>Opps! No Feedback yet</p>
  }

  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 1}}
            >
              <FeedbackItem key={item.id} item={item} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
  )
}

