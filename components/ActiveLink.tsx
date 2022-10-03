import{useRouter} from "next/router"
import * as React from 'react';
import Link from "next/link"

const style:React.CSSProperties = {
    color:'#0070f3',
    textDecoration:'underline',
}

type Props = {
  children?: React.ReactNode;
  text:string;
  href:string;
};



export const ActiveLink:React.FC<Props> = ({text, href}) => {

    const {asPath} = useRouter();

  return (
    <Link href={href}>
        <a style={ asPath === href ? style : undefined} >{text}</a>
    </Link>
  )
}
