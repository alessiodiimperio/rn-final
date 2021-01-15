import "./ScaffViewer.scss";
import React from "react";
import { useParams } from 'react-router-dom'
import ScaffImage from "../ScaffImage/ScaffImage";
import {useStateValue} from '../../StateProvider';
const ORIGIN = "SCAFF.VIEWER";

function ScaffViewer() {
  const [{ projects }, distpatch] = useStateValue();
  const {projectID, scaffoldingID } = useParams();
  const currentProject = projects.find(project => project.id == projectID)
  
  const scaffolding = currentProject.scaffoldings.find(scaffold => scaffold.id == scaffoldingID)
  const sectionWidth = 3.07;
  const sectionHeight = 2;
  const totalSections = scaffolding.width / sectionWidth;
  const totalLevels = parseInt((scaffolding.height + sectionHeight) / sectionHeight);
  const levelsWithPlatforms = 1
  const sectionsToDraw = (totalSections > 6) ? 6 : totalSections
  const sections = [...Array(sectionsToDraw)];
  const levels = [...Array(totalLevels)];

  return (
    <div className="scaffviewer-container">
      {sections.map((_, section) => {
        return (
          <div className="scaff-column" key={section}>
            {levels.map((_, level) => {
              return (
                <div className="scaff-section" key={level}>
                  <ScaffImage
                    key={section+level}
                    section={section + 1} //remove index zero for easier readability
                    totalSections={totalSections}
                    sectionsToDraw={sectionsToDraw}
                    level={level + 1} //remove index zero for easier readability
                    totalLevels={totalLevels}
                    levelsWithPlatforms={levelsWithPlatforms}
                    hasStairs={scaffolding.stairs}
                    hasLadders={scaffolding.ladders}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ScaffViewer;
