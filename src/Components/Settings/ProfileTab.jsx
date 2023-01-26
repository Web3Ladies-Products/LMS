import React, { useState } from 'react'
import { userImg } from "../../assets"
import Input from '../../Common/Input/Input'
import Select from '../../Common/Select/Select'
import {
    useDisclosure,
    Text,
    Box,
  } from "@chakra-ui/react";
import ModalWrapper from '../../Common/Modal/ModalWrapper';

const options = [ "Lagos", "Abuja" ]
const track = [ "Blockchain Development", "Frontend", "Backend" ]
const country = [ "Nigeria", "Kenya", "Ghana" ]

const ProfileTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <div className='w-full'>
        <div className='flex my-4 gap-3 item'>
            <img className="w-[60px] h-[60px]" src={userImg} alt="user img"/>
            <button>Upload a photo</button>
        </div>
        <div className='w-full flex justify-between flex-wrap'>
            <div className='w-full laptop:w-[45%]'>
                <Input type="text" placeholder="Oluchi" label="First Name"  />
                <Input type="text" placeholder="Oluchi2022" label="Slack username" />
                <Input type="email" placeholder="Oluchi@gmail.com" label="Email" />
                <Select label="State" option={options} />
            </div>
            <div className='w-full laptop:w-[45%]'>
                <Input type="text" placeholder="Enebeli" label="Last Name" />
                <Select label="Track" option={track} />
                <Input type="number" placeholder="+234817733222" label="Phone Number" />
                <Select label="Country" option={country} />
            </div>
        </div>
        <div>
        <Text 
            onClick={onOpen}
            as="button"
            className='text-[16px] rounded-md text-white py-2 px-4 mt-10 bg-primary'
        >
            Save Changes
        </Text>
        <ModalWrapper 
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >
            <Box w={{base:"80%", md:"400px"}}>
                <div className='flex my-4'>
                    <img className=" mx-auto w-[60px] h-[60px]" src={userImg} alt="user img"/>
                </div>
                <Text textAlign={"center"} fontWeight="700" fontSize={"20px"} >Profile updated successfully!</Text>
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
    </div>
  )
}

export default ProfileTab