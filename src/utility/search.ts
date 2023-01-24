import { match } from "assert";
import { BlogArticle } from "../types/types";

const isMatches = (text: string, search: string) =>
  text.split(" ").some((word) => word.toLowerCase() === search.toLowerCase());

type SearchResult = {
  [id: number]: BlogArticle;
};

export const searchArticles = (
  articles: Array<BlogArticle>,
  searchParams: string
): Array<BlogArticle> => {

  const paramsArray = searchParams.split(" ");
  let pattern = new RegExp(`${searchParams}`,'gi');

  const filteredResults = articles.reduce(
    (matches: SearchResult, article: BlogArticle) => {
      const { id, summary, title } = article;

      let result: SearchResult = {};
      for (let param of paramsArray) {
        if (isMatches(title, param) || isMatches(summary, param)) {

          let summaryReplace = article.summary.replace(pattern , match => `<mark>${match}</mark>`);
          let titleReplace = article.title.replace(pattern , match => `<mark>${match}</mark>`);

       
          result[id] = 
          {
            ...article,
            title: titleReplace,
            summary: summaryReplace
          };
          
        }
      }
      return { ...matches, ...result  };
    },
    []
  );


  return Object.values(filteredResults);
};