import React from 'react'
import PupleBtn from '../../Common/Button/PupleBtn'
import PasswordInput from "../../Common/Input/PasswordInput";
import { Link } from 'react-router-dom';
import Input from '../../Common/Input/Input';

const RestPass = () => {
  return (
    <div>
        <p className="text-[28px] mb-8 leading-9 font-[700]">Reset password</p>
        <div className='mobile_l:w-[80%] w-full '>
          <form>
            
            <Input 
            label="Email" 
            placeholder="name@gmail.com"
            // value={regFormData.email}
            // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}  
            />
            <PupleBtn text="Submit" link="/paswordsuccess"/>
                <Link to="/login" className='hover:text-[black]'>
                Go back to <span className='text-primary'>sign in</span>
                </Link>
          </form>
        </div>

    </div>
  )
}

export default RestPass