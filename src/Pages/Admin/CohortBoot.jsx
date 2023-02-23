import React from 'react'
import { PageHoc } from "../../Components";
import Card from '../../Components/ChortBoot/Card';
import { modulesData } from "../../Data"


const CohortBoot = () => {
  return (
    <div>
      <p className='font-bold text-[26px] mb-8'>Cohorts</p>

      <Card modulesData={modulesData} />

      <p className='font-bold text-[26px] mt-10 mb-8'>Bootcamps</p>
      <Card modulesData={modulesData} />
      
    </div>
  )
}

export default PageHoc(CohortBoot)