import React from 'react'
import Button from './Button'
import Input from './Input'

function Payment({ setActiveStep }) {
  return (
    <div className="lg:w-[694px] grid justify-start items-center lg:px-[50px]">
      <p className="font-medium text-[20px]">Payment Details</p>

      <div className="flex flex-row justify-between items-center">
        <p className="text-[#2D3748] font-medium">
          Use saved card
        </p>
        <Input
          placeholder="Mastercard ending 9066"
          type="text"
          width="w-[278px]"
        />
      </div>

      <div className="py-[11px]">
        <p className="text-[#718096] text-[16px]">Name on card</p>

        <Input placeholder="John Hancock" type="text" width="w-[534px]" />
      </div>

      <div className="py-[11px]">
        <p className="text-[#718096] text-[16px]">Card number</p>

        <Input placeholder="1234-4332-2121" type="text" width="w-[534px]" />
      </div>

      <div className="py-[11px] grid grid-flow-col gap-[40px]">
        <div>
          <p className="text-[#718096] text-[16px]">Delivery Instructions</p>

          <Input placeholder="Leave at doorstep" type="text" width="w-[212px]" />
        </div>
        <div>
          <p className="text-[#718096] text-[16px]">CVV</p>

          <Input placeholder="877" type="text" width="w-[278px]" />
        </div>
      </div>

      <div className=" border-b border-[#dfdfdf] pt-[50px]" />

      <div className="grid grid-flow-col gap-[50px] w-[534px] justify-end items-center py-2">
        <p
          onClick={() => {
            setActiveStep(0)
          }}
          className="text-[#2D3748] text-[16px] cursor-pointer font-medium"
        >
          Cancel order
        </p>

        <Button
          onClick={() => {
            setActiveStep(2)
          }}
          label="Complete order"
          width="w-[200px]"
        />
      </div>
    </div>
  )
}

export default Payment
