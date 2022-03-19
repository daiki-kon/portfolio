import SectionTitle from '../SectionTitle';
import SkillCard from '../SkillCard';
import { SkillType } from '../../types/skill';

type SkillSectionProps = {
  skills: SkillType[];
};

const SkillSection = (props: SkillSectionProps) => {
  const { skills } = props;
  return (
    <>
      <SectionTitle title="Skills" />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.name}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
