import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Checkout = () => {

const [activeStep, setActiveStep] = useState(0)
const cart = useSelector((state ) => state.cart.cart)
const isFirstStep = activeStep === 0
const isSecondStep = activeStep === 1

const handleFormSubmit =() => {
  setActiveStep(activeStep + 1)
}

async function makePayment (value) {

}


  return (
    <div className='pt-[80px] w-4/5 mx-auto'>
      Checkout
    </div>
  )
}
