import * as fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), 'articles')

export async function getAllArticleIds() {
    const fileNames = fs.readdirSync(articlesDirectory)
}