import styles from './Testimonials.module.scss'



type TestimonialsProp = {
  text: string,
  author: string
}
          

function Testimonials({text, author}: TestimonialsProp): JSX.Element {
  return (
    <div className={styles.testimonials}>
        <span className={styles.testimonials__icon}></span>
        <p>{text}</p>
        <h2>{author}</h2>
    </div>
  )
}
export default Testimonials