import styles from './Button.module.css'
const Button = ({isOutline,text,icon}) => {
  return (
        <button className={isOutline ? styles.outline_btn :styles.primary_btn}>
            {icon}
            {text}
        </button>
  )
  }
export default Button;
