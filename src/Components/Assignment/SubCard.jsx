import React from 'react'

const SubCard = ({ assignmentList, onOpen }) => {
  return (
    <>
         {assignmentList.map((item) => (
          <div
            key={item.id}
            onClick={onOpen}
            className="w-[95%] cursor-pointer p-5 mobile:w-[260px] tablet:w-[280px]"
          >
            <div className="mx-auto bg-[#F9F9F9]">
              <img
                className="w-fit mx-auto py-5 rounded-sm"
                src={item.image}
                alt="pdf"
              />
            </div>
            <p className="font-semibold leading-4 my-3">
              Oluchi Enebeli - My Assignment
            </p>
            <p className="text-grey text-[12px]">Submitted 4 hours ago</p>
          </div>
        ))}
    </>
  )
}

export default SubCard