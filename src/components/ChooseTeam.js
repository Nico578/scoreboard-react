import React from 'react';
import { useState } from 'react';
import { teamsData} from "../data/teamsData"

const ChooseTeam = ({teamNumber}) => {
  const [currentData] = useState(teamsData[0].name)

  console.log(currentData);


  return (
    <div className='chooseteam'>
      <div className="team-main">
        <div className="team-content">
          
        </div>
      </div>
    </div>
  );
};

export default ChooseTeam;