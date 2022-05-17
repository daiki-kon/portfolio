export type QittaItems = {
  created_at: string;
  updated_at: string;
  url: string;
}[];

export type QiitaOgp = {
  title: string;
  imageUrl: string;
  description: string;
};

export type QiitaArticle = QiitaOgp & { url: string; updatedAtString: string };
