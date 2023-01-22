export interface SingleArticle {
  id: number;
  featured: false;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [];
  events: [];
}

export interface BlogArticle {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [
    {
      id: string;
      provider: "string";
    }
  ];
  events: [];
}
