import React from 'react'
import PupleBtn from '../../Common/Button/PupleBtn'
import PasswordInput from "../../Common/Input/PasswordInput";
import { Link } from 'react-router-dom';

const ChangePass = () => {
  return (
    <div>
        <p className="text-[28px] mb-8 leading-9 font-[700]">Change your password</p>
        <div className='mobile_l:w-[80%] w-full '>
          <form>
            <PasswordInput 
              label="Old Password" 
              placeholder="******"
              // value={regFormData.password}
              // onChange={(e) => setRegFormData({...regFormData, password: e.target.value})}  
            />
            <PasswordInput 
            label="New Password" 
            placeholder="******"
            // value={regFormData.password}
            // onChange={(e) => setRegFormData({...regFormData, password: e.target.value})}  
            />
            <PupleBtn text="Submit" link="/passwordchanged"/>
                <Link to="/restpassword" className=''>
                  Forgot your password?
                </Link>
          </form>
        </div>

    </div>
  )
}

export default ChangePass