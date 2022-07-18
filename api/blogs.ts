import {Article, ArticleList} from "../entities/blog";
import {getRequest} from "./common";

type ArticleListResponse = {
    contents?: ArticleResponse[]
}

type ArticleResponse = {
    id?: string
    title?: string
    content?: string
    createdAt?: string
    updatedAt?: string
}

export async function getAllArticle(): Promise<ArticleList> {
    const response = await getRequest<ArticleListResponse>('blogs')
    return toArticleList(response)
}

export async function getArticle(id: string): Promise<Article> {
    const response = await getRequest<ArticleResponse>(`blogs/${id}`)
    return toArticle(response)
}

function toArticleList(data: ArticleListResponse): ArticleList {
    let articleList: ArticleList = []
    data.contents.map((articleResponse) => {
        articleList.push(toArticle(articleResponse))
    })
    return articleList
}

function toArticle(data: ArticleResponse): Article {
    return {
        id: data.id || '',
        title: data.title || '',
        content: data.content || '',
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || '',
    }
}