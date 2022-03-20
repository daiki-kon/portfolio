import IconName from '../IconName';
import SectionTitle from '../SectionTitle';

type AboutMeSectionProps = {
  introduction: string;
  name: string;
  iconImageSrc: string;
  snsAccounts: {
    name: string;
    url: string;
  }[];
};

const AboutMeSection = (props: AboutMeSectionProps) => {
  const { introduction, name, iconImageSrc, snsAccounts } = props;
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

      {/* TODO: 縦を揃える */}
      {/* TODO: Githubの草、Qiitaの最新の記事取得 */}
      {snsAccounts.map((account, index) => (
        <div key={index} className="flex justify-center items-center">
          <p className="text-lg font-bold mr-2">{account.name} :</p>
          <a href={account.url} className="underline">
            {account.url}
          </a>
        </div>
      ))}
    </>
  );
};

export default AboutMeSection;
