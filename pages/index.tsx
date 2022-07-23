import {Header} from "../components/Header";
import {GetStaticProps} from "next";
import {getAllArticle} from "../api/blogs";
import {ArticleList} from "../entities/blog";
import {Blog} from "../components/Blog";
import {Footer} from "../components/Footer";

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
            <div className={'main-content'}>
                <Blog {...props} />
                <Footer/>
            </div>
            <style jsx>{`
              .main-content {
                margin: 0 auto;
                width: 50%;
                padding: 30px;
              }
            `}</style>
        </>
    )
}
