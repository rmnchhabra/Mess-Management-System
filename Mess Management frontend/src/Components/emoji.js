import React, { useState } from 'react'

import { RatingComponent } from 'react-rating-emoji'
import 'react-rating-emoji/dist/index.css'

const Emoji = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  }

  return <RatingComponent rating={rating} onClick={handleRating} />
  
}

export default Emoji;