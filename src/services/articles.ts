import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "./base.query"
import { BlogArticle, SingleArticle } from "../types/types"
import { baseUrl, DEFAULT_ARTICLES_AMOUNT } from "../constans/constans";
import { ROUTE } from "../routes/routes";


interface SingleArticleParams {
    id: string;
}

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: axiosBaseQuery({baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getArticles: builder.query<Array<BlogArticle>, string>({
            query: () => ({
                url: `${ROUTE.ARTICLES}?_limit=${DEFAULT_ARTICLES_AMOUNT}`,
            })
        }),
        getSingleArticle: builder.query<SingleArticle, SingleArticleParams>({
            query: ({id}) => ({
                url: `${ROUTE.ARTICLES}/${id}`,
            })
        })
    })
})

export const { useGetArticlesQuery, useGetSingleArticleQuery } = articleApi;