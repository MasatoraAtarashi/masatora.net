// @ts-ignore
import Head from "next/head";
// @ts-ignore
import Image from "next/image";

// TODO: 適切な場所に移す
const name = 'masatora.net'

const CommonHeader: React.FC = (props) => (
    <>
        <Head>
            <title>{name}</title>
        </Head>
        {/*TODO: ↓別コンポーネントに切り出す？*/}
        <Image
            priority
            src={"/images/profile.jpg"}
            height={144}
            width={144}
            alt={name}
        />
        <h1>{name}</h1>
    </>
);

export default CommonHeader;