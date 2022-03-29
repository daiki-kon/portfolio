import { createRef, FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

interface Props {
  to: UrlObject | string;
  anchor: string;
}

const AnchorLink: FC<Props> = ({ children, to, anchor }) => {
  const router = useRouter();
  useEffect(() => {
    const hashChanged = (url: string) => {
      const hash = url.split('#')[1];
      if (hash !== anchor) return;
      console.log(anchor);
      const elem = document.getElementById(anchor);

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    };
    router.events.on('hashChangeStart', hashChanged);
    return () => router.events.off('hashChangeStart', hashChanged);
  }, [anchor, router.events]);
  return (
    <Link href={to}>
      <a>{children}</a>
    </Link>
  );
};

export default AnchorLink;
