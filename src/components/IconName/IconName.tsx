import Image from 'next/image';

type IconNameProps = {
  name: string;
  iconSrc: string;
};

const IconName = (props: IconNameProps) => {
  const { name, iconSrc } = props;
  return (
    <>
      <div className="flex place-items-center flex-col gap-y-2 w-40 ">
        <Image
          className="mask mask-circle"
          src={iconSrc}
          alt="icon picture"
          width={160}
          height={160}
        />
        <h2 className="text-2xl">{name}</h2>
      </div>
    </>
  );
};

export default IconName;
