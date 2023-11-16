import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';
import styles from './ContactForm.module.css'
import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [text, setText] = useState(undefined);

  const onSubmit = (event) => {
    if(event){
      event.preventDefault();//for preventing page default refresh
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
    }
  };

  return (
    <section className={styles.form_section}>
        <div>
          <div className={styles.contact_form}>
              <div className={styles.top_btn}>
                  <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='20px'/>}/>
                  <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='20px'/>}/>
              </div>
              <Button isOutline='true' text='VIA EMAIL FROM' icon={<HiMail fontSize='20px'/>}/>
          </div>
          <form 
          onSubmit={onSubmit}
            className={styles.form}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='Jhon Peter'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' placeholder='abc@example.com'/>
            </div>

            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea type="text" name='text' placeholder='Discription'/>
            </div>
            <div className={styles.submit}>
              <Button text='SUBMIT'/>
            </div>
            <p>
              {`Name: ${name}`} <br/> {`Email: ${email}`} <br/> {`Text: ${text}`}
            </p>
          </form>
          </div>
        <div className={styles.contact_image}>
          <img src="/images/image2.png" alt="image" />
        </div>
    </section>
    
  )
}

export default ContactForm;
