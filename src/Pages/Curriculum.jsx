import React from 'react'
import { Col, Row } from "antd";
import img from "../Assests/CurriculumImg.svg"
import CurricuTab from '../Components/Curriculum/CurricuTab';



const Curriculum = () => {
  return (
    <Row>
    <Col xs={24} sm={24} md={24} lg={20} xl={20} className="p-8">
        <div className=' ' >
            <p className='font-[700] text-[24px]'>Week 1</p>
            <div className='p-5'>
                <div className='my-5'>
                    <img className='' src={img} alt="img" />
                </div>
                <p className='font-[700] text-[24px] mb-5'>Blockchain Development</p>
                <CurricuTab />
            </div>
         
        </div>   
    </Col>
  </Row>
  )
}

export default Curriculum