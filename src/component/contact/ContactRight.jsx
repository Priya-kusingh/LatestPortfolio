// import React from 'react'

import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  return (
    < div className=" flex flex-col items-center justify-center gap-8 text-white">
        <img src="../../public/image/Email.png" alt="Contact" className="max-w-[250px]" />
        <ContactInfo />
        <ContactSocial />
    </div>
  )
}

export default ContactRight;
