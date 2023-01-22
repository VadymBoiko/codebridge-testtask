import { BlogArticle } from "../types/types";



export const searchArticles = (articles:any, searchParams:string):any =>{

    const paramsArray = searchParams.split(' ');
    
    const filteredResults = articles.reduce((matches:any , article:BlogArticle) =>{

        let result = {};

        for(let param of paramsArray){
            ((article.summary).toLowerCase()).includes(param.toLowerCase())
            || ((article.title).toLowerCase()).includes(param.toLowerCase())
            && result[article.id] = {...article}
        }
    return [...matches, ...result]
    }, [])
   

    // const filteredResults = articles.filter((article) =>
    // ((article.summary).toLowerCase()).includes(searchParams.toLowerCase())
    // || ((article.title).toLowerCase()).includes(searchParams.toLowerCase()));

    return  Object.values(filteredResults);
  
}