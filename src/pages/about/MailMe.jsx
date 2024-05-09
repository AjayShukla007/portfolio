import { useRef, useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import DOMPurify from "dompurify";

import { useTitleData } from '../../components/context/csContext';
const siteKeyUrl = import.meta.env.VITE_API_PORTFOLIO_SITE_KEY;
const getInTouchUrl = import.meta.env.VITE_API_GETIN_TOUCH;

const Mail = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    token: ""
  });
  const [status, setStatus] = useState("");
  const captchaRef = useRef(null);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: DOMPurify.sanitize(e.target.value)
    });
  };

  const handleCaptcha = async () => {
    // e.preventDefault();
    const token = await captchaRef.current.getValue();
    // captchaRef.current.reset();
    await setCredentials({
      ...credentials,
      token: token
    });
    
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const head = await sessionStorage.getItem("authToken");
    const token = await captchaRef.current.getValue();
       await setCredentials({
          ...credentials,
          token: token
        });

    if (head && token) {
      try {
        const headers = {
          authToken: `${head}`
        };
        const response = await axios.post(getInTouchUrl, credentials, {
          headers
        });
        //console.log(response.data);
        if(response) {
          setStatus(<span style={{ color: "green" }}>message send</span>);
        }

        captchaRef.current.reset();
      } catch (error) {
        console.log(error);
        setStatus(
          <span style={{ color: "red" }}>Error sending, Please try again</span>
        );
      }
    } else {
      console.log("some error occured");
    }
  };


  const inputRef = useRef(null)
  const { mailTo } = useTitleData();
  
  useEffect(() => {
    if(mailTo){
      inputRef.current.scrollIntoView({behavior: 'smooth'})
      // console.log('is scroled to the input');
      
    }
  }, [mailTo])

  return (
    <>
      <div
        className="contactInput">
        <form className="contactForm" onSubmit={handleSubmit}>
          <h1>CONTACT</h1>
          <div className="error">
            <div>{status}</div>
          </div>
          <div className="upperContactForm">
          <input
            ref={inputRef}
            id="name"
            className="contactInputName"
            required
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            placeholder="name"
          />
          <input
            className="contactInputEmail"
            required
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="email"
          />
            
          </div>
          <input
            className="contactInputSub"
            required
            type="text"
            name="subject"
            value={credentials.subject}
            onChange={handleChange}
            placeholder="subject"
          />
          <textarea
            className="contactInputMsg"
            style={{
              borderRadius: "10px",
              padding: "10px"
            }}
            required
            type="text"
            name="message"
            value={credentials.message}
            onChange={handleChange}
            placeholder="message"
            rows={15}
          ></textarea>
          <div className="lowerContactForm">
          <div className="captcha">
          <ReCAPTCHA
            className="ccaptcha"
            sitekey={siteKeyUrl}
            ref={captchaRef}
            onChange={handleCaptcha}
          />
          </div>
          <button className="submitBtn" type="submit">
            Send message
          </button>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default Mail;
