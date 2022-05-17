import { parse } from 'node-html-parser';
import { QiitaOgp } from './../types/Qiita';

export const getOgpMetadata = async (
  url: string
): Promise<QiitaOgp | undefined> => {
  const htmlRes = await fetch(url);
  const htmlText = await htmlRes.text();

  const root = parse(htmlText);
  const ogpTitle = root.querySelector('meta[property="og:title"]')?.attributes
    .content;
  const ogpImage = root.querySelector('meta[property="og:image"]')?.attributes
    .content;
  const ogpDescription = root.querySelector('meta[property="og:description"]')
    ?.attributes.content;

  if (ogpTitle === undefined) {
    return undefined;
  }
  if (ogpImage === undefined) {
    return undefined;
  }
  if (ogpDescription === undefined) {
    return undefined;
  }

  return {
    title: ogpTitle,
    imageUrl: ogpImage,
    description: ogpDescription,
  };
};
