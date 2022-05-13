import Image from 'next/image';

type LinkCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
  updateAt: string;
};

const LinkCard = (props: LinkCardProps) => {
  const { imageUrl, title, description, updateAt, url } = props;
  return (
    <>
      <a className="flex cursor-pointer hover:bg-base-300 dark:hover:bg-neutral-focus ">
        <Image
          src={imageUrl}
          width={200}
          height={120}
          alt="qiita article"
          objectFit="contain"
        />
        <div>
          <h1>{title}</h1>
          <p className=''>{description}</p>
          <p>{url}</p>
          <p>{updateAt}</p>
        </div>
      </a>
    </>
  );
};

export default LinkCard;
