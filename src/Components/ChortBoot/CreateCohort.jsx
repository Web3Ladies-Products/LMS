import React from 'react'
import { Checkbox, Col, Row } from "antd";
import Input from "../../Common/Input/Input";


const CreateCohort = ({onClose}) => {

    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
      };
      
  return (
    <div>
         <div className="w-full mb-8">
            <div>
              <Input
                type="text"
                label="Title"
                placeholder=""
                // value={regFormData.email}
                // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
              />
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="w-[100px]">
                <Input
                  type="text"
                  label="Start date"
                  placeholder=""
                  // value={regFormData.email}
                  // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
                />
              </div>
              <div className="w-[100px]">
                <Input
                  type="text"
                  label="End date"
                  placeholder=""
                  // value={regFormData.email}
                  // onChange={(e) => setRegFormData({...regFormData, email: e.target.value})}
                />
              </div>
            </div>

            <p className="block text-blue font-semibold text-[16px] my-3">Featured Tracks:</p>
            <div>
                <Checkbox.Group
                style={{
                    width: "100%",
                    fontStyle: "16px",
                    fontWeight: "600",
                }}
                onChange={onChange}
                >
                <Row>
                    <Col span={12}>
                    <Checkbox value="Product Design">Product Design</Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="Web Development">Web Development</Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="Product Management">Product Management</Checkbox>
                    </Col>
                    <Col span={12}>
                    <Checkbox value="Blockchain Development">Blockchain Development</Checkbox>
                    </Col>
                </Row>
                </Checkbox.Group>
            </div>

            <div className="mt-12 flex">
              <button
                onClick={onClose}
                className="bg-primary ml-auto text-[#fff] py-2 px-4 rounded-md"
              >
                Create Cohort
              </button>
            </div>
          </div>
    </div>
  )
}

export default CreateCohort