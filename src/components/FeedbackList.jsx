import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

export default function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0 ) {
    return <p>Opps! No Feedback yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
