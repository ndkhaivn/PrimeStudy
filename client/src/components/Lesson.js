import React, { useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Tab, Tabs } from "@blueprintjs/core";
import Submission from "./LessonTabs/Submission";
import Requirements from "./LessonTabs/Requirements";
import Content from './LessonTabs/Content';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Intro from './LessonTabs/Intro';

export default function Lesson() {
  const targetRef = useRef();
  const [tabId, setTabId] = useState("requirements");
  const { t } = useTranslation();
  const lesson = useSelector(state => state.lesson);
  return (
    <div>
      <div className="main-panel">
        <Sidebar> <Intro/> </Sidebar>

        <div className="main-content">
          <iframe
            className="video-player"
            src={"https://www.youtube.com/embed/" + lesson.youtube_src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
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
              title={t("Requirements")}
              panel={<Requirements/>}
            />
            <Tab
              className="nav-tab"
              panelClassName="nav-panel"
              id="content"
              title={t("Content")}
              panel={<Content/>}
            />
            <Tab
              className="nav-tab"
              panelClassName="nav-panel"
              id="submission"
              title={t("Submission")}
              panel={<Submission />}
            />
            <Tabs.Expander />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
