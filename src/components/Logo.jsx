'use client'
import Image from 'next/image'
import LogoImage from '../images/logo.png'
export function Logo(props) {
  return <Image src={LogoImage} alt="Logo" width={70} height={70} {...props} />
}
