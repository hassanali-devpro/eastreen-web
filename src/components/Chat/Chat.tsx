import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className='fixed z-30 right-5 bottom-5'>
      {/* <a href="skype:live:.cid.70023ce0e8a7376d?chat" target="_blank" rel="noopener noreferrer">
        <img className='w-14' src="/skype.png" alt="Skype" />
      </a> */}
      <a href="https://wa.me/+923361113737" target="_blank" rel="noopener noreferrer">
        <img className='w-[65px] mt-2' src="/WhatsApp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Chat;
