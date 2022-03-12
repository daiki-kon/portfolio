import React from 'react';
import { IconContext, IconType } from 'react-icons';
import useDarkMode from '../../hooks/useDarkMode';

type SkillCardProps = {
  skillName: string;
  icon: IconType;
  description: string;
};

const SkillCard = (props: SkillCardProps) => {
  const { skillName, icon, description } = props;
  const { isDarkMode } = useDarkMode();

  const cardStyle =
    isDarkMode === true ? 'bg-neutral text-neutral-content' : 'shadow-xl';
  return (
    <>
      <div className={'card w-64 rounded-lg ' + cardStyle}>
        <IconContext.Provider value={{ size: '100' }}>
          <figure className="px-10 pt-10">{React.createElement(icon)}</figure>
        </IconContext.Provider>
        <div className="card-body items-center text-center px-4">
          <h2 className="card-title">{skillName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
