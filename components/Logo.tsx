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
        <Link href={props.link}>
            <Image
                priority
                src={"/images/" + props.imageName}
                height={props.height || 30}
                width={props.width || 30}
                alt={props.alt || 'logo'}
            />
        </Link>
    )
}