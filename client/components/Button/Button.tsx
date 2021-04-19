import styles from './Button.module.scss'
import Link from 'next/link'
import styled, { css } from 'styled-components'

type ButtonProp = {
  title: string,
  href: string,
  color: string,
  background: string,
  border: string,
  borderRadius: string,
  textTransform: string,
  colorHover: string,
  backgroundHover: string,
}


const BtnLink = styled.a`
  cursor: pointer;


  ${props =>
    props.color &&
    css`
      background: ${props.background};
      color: ${props.color};
      border: ${props.border};
      border-radius: ${props.borderRadius};
      text-transform: ${props.textTransform};
      &:hover {
        background: ${props.backgroundHover};
        color: ${props.colorHover};
      }
    `};

`

function Button({ 
  href, 
  title, 
  color, 
  background, 
  border, 
  borderRadius, 
  textTransform,
  colorHover,
  backgroundHover
}: ButtonProp): JSX.Element {
    return (
      <Link href={href}>
        <BtnLink 
         color = {color}
         background = {background} 
         border = {border} 
         borderRadius = {borderRadius} 
         textTransform  = {textTransform} 
         >
           {title}
        </BtnLink>
      </Link>
    )
}
export default Button