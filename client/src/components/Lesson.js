import React, { useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ReactPlayer from "react-player";
import { Tab, Tabs } from "@blueprintjs/core";
import Submission from './LessonTabs/Submission';


export default function Lesson() {
  const targetRef = useRef();
  const [tabId, setTabId] = useState("t0");
  return (
    <div>
      <Sidebar />

      <div className="main-panel">
        <iframe
          className="video-player"
          src="https://www.youtube.com/embed/vYE2WyHypF0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
        ></iframe>

        <Tabs 
          className="nav-tabs" 
          selectedTabId={tabId} 
          large="true"
          onChange={(newTabId) => {console.log(newTabId); setTabId(newTabId)}}
        > 
          <Tab
            className="nav-tab"
            id="t0"
            title="Angular"
            panel={<div> a </div>}
          />
          <Tab
            className="nav-tab"
            id="t1"
            title="Ember"
            panel={<div> b </div>}
          />
          <Tab
            className="nav-tab"
            id="t2"
            title="React"
            panel={<Submission/>}
          />
          <Tabs.Expander />
        </Tabs>
      </div>
    </div>
  );
}
