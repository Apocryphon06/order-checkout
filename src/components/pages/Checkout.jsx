import React, { useState } from 'react'
import Header from '../Header'

import headphone from '../assets/headphone.svg'
import Input from '../Input'
import AccountDetails from '../AccountDetails'
import CustomStepper from '../Stepper'
import ShippingDetails from '../ShippingDetails'
import Payment from '../Payment'

function Checkout() {
  const [count, setCount] = useState(1)

  const [activeStep, setActiveStep] = useState(1)

  return (
    <div>
      <Header count={count} />

      <div className="grid lg:grid-flow-col grid-flow-row gap-[40px] p-5 justify-center">
        {/* Stepper form */}
        <div className="lg:w-[694px]  px-[35px] pt-[35px] p-10 rounded-md bg-[#E2E8F0] grid justify-center items-center">
          <CustomStepper activeStep={activeStep} />

          {activeStep === 0 && <AccountDetails setActiveStep={setActiveStep} />}
          {activeStep === 1 && <ShippingDetails setActiveStep={setActiveStep} />}
          {activeStep === 2 && <Payment setActiveStep={setActiveStep} />}

        </div>

        {/* Order Summary */}
        <div className="lg:w-[421px] px-[35px] pt-[35px] rounded-md bg-[#E2E8F0] ">
          <div className="lg:w-[421px] grid lg:justify-start justify-center items-center">
            <p className="font-medium text-[20px] ">Order Summary</p>
            <img
              className="object-fit h-[162px]"
              width="351px"
              height="162px"
              src={headphone}
              alt="product"
            />

            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-[16px]">Sunt commodo nulla magna ut qui</p>
                <p className="font-bold text-[20px]">$299.99</p>
              </div>

              <div className="grid grid-flow-col gap-2 items-center">
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-2 text-[16px] text-[#718096] bg-[#fcfcfc] rounded-sm hover:shadow-lg"
                >
                  +
                </button>
                {count}
                <button
                  onClick={() => {
                    setCount(count - 1)
                  }}
                  className="px-2 text-[16px] text-[#718096] bg-[#fcfcfc] rounded-sm hover:shadow-lg"
                >
                  -
                </button>
              </div>
            </div>

            <p className="text-[16px] text-[#718096] ">
              Gift Card / Discount code
            </p>
            <div className="grid grid-flow-col gap-5 justify-between items-center">
              <Input
                placeholder="Enter Coupon code"
                type="text"
                width="w-[270px]"
              />

              <button className="bg-transparent p-3 rounded-md text-[#1876D1] border border-[#1876D1] font-medium hover:shadow-md">
                Apply
              </button>
            </div>

            <div className="flex flex-col py-5">
              <span className="flex flex-row justify-between items-center">
                <p className="text-[#4A5568] text-[18px] font-medium">
                  Sub total
                </p>
                <p className="text-[#2D3748] font-medium text-[18px]">
                  $299.99
                </p>
              </span>

              <span className="flex flex-row justify-between items-center">
                <p className="text-[#4A5568] text-[18px] font-medium">Tax</p>
                <p className="text-[#2D3748] font-medium text-[18px]">$2.99</p>
              </span>

              <span className="flex flex-row justify-between items-center">
                <p className="text-[#4A5568] text-[18px] font-medium">
                  Shipping
                </p>
                <p className="text-[#38B2AC] text-[18px] font-medium">Free</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
