import {lazy, Suspense} from 'react';

const Social = lazy(()=>import('./Social.jsx'));

import Logo from './Logo.jsx'
import "./styles/contact.css";
function Contact() {
  return (
  <>
    <div className="contact">
      <Logo text="Ajay"/>
       <Suspense fallback={<>...</>}>
        <Social/>
      </Suspense>
    </div>
  </>
  )
}

export default Contact;