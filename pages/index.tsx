import {Header} from "../components/Header";
import {GetStaticProps} from "next";
import {BlogList} from "../entities/blogList";
import Link from "next/link";
import {getAllPosts} from "../api/blogs";

type BlogListProps = {
    blogList: BlogList
}

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
    const blogList = await getAllPosts()
    return {
        props: {
            blogList: blogList
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
