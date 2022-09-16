import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you like to rate us?</h2>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
            required
          />
          <Button 
            type="submit"
            // version="secondary"
          >Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
