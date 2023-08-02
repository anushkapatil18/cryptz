import React,{useState} from 'react';
import axios from 'axios';

const SendEmailButton = () => {
  const [email,setEmail] = useState("anushkabpatil11@gmail.com");

  const handleSendEmail = async () => {
    let dataSend = {
      email: email,
    };

    const res = await fetch(`http://localhost:5000/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };

  return (
    <div>
      <input type="text"  className='text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
      {console.log(email)}
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
};

export default SendEmailButton;
