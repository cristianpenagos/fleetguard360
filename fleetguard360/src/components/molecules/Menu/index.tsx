import React from 'react'
import InputMail from "@/components/atoms/InputMail"
import InputTel from "@/components/atoms/InputTel"
import Logo from "@/components/atoms/Logo"
import Button from "@/components/atoms/Button";
import EmailLabel from "@/components/atoms/EmailLabel"
import PhoneLabel from "@/components/atoms/PhoneLabel"
import Paragraph from "@/components/atoms/Paragraph"
import PTittle from "@/components/atoms/PTittle"
import HelpText from "@/components/atoms/HelpText"
import LinkSession from "@/components/atoms/LinkSession"

const index = () => {
  return (
      <div className="flex flex-col justify-around max-w-[445px]">
        <div className='flex justify-center items-center'>
          <Logo />
        </div>
        <div>
          <PTittle />
          <Paragraph />
        </div>
        <EmailLabel />
        <InputMail />
        <PhoneLabel />
        <InputTel />
        <Button />
        <div className='flex flex-row justify-around'>
          <HelpText />
          <LinkSession />
        </div>
        
      </div>
  )
}

export default index