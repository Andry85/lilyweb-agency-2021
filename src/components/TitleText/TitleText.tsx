import styles from './TitleText.module.scss'
import styled, { css } from 'styled-components'

type TitleTextProp = {
  title: string,
  text: string,
  titleFontSize?: string,
  titleLineHeight?: string,
  titleColor?: string,
  titleTextTransform?: string,
  titlePaddings?: string,
  titleTextAlign?: string,
  titleMobilePaddings?: string,
  titleMobileFontSize?: string,
  titleMobileTextAlign?: string,
  textFontSize?: string,
  textLineHeight?: string,
  textColor?: string,
  textTextTransform?: string,
  textPaddings?: string,
  textTextAlign?: string,
  textMobilePaddings?: string,
  textMobileFontSize?: string,
  textMobileTextAlign?: string,
  wrapperPaddings?: string,
  wrapperMobilePaddings?: string,
  wrapperMaxWidth?: string,
  wrapperMargings?: string,
  wrapperMobileMargings?: string,
}

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  color: #333;
  line-height: 1.25;

  ${props => css`
      font-size: ${props.titleFontSize};
      line-height: ${props.titleLineHeight};
      color: ${props.titleColor};
      text-transform: ${props.titleTextTransform};
      padding: ${props.titlePaddings};
      text-align: ${props.titleTextAlign};

      @media (max-width: 767px) {
        padding: ${props.titleMobilePaddings};
        font-size: ${props.titleMobileFontSize};
        text-align: ${props.titleMobileTextAlign};
      }
  `};

`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #666;
  line-height: 1.25;

  ${props => css`
      font-size: ${props.textFontSize};
      line-height: ${props.textLineHeight};
      color: ${props.textColor};
      text-transform: ${props.textTextTransform};
      padding: ${props.textPaddings};
      text-align: ${props.textTextAlign};

      @media (max-width: 767px) {
        padding: ${props.textMobilePaddings};
        font-size: ${props.textMobileFontSize};
        text-align: ${props.textMobileTextAlign};
      }
  `};

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 25px 0;
  max-width: 770px;
  margin: 0 auto;

  ${props => css`
      padding: ${props.wrapperPaddings};
      max-width: ${props.wrapperMaxWidth};
      margin: ${props.wrapperMargings};

      @media (max-width: 767px) {
        padding: ${props.wrapperMobilePaddings};
        margin: ${props.wrapperMobileMargings};
        max-width: 100%;
      }
  `};
`;


function TitleText ({ 
  title,
  text,
  titleFontSize,
  titleLineHeight,
  titleColor,
  titleTextTransform,
  titlePaddings,
  titleTextAlign,
  titleMobilePaddings,
  titleMobileFontSize,
  titleMobileTextAlign,
  textFontSize,
  textLineHeight,
  textColor,
  textTextTransform,
  textPaddings,
  textTextAlign,
  textMobilePaddings,
  textMobileFontSize,
  textMobileTextAlign,
  wrapperPaddings,
  wrapperMobilePaddings,
  wrapperMaxWidth,
  wrapperMargings,
  wrapperMobileMargings
}: TitleTextProp): JSX.Element {
    return (
        <Wrapper 
          className = {styles.wrapper}
          wrapperPaddings = {wrapperPaddings}
          wrapperMobilePaddings = {wrapperMobilePaddings}
          wrapperMaxWidth = {wrapperMaxWidth}
          wrapperMargings = {wrapperMargings}
          wrapperMobileMargings = {wrapperMobileMargings}
        >
          <Title
            titleFontSize = {titleFontSize}
            titleColor = {titleColor}
            titleLineHeight = {titleLineHeight}
            titleTextTransform = {titleTextTransform}
            titlePaddings = {titlePaddings}
            titleTextAlign = {titleTextAlign}
            titleMobilePaddings = {titleMobilePaddings}
            titleMobileFontSize = {titleMobileFontSize}
            titleMobileTextAlign = {titleMobileTextAlign}
          >
            {title}
          </Title>
          <Text
            textFontSize = {textFontSize}
            textColor = {textColor}
            textLineHeight = {textLineHeight}
            textTextTransform = {textTextTransform}
            textPaddings = {textPaddings}
            textTextAlign = {textTextAlign}
            textMobilePaddings = {textMobilePaddings}
            textMobileFontSize = {textMobileFontSize}
            textMobileTextAlign = {textMobileTextAlign}
          >
            {text}
          </Text>
        </Wrapper>

    )
}
export default TitleText