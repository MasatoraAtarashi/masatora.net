import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Article} from "../../entities/blog";
import {getAllArticle, getArticle} from "../../api/blogs";
import {CommonHeader} from "../../components/CommonHeader";
import Link from "next/link";
import React from "react";
import parse from 'html-react-parser';
import {remark} from "remark";
import html from 'remark-html';

type BlogDetailProps = {
    article: Article
    contentHtml: string
}

type BlogDetailParams = {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    let articleList = await getAllArticle();
    return {
        paths: articleList.map((article) => ({
            params: {id: article.id}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<BlogDetailProps, BlogDetailParams> = async ({params}) => {
    const article = await getArticle(params.id);
    const contentHtml = await remark()
        .use(html)
        .process(article.content)
        .then((processedContent) =>
            processedContent.toString()
        ).catch(err => {
            throw err
        })
    return {
        props: {
            article: article,
            contentHtml: contentHtml
        }
    }
}

const BlogDetail: NextPage<BlogDetailProps> = (props) => {
    return (
        <>
            <CommonHeader/>
            <h1>{props.article.title}</h1>
            <p>{props.article.createdAt}</p>
            {parse(props.contentHtml)}
            <div>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    )
}

export default BlogDetail