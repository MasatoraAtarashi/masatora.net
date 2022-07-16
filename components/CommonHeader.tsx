import Head from "next/head";
import Image from "next/image";

const CommonHeader = () => {
    return (
        <>
            <Head>
                <title>masatora.net</title>
            </Head>
            <Image
                priority
                src={"/images/profile.jpg"}
                height={144}
                width={144}
                alt={'profile-image'}
            />
            <h1>masatora.net</h1>
        </>
    )
}

export default CommonHeader;