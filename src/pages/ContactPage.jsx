import { CheckCircle, Circle, Facebook, Instagram, Mail, MapPin, Phone, TwitterIcon } from "lucide-react";
import { Link } from "react-router";
import '@/styles/scss/style.css'
import { useState } from "react";
const ContactPage = ()=>{
    const [selectedOption,setSelectedOption] = useState("");
    const [formFields ,setFormFields] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message:"",
    });
    const handleInputChange = (e) =>{
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    }
    return <>
    <div className="contactPage">
        <div className="contactPage__head">
            <h1>Contact Us</h1>
            <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contactPage__cols">
        <div className="contactPage__info">
            <div>
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>
            </div>
            <div className="contact">
            <span className="phone"><Phone/> +2126000000</span>
            <span className="email"><Mail/> support@example.com</span>
            <span className="address"><MapPin/> Avenue 2 mars,Sale,Morocco</span>
            </div>
            <div className="icons">
                <Link to={'#'}><Facebook/></Link>
                <Link to={'#'}><Instagram/></Link>
                <Link to={'#'}><TwitterIcon/></Link>
            </div>
        </div>
        <div className="contactPage__form">
            <form>
                <div className="col">
                <div className="input">
                <label htmlFor="firstname" style={{color: formFields.firstname ? '#011C2B' : '#ccc' }}>First Name</label>
                <input type="text" name="firstname"  placeholder="Ex: Jhon" onChange={handleInputChange}/>
                </div>  
                <div className="input">
                <label htmlFor="lastname" style={{color: formFields.lastname ? '#011C2B' : '#ccc' }}>Last Name</label>
                <input type="text" name="lastname" placeholder="Ex: Doe" onChange={handleInputChange}/>
                </div>
                    
                </div>
                <div className="col">
                        <div className="input">
                    <label htmlFor="email" style={{  color: formFields.email ? '#011C2B' : '#ccc' }}>Email</label>
                    <input type="email" required name="email" placeholder="email@example.com" onChange={handleInputChange}/>
                        </div>
                        <div className="input">
                    <label htmlFor="phone" style={{ color: formFields.phone ? '#011C2B' : "#ccc" }}>Phone</label>
                    <input type="tel" name="phone" placeholder="+2126-1232111" onChange={handleInputChange} />
                        </div>
                </div>
                <div className="select">
                        <h3>Select an option</h3>
                        <div className="options">
                            {[
                                "General Inquiry",
                                "Support Request",
                                "Feedback",
                                "Report"
                            ].map((option)=>(
                                <label key={option}>
                                <input type="radio" name="custom-option" value={option}
                                checked={selectedOption === option}
                                onChange={(e)=>setSelectedOption(e.target.value)}/>
                                {selectedOption === option ? (<CheckCircle size={20} color="#F6AF03"/>) :(<Circle size={20} color="#ccc"/>) }
                                {option}
                                </label>
                            ))}
                        
                    </div>
                </div>
                <div className="textarea">
                    <h3>Message</h3>
                <textarea name="message" placeholder="Write your message.." cols={'45'} rows={'7'}></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
        </div>


    
    </div>
    </>
}
export default ContactPage;