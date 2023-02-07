import React from 'react'
import BtnIcon from '../Common/Button/BtnIcon'
import LightBtn from '../Common/Button/LightBtn'
import PupleBtn from '../Common/Button/PupleBtn'

import Google from '../Assests/Google.svg'

const SiginIn = () => {
  return (
    <div>
        <p className="text-[32px] leading-9 font-[700]">Welcome to the Web3Ladies LMS portal</p>
        <p className='mt-4 text-[18px] mb-12'>Create an account to continue.</p>
        <div className='mobile_l:w-[80%] w-full '>
          <PupleBtn text="Create an account" link="registration"/>
          <LightBtn text="Sign in" link="/login"/>
          <div className='text-center'> or </div>
          <BtnIcon text="Continue with Google" icon={Google}/>
        </div>

    </div>
  )
}

export default SiginIn