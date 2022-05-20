import { QiitaArticle } from '../../types/Qiita';
import IconName from '../IconName';
import LinkCard from '../LinkCard';
import SectionTitle from '../SectionTitle';
import { formatDate } from '../../utils/date';

type AboutMeSectionProps = {
  introduction: string;
  name: string;
  iconImageSrc: string;
  snsAccounts: {
    name: string;
    url: string;
  }[];
  qiitaArticle: QiitaArticle | undefined;
};

const AboutMeSection = (props: AboutMeSectionProps) => {
  const { introduction, name, iconImageSrc, snsAccounts, qiitaArticle } = props;

  return (
    <>
      <SectionTitle title="About Me" />
      <div className="hero p-4">
        <div className="hero-content flex-col lg:flex-row">
          <IconName name={name} iconSrc={iconImageSrc} />
          <p className="grow-0 max-w-xl">{introduction}</p>
        </div>
      </div>
      <h2 className="text-2xl text-center mt-2">SNS</h2>

      <div className="p-4">
        <div className="flex justify-center">
          <p className="text-lg font-bold mr-2">{snsAccounts[0].name} :</p>
          <a
            href={snsAccounts[0].url}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {snsAccounts[0].url}
          </a>
        </div>

        {qiitaArticle !== undefined && (
          <div className="ml-1">
            <p className="mb-2">最新の記事</p>
            <LinkCard
              {...qiitaArticle}
              updateAt={formatDate(new Date(qiitaArticle.updatedAtString))}
              smallImage={'/qiita-favicon.png'}
            />
          </div>
        )}

        <div className="flex justify-center mt-4">
          <p className="text-lg font-bold mr-2">{snsAccounts[1].name} :</p>
          <a
            href={snsAccounts[1].url}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {snsAccounts[1].url}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
