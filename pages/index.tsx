import {Header} from "../components/Header";
import {GetStaticProps} from "next";
import {getAllArticle} from "../api/blogs";
import {ArticleList} from "../entities/blog";
import {Blog} from "../components/Blog";

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

export default function Home(props) {
    return (
        <>
            <Header/>
            <Blog {...props} />
        </>
    )
}
