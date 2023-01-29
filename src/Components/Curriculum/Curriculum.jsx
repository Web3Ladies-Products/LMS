import React from 'react'
import { Col, Row } from "antd";
import img from "../../Assests/CurriculumImg.svg"
import CurricuTab from './CurricuTab';



const Curriculum = () => {
  return (
    <Row>
    <Col>
        <div className='' >
            <p className='text-2xl font-bold'>Week 1</p>
            <div className='p-4 mt-4 w-full laptop:w-[950px] bg-white min-h-[575px]'>
            
                    <img className='w-full' src={img} alt="img" />
           
                <p className='font-[700] text-[24px] mt-4'>Blockchain Development</p>
                <CurricuTab />
            </div>
         
        </div>   
    </Col>
  </Row>
  )
}

export default Curriculum