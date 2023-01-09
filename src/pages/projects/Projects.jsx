import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import Options from "../../components/options/Options";
import "./projects.css";
import { projects } from "../../data";

function Home() {
  useEffect(() => {
    document.title = "المشاريع المفتوحة | مستقل";
  }, []);

  const PROJECTS_PER_PAGE = 6;
  const totaltNumber = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const startIndex = (currentPageNumber - 1) * PROJECTS_PER_PAGE;
  const endIndex = currentPageNumber * PROJECTS_PER_PAGE;
  const projectsInsidePage = projects.slice(startIndex, endIndex);

  return (
    <>
      <Header path="الرئيسية / المشاريع" title="المشاريع المفتوحة" />
      <div className="main">
        <div className="mainBody">
          <div className="mainOffers">
            {projectsInsidePage.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                username={project.username}
                time={project.time}
                offersNumber={project.offersNumber}
                description={project.description}
                button
              />
            ))}

            <Pagination
              currentPageNumber={currentPageNumber}
              totaltNumber={totaltNumber}
              setCurrentPageNumber={setCurrentPageNumber}
            />
          </div>
          <div className="mainOptions">
            <Options />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
