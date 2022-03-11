type SectionTitleProps = {
  title: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;
  return (
    <>
      <h1 className="text-center text-5xl">{title}</h1>
    </>
  );
};

export default SectionTitle;
