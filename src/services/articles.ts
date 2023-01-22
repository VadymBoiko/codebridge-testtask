import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../core/axios.base.query"
import { BlogArticle } from "../types/types"

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: axiosBaseQuery({baseUrl: 'https://api.spaceflightnewsapi.net/v3'}),
    endpoints: (builder) => ({
        getArticles: builder.query<Array<BlogArticle>, any>({
            query:() => ({
                url: '/articles?_limit=100',
                method: 'get',
            })
        })
    })
})

export const { useGetArticlesQuery } = articleApi;