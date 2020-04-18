import React, { useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ReactPlayer from "react-player";
import { Tab, Tabs } from "@blueprintjs/core";
import Submission from "./LessonTabs/Submission";
import useWindowSize from "../hooks/useWindowSize";
import Requirements from "./LessonTabs/Requirements";
import Content from './LessonTabs/Content';

export default function Lesson() {
  const targetRef = useRef();
  const [tabId, setTabId] = useState("requirements");
  const wSize = useWindowSize();
  return (
    <div>
      <div className="main-panel">
        {wSize.width > 991 ? <Sidebar /> : null}

        <div className="lesson-content">
          <iframe
            className="video-player"
            // src="https://www.youtube.com/embed/FlJW9R9DFaQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="true"
          ></iframe>

          <Tabs
            className="nav-tabs"
            selectedTabId={tabId}
            large="true"
            onChange={(newTabId) => {
              console.log(newTabId);
              setTabId(newTabId);
            }}
          >
            <Tab
              className="nav-tab"
              panelClassName="nav-panel"
              id="requirements"
              title="Requirements"
              panel={<Requirements/>}
            />
            <Tab
              className="nav-tab"
              panelClassName="nav-panel"
              id="content"
              title="Content"
              panel={<Content/>}
            />
            <Tab
              className="nav-tab"
              panelClassName="nav-panel"
              id="submission"
              title="Submission"
              panel={<Submission />}
            />
            <Tabs.Expander />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
