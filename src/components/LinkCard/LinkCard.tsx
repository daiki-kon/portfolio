import Image from 'next/image';

type LinkCardProps = {
  imageUrl: string;
  smallImage?: string;
  title: string;
  description: string;
  url: string;
  updateAt: string;
};

const LinkCard = (props: LinkCardProps) => {
  const { imageUrl, smallImage, title, description, updateAt, url } = props;

  const urlHost = new URL(url).host;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-side cursor-pointer hover:bg-base-300 dark:hover:bg-neutral-focus "
      >
        <div className="hidden md:flex justify-center mr-1">
          <Image
            src={imageUrl}
            width={300}
            height={150}
            alt="qiita article"
            objectFit="cover"
          />
        </div>

        {smallImage !== undefined && (
          <div className="md:hidden flex justify-center mr-1">
            <Image
              src={smallImage}
              width={50}
              height={50}
              alt="qiita article"
              objectFit="contain"
            />
          </div>
        )}
        <div className="card-body max-w-xl p-2.5 ">
          <h2 className="card-title text-sm">{title}</h2>
          <p className="truncate hidden md:inline">{description}</p>
          <p>{urlHost}</p>
          <p>{updateAt}</p>
        </div>
      </a>
    </>
  );
};

export default LinkCard;
