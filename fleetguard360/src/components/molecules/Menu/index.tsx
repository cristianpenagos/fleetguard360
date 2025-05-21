import React from 'react'
import InputMail from "@/components/atoms/InputMail"
import InputTel from "@/components/atoms/InputTel"
import Logo from "@/components/atoms/Logo"
import Button from "@/components/atoms/Button";


const index = () => {
  return (
      <div className="flex flex-col justify-around">
        <div className='justify-center items-center'>
          <Logo />
        </div>
        
        <InputMail />
        <InputTel />
        <Button />
      </div>
  )
}

export default index