import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Blog} from "../../entities/blog";
import {getAllPosts, getPost} from "../../api/blogs";

type BlogProps = {
    // TODO: 命名見直す
    blog: Blog
}

type BlogParams = {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    let allPosts = await getAllPosts();
    return {
        paths: allPosts.map((id) => ({
            params: {id: "id"}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<BlogProps, BlogParams> = async ({params}) => {
    const post = await getPost(params.id);
    return {
        props: {
            blog: post
        }
    }
}

const BlogPage: NextPage<BlogProps> = ({blog}) => {
// TODO: コンポーネント切り出し
    return (
        <>
            <h1>{blog.title}</h1>
        </>
    )
}

export default BlogPage