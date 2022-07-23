import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const CommonHeader = () => {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <Head>
                    <title style={{}}>masatora.net</title>
                </Head>
                <Link href="/">
                    <Image
                        priority
                        src={"/images/profile.jpg"}
                        height={144}
                        width={144}
                        alt={'profile-image'}
                        style={{borderRadius: '50%'}}
                    />
                </Link>
                <Link href="/">
                    <h1>masatora.net</h1>
                </Link>
            </div>
        </>
    )
}
