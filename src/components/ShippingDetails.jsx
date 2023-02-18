import React from 'react'
import Button from './Button'
import Input from './Input'

function ShippingDetails({ setActiveStep }) {
  return (
    <div className="lg:w-[694px] grid justify-start items-center lg:px-[50px]">
      <p className="font-medium text-[20px]">Shipping Details</p>

      <div className="flex flex-row justify-between items-center">
        <p className="text-[#2D3748] font-medium">Use saved address</p>
        <Input
          placeholder="123, Electric avenue"
          type="text"
          width="w-[278px]"
        />
      </div>

      <div className="py-[11px]">
        <p className="text-[#718096] text-[16px]">First line of address</p>

        <Input placeholder="123" type="text" width="w-[534px]" />
      </div>

      <div className="py-[11px]">
        <p className="text-[#718096] text-[16px]">Street Name</p>

        <Input placeholder="Electric avenue" type="text" width="w-[534px]" />
      </div>

      <div className="py-[11px] grid grid-flow-col gap-[40px]">
        <div>
          <p className="text-[#718096] text-[16px]">Postcode</p>

          <Input placeholder="ABC - 123" type="text" width="w-[212px]" />
        </div>
        <div>
          <p className="text-[#718096] text-[16px]">Select Shipping</p>

          <Input placeholder="Free delivery" type="text" width="w-[278px]" />
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
          label="Payment"
          width="w-[200px]"
        />
      </div>
    </div>
  )
}

export default ShippingDetails
