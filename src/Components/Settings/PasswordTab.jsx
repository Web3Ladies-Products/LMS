import React from 'react'
import PasswordInput from "../../Common/Input/PasswordInput";
import {
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import { userImg } from "../../assets"
import ModalWrapper from '../../Common/Modal/ModalWrapper';

const PasswordTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
        <div className='mobile_l:w-[80%] w-full tablet:w-[400px] '>
          {/* <form> */}
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
            <PasswordInput 
            label="Comfirm Password" 
            placeholder="******"
            // value={regFormData.password}
            // onChange={(e) => setRegFormData({...regFormData, password: e.target.value})}  
            />
             <Text 
            onClick={onOpen}
            as="button"
            className='text-[16px] rounded-md text-white py-2 px-4 mt-10 bg-primary'
          >
              Save Changes
          </Text>
          {/* </form> */}
        </div>

        <ModalWrapper 
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >
            <Box w={{base:"80%", md:"400px"}}>
                <div className='flex my-4'>
                    <img className=" mx-auto w-[60px] h-[60px]" src={userImg} alt="user img"/>
                </div>
                <Text textAlign={"center"} fontWeight="700" fontSize={"20px"} >Password changed successfully!</Text>
                <div className='flex'>
                    <Text 
                        onClick={onClose}
                        as="button"
                        className='text-[16px] mx-auto rounded-md text-white py-2 px-4 my-5 bg-primary'
                    >
                        Done
                    </Text>
                </div>
            </Box>
        </ModalWrapper>

    </div>
  )
}

export default PasswordTab