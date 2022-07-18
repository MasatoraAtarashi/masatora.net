import {Article, ArticleList} from "../entities/blog";

export async function getAllArticle(): Promise<ArticleList> {
    // TODO: mock
    let articles: ArticleList = [
        {
            id: "id",
            title: "title",
            content: "content",
            createdAt: "2022-07-16T11:53:19.656Z",
            updatedAt: "2022-07-16T11:53:19.656Z"
        }
    ]
    return articles
}

export async function getArticle(id: string): Promise<Article> {
    // TODO: mock
    return {
        id: "id",
        title: "a",
        content: "a",
        createdAt: "2022-07-16T11:53:19.656Z",
        updatedAt: "2022-07-16T11:53:19.656Z"
    }
}