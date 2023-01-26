import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrContent from "./CurrContent";
import ResoContent from "./ResoContent";
import AssContent from "./AssContent";
import WorkContent from "./WorkContent";


const CurricuTab = () => {
  return (
    <>
      <Tabs>
        <TabList border="2px solid bgLight " className="w-[924px]">
          <Tab mr={{md:"0", lg:"4"}}  _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Curriculum
            </Tab>
          <Tab mr={{md:"0", lg:"4"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Resources
        </Tab>
          <Tab mr={{md:"0", lg:"4"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
          Assignments
        </Tab>
        <Tab mr={{md:"0", lg:"4"}} _selected={{ color: '#7D0BFE', borderBottom:"2px solid #7D0BFE" }}>
        Workshops
        </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CurrContent />
          </TabPanel>
          <TabPanel>
            <ResoContent />
          </TabPanel>
          <TabPanel>
            <AssContent />
          </TabPanel>
          <TabPanel>
            <WorkContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CurricuTab;
