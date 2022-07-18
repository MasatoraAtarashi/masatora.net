import {BlogList} from "../entities/blogList";
import {Blog} from "../entities/blog";

// TODO: BlogListという命名はおかしい
export async function getAllPosts(): Promise<BlogList> {
    // TODO: mock
    let allPosts: BlogList = [
        {
            id: "id",
            title: "title",
            content: "content",
            createdAt: "2022-07-16T11:53:19.656Z",
            updatedAt: "2022-07-16T11:53:19.656Z"
        }
    ]
    return allPosts
}

// TODO: Blogという名称もおかしい
export async function getPost(id: string): Promise<Blog> {
    // TODO: mock
    return {
        id: "id",
        title: "a",
        content: "a",
        createdAt: "2022-07-16T11:53:19.656Z",
        updatedAt: "2022-07-16T11:53:19.656Z"
    }
}