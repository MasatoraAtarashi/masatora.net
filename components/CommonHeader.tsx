import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const CommonHeader = () => {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <Head>
                    <title>masatora.net</title>
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
                    <h1 className={'site-name'}>masatora.net</h1>
                </Link>
            </div>
            <style jsx>{`
              .site-name {
                font-weight: 800;
                margin: 0;
                padding: 0;
              }
            `}</style>
        </>
    )
}
