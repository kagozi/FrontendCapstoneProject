// import { RadioGroup, RadioOption } from "./Radio";
// let selected = '';
// const setSelected = (e) => {
//    selected = e.target.value;
// }
import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
  const RadioOptions = React.Children.map(children, (child) => { 
    
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   });
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 
const Booking = () => {
    return (
    <section class="contact" id="contact">
      <div class="title">
        <h2 class="titleText"><span>B</span>ook Now</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="contactForm">
        <h3>Send Message</h3>
          <div class="inputBox">
            <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>

          <div class="inputBox">
            <label>Email</label>
          <input type="text" placeholder="Email" />
          </div>
          <div class="inputBox">
          <RadioGroup onChange={(e)=> alert(e.this.value)} selected={true}> 
          <RadioOption value="social_media">Social Media</RadioOption> 
          <RadioOption value="friends">Friends</RadioOption> 
          <RadioOption value="advertising">Advertising</RadioOption> 
          <RadioOption value="other">Other</RadioOption>
          </RadioGroup> 
        </div>
        <div class="inputBox">
            <label>Message</label>
          <textarea placeholder="Message"></textarea>
          </div>
        <div class="inputBox">
          <input type="submit" value="Send" />
        </div>
      </div>
    </section>
    )
}

export default Booking;