import {CommonHeader} from "./CommonHeader";
import {Logo} from "./Logo";

export const Header = () => {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <CommonHeader/>
                <Logo link={"https://github.com/MasatoraAtarashi"} imageName={"github.png"}/>
                <Logo link={"https://twitter.com/toramasaA03"} imageName={"twitter.svg"}/>
                <Logo link={"https://qiita.com/MasatoraAtarashi"} imageName={"qiita.png"}/>
                <Logo link={"https://www.wantedly.com/id/masatora_atarashi"} imageName={"wantedly.svg"}/>
                <Logo link={"https://toramasa.hatenablog.jp/archive"} imageName={"hatena-blog.svg"}/>
                <Logo link={"https://filmarks.com/users/MasatoraAta/marks?view=poster"} imageName={"filmarks.png"}/>
                <Logo link={"https://booklog.jp/users/masatora-ata"} imageName={"booklog.jpeg"}/>
            </div>
        </>
    )
}
