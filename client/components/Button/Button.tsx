import styles from './Button.module.scss'
import Link from 'next/link'
import styled, { css } from 'styled-components'

type ButtonProp = {
  title: string,
  href: string,
  color?: string,
  background?: string,
  border?: string,
  borderRadius?: string,
  textTransform?: string,
  colorHover?: string,
  backgroundHover?: string,
  paddings?: string,
  margings?: string,
  mobilePaddings?: string,
  mobileMargings?: string,
}


const BtnLink = styled.a`
    cursor: pointer;
    background: transparent;
    color: #2341dd;
    border: 2px solid #2341dd;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 10px 20px;
    margin: 0 auto;
    &:hover {
      background: #2341dd;
      color: #fff;
    }

  }

  @media (max-width: 767px) {
    padding: 5px;
    margin: 0 auto;
  }

  ${props => css`
      background: ${props.background};
      color: ${props.color};
      border: ${props.border};
      border-radius: ${props.borderRadius};
      text-transform: ${props.textTransform};
      padding: ${props.paddings};
      margin: ${props.margings};
      &:hover {
        background: ${props.backgroundHover};
        color: ${props.colorHover};
      }

      @media (max-width: 767px) {
        padding: ${props.mobilePaddings};
        margin: ${props.mobileMargings};
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
  backgroundHover,
  paddings,
  margings,
  mobilePaddings,
  mobileMargings
}: ButtonProp): JSX.Element {
    return (
      <Link href={href}>
        <BtnLink 
         className = {styles.btn} 
         color = {color}
         background = {background} 
         border = {border} 
         borderRadius = {borderRadius} 
         textTransform  = {textTransform} 
         colorHover = {colorHover} 
         backgroundHover = {backgroundHover} 
         paddings = {paddings} 
         margings = {margings} 
         mobilePaddings = {mobilePaddings}
         mobileMargings = {mobileMargings}
         >
           {title}
        </BtnLink>
      </Link>
    )
}
export default Button