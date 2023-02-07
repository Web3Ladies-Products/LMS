import React from "react";

import { Col, Row } from "antd";

import onboardingLogo from "../Assests/onboardingLogo.png";
import Web3Logo from "../Assests/Web3Logo.svg";

const RegImg = (WrappedComponent) => {
  return function (props) {
    return (
      <Row>
        <Col xs={0} sm={0} md={0} lg={12} xl={10} className="h-[100vh]">
          <img
            src={onboardingLogo}
            alt="logo"
            className="h-full object-cover w-full "
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={14} className="h-[100vh] flex">
          <div className=" w-[90%] tablet:w-[450px] laptop:w-[500px] mt-[6vh] mx-auto">
            <div className="h-[90px]">
              <img src={Web3Logo} className="h-[80px]" alt="logo" />
            </div>
            <WrappedComponent {...props} />
          </div>
        </Col>
      </Row>
    );
  };
};

export default RegImg;
