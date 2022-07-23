import {remark} from "remark";
import html from "remark-html";

export type Article = {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
}

export type ArticleList = Article[]

export async function parseMarddown(markdown: string): Promise<string> {
    const contentHtml = await remark()
        .use(html)
        .process(markdown)
        .then((processedContent) =>
            processedContent.toString()
        ).catch(err => {
            throw err
        })
    return contentHtml
}