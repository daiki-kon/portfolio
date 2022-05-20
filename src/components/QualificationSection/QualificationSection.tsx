import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import { Qualification } from '../../types/Qualification';

type QualificationSectionProps = {
  badgeImages: string[];
  qualifications: Qualification[];
};

const QualificationSection = (props: QualificationSectionProps) => {
  const { badgeImages, qualifications } = props;
  return (
    <>
      <SectionTitle title="Qualifications" />
      <div className="mt-4 flex flex-row justify-center p-4">
        {badgeImages.map((badge, index) => (
          <Image
            key={index}
            className="mask mask-circle"
            src={badge}
            alt="icon picture"
            width={160}
            height={160}
          />
        ))}
      </div>
      <div className="flex flex-col place-items-center p-4">
        <ul className="list-disc list-inside w-fit">
          {qualifications.map((item, index) => (
            <li key={index} className="mt-2">
              {item.url === undefined ? (
                item.name
              ) : (
                <a
                  href={item.url}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default QualificationSection;
