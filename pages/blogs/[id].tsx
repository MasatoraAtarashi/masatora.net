import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Article} from "../../entities/blog";
import {getAllArticle, getArticle} from "../../api/blogs";
import {CommonHeader} from "../../components/CommonHeader";
import Link from "next/link";
import React from "react";

type BlogDetailProps = {
    article: Article
}

type BlogDetailParams = {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    let articleList = await getAllArticle();
    return {
        paths: articleList.map((id) => ({
            params: {id: "id"}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<BlogDetailProps, BlogDetailParams> = async ({params}) => {
    const article = await getArticle(params.id);
    return {
        props: {
            article: article
        }
    }
}

const BlogDetail: NextPage<BlogDetailProps> = ({article}) => {
    return (
        <>
            <CommonHeader/>
            <h1>{article.title}</h1>
            <p>{article.createdAt}</p>
            <p>{article.content}</p>

            <div>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    )
}

export default BlogDetail