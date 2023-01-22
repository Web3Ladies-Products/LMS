import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrContent from "./CurrContent";
import ResoContent from "./ResoContent";
import AssContent from "./AssContent";
import WorkContent from "./WorkContent";

const data = [
  {
    label: "HTML",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "React",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Vue",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
  },

  {
    label: "Angular",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: "Svelte",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

const CurricuTab = () => {
  return (
    <>
      <Tabs>
        <TabList border="2px solid bgLight">
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
