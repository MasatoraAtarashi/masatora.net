import {ArticleList} from "../entities/blog";
import React from "react";
import Link from "next/link";

type BlogProps = {
    articleList: ArticleList
}

export const Blog: React.FC<BlogProps> = ({articleList}) => {
    return (
        <section>
            <h2>Blog</h2>
            <ul>
                {articleList.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/blogs/${id}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}