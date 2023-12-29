import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Animation from './ContactMe.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('jhjj')
        const formData = e.target
        if(!formData.user_email.value || !formData.user_name.value || !formData.Subject.value || !formData.message.value){
            Swal.fire({
                icon: "warning",
                title: "Please give enough information ",
                showConfirmButton: false,
                timer: 1500
              })
              return
            
        } 

        emailjs.sendForm('service_8r2tfnk', 'template_mhhae9h', form.current, 'zpCeyTgafwDsRX80T')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: "success",
                title: "Thanks for your messeage",
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id='contact' className='max-w-[1200px] animate-scroll lg:mt-9 flex items-center lg:flex-row flex-col pb-36 mt-12 px-10 mx-auto text-white'>
           <div className='lg:w-1/2 rounded-xl w-full  bg-[#161616] p-[24px]'>
               <form ref={form} className='w-full' onSubmit={sendEmail}>
                <div className='flex w-full relative items-center'>
                <div className='gap-2 flex absolute -left-2'>
                    <img src="/Contact/Ellipse 16.svg" alt="" />
                    <img src="/Contact/Ellipse 17.svg" alt="" />
                    <img src="/Contact/Ellipse 18.svg" alt="" />
                 </div>
                 <div className='gap-2 mx-auto text-center font-medium '>
                    New Messeage
                 </div>
                </div>
                <div className='flex mt-7 gap-2 border-b-[#80808080] border-b-2 pb-3'>
                    Email : 
                <input name='user_email' placeholder='Enter Your Email ' type="text" className='bg-[#161616] focus:outline-none placeholder:text-[#80808080]' />
                </div>
                <div className='flex mt-4 gap-2 border-b-[#80808080] border-b-2 pb-3'>
                    Name : 
                <input name='user_name' placeholder='Enter Your Name ' type="text" className='bg-[#161616] focus:outline-none placeholder:text-[#80808080]' />
                </div>
                <div className='flex mt-4 gap-2 border-b-[#80808080] border-b-2 pb-3'>
                   Subject : 
                <input name='Subject' placeholder='Enter Your Subject ' type="text" className='bg-[#161616] focus:outline-none placeholder:text-[#80808080]' />
                </div>
                <div>
                <textarea name='message' cols="60" rows="7" placeholder='Write Your Messeage' className='bg-[#0D0D0D] focus:outline-none w-full placeholder:text-[#80808080] rounded-xl p-[20px] mt-4'></textarea>

                </div>
                <div className='flex justify-end mt-4'>
                    <button type='submit' className='btn Contact-button text-white border-0 hover:bg-black'>Send</button>
                </div>
               </form>
           </div>
           <div className='lg:w-1/2 w-full lg:block hidden'>
            <Lottie animationData={Animation}></Lottie>
           </div>

        </div>
    //     <form className='bg-white mb-20' ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="user_name" />
    //     <label>Email</label>
    //     <input type="email" name="user_email" />
    //     <label>Message</label>
    //     <textarea name="message" />

    //     <input type="submit" className='btn' value="Send" />
    //   </form>
    );
};

export default Contact;