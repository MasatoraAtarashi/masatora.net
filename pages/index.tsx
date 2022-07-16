import {Header} from "../components/Header";
import {GetStaticProps} from "next";
import {BlogList} from "../entities/blogList";
import Link from "next/link";
import {getAllPosts} from "../api/blogs";

export const getStaticProps: GetStaticProps<BlogList> = async () => {
    const blogList = await getAllPosts()
    return {
        props: {
            blogList
        }
    }
}

export default function Home({blogList}) {
    return (
        <>
            <Header/>

            {/*TODO: コンポーネント切り出し*/}
            <section>
                <h2>Blog</h2>
                <ul>
                    {blogList.map(({id, title}) => (
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
