import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    link: string
    imageName: string
    height?: number
    width?: number
    alt?: string
}

export const Logo: React.FC<LogoProps> = (props) => {
    return (
        <div style={{
            display: 'inline-block',
            margin: '3px'
        }}>
            <Link href={props.link}>
                <a target={"_blank"}>
                    <Image
                        priority
                        src={"/images/" + props.imageName}
                        height={props.height || 30}
                        width={props.width || 30}
                        alt={props.alt || 'logo'}
                    />
                </a>
            </Link>
        </div>
    )
}