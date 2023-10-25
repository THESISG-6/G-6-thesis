import React from "react";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";
import ASidebar from "../../components/AlumniSide/ASidebar";

import { portfolio } from "./StoriesData";

import "./stories.css";
import Storiesitem from "./Storiesitem";

const AStories = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <ASidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <AAlumniboardView />
        <div className="flex items-center justify-center font-bold gap-[15px] py-[20px]">
          <section className="portfolio section">
            <h2 className="section__title">
              Alumni <span>Stories</span>
            </h2>

            <div className="portfolio__container container grid">
              {portfolio.map((item) => {
                return <Storiesitem key={item.id} {...item} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AStories;
