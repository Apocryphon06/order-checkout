import React from 'react'
import Button from './Button'
import Input from './Input'

function AccountDetails({setActiveStep}) {
  return (
    <div className="lg:w-[694px] grid justify-start items-center lg:px-[50px]">
            <p className="font-medium text-[20px]">Account Details</p>

            <div className="py-[11px]">
              <p className="text-[#718096] text-[16px]">Email address</p>

              <Input
                placeholder="hrithik@gmail.com"
                type="text"
                width="w-[534px]"
              />
            </div>

            <div className="py-[11px]">
              <p className="text-[#718096] text-[16px]">Password</p>

              <Input placeholder="********" type="password" width="w-[534px]" />
            </div>

            <div className="grid grid-flow-col gap-[50px] w-[534px] justify-end items-center">
              <p className="text-[#2D3748] text-[16px] cursor-pointer font-medium">
                Register for account
              </p>

              <Button label="Login" width="w-[150px]" />
            </div>

            <div className=" border-b border-[#dfdfdf] pt-[100px]" />

            <div className="grid grid-flow-col gap-[50px] w-[534px] justify-end items-center py-2">
              <p className="text-[#2D3748] text-[16px] cursor-pointer font-medium">
                Cancel order
              </p>

              <Button onClick={()=>{setActiveStep(1)}} label="Shipping details" width="w-[200px]" />
            </div>
          </div>
  )
}

export default AccountDetails