import {Header} from "../components/Header";
import {GetStaticProps} from "next";
import Link from "next/link";
import {getAllArticle} from "../api/blogs";
import {ArticleList} from "../entities/blog";

type BlogProps = {
    articleList: ArticleList
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const articleList = await getAllArticle()
    return {
        props: {
            articleList: articleList
        }
    }
}

export default function Home({articleList}) {
    return (
        <>
            <Header/>

            {/*TODO: コンポーネント切り出し*/}
            <section>
                <h2>Blog</h2>
                <ul>
                    {articleList.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/blog/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
