import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../core/axios.base.query"
import { BlogArticle, SingleArticle } from "../types/types"


interface SingleArticleParams {
    id: string;
}

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: axiosBaseQuery({baseUrl: 'https://api.spaceflightnewsapi.net/v3'}),
    endpoints: (builder) => ({
        getArticles: builder.query<Array<BlogArticle>, void>({
            query: () => ({
                url: '/articles?_limit=100',
            })
        }),
        getSingleArticle: builder.query<SingleArticle, SingleArticleParams>({
            query: ({id}) => ({
                url: `/articles/${id}`,
            })
        })
    })
})

export const { useGetArticlesQuery, useGetSingleArticleQuery } = articleApi;