import {ArticleList} from "../entities/blog";
import React from "react";
import Link from "next/link";

type BlogProps = {
    articleList: ArticleList
}


export const Blog: React.FC<BlogProps> = ({articleList}) => {
    return (
        <>
            <div>
                <section>
                    {articleList.map(({id, title, createdAt, content}) => (
                        <li key={id} style={{listStyle: 'none'}}>
                            <time>
                                {createdAt}
                            </time>
                            <Link href={`/blogs/${id}`}>
                                <a className={'article-title'}>{title}</a>
                            </Link>
                            <p className={'article-content'}>{content}</p>
                        </li>
                    ))}
                </section>
            </div>
            <style jsx>{`
              time {
                display: block;
                color: darkgray;
                font-size: 15px;
              }

              .article-title {
                font-size: 25px;
              }

              .article-content {
                font-size: 15px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}</style>
        </>
    )
}