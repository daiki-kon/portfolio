import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import { Certification } from '../../types/Certification';

type CertificationSectionProps = {
  badgeImages: string[];
  certifications: Certification[];
};

const CertificationSection = (props: CertificationSectionProps) => {
  const { badgeImages, certifications } = props;
  return (
    <>
      <SectionTitle title="Certifications" />
      <div className="mt-4 flex flex-row justify-center">
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
        <ul className="list-disc w-fit">
          {certifications.map((item, index) => (
            <li key={index} className="mt-2">
              {item.url === undefined ? (
                item.name
              ) : (
                <a href={item.url} className="underline">
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

export default CertificationSection;
