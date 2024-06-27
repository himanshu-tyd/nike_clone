import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomeReviews = () => {
  return (
    <section className='max-container' >
      <h3 className='font-palanquin text-center text-4xl font-bold' >What our
      <span className='text-coral-red' > Customers </span>Says? 
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center ' >Her genuine stories from our statisfied about their exceptional experiences with us.</p>

<div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ' >
{
  reviews.map(review=>(
    <ReviewCard key={review.customerName} {...review} />
  ))
}
</div>

    </section>
  )
}

export default CustomeReviews