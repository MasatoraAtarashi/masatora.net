import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <div style={{
                backgroundColor: '#111827',
                color: 'white',
                width: '100%',
                position: 'absolute',
                bottom: '0'
            }}>
                <ul>
                    <li>
                        <Link href={`/`}>
                            <a style={{color: 'white'}}>ホーム</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/`}>
                            <a style={{color: 'white'}}>記事一覧</a>
                        </Link>
                    </li>

                    <li>
                        <Link href={`/`}>
                            <a style={{color: 'white'}}>このサイトについて</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

