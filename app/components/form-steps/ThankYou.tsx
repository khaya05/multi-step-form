'use client';

import Image from 'next/image';

const ThankYou = () => {
  return (
    <div className='w-full'>
      <Image
        src="/images/icon-thank-you.svg"
        width={80}
        height={80}
        alt="icon"
        className='mx-auto mb-8'
      />

      <p className="title text-center">Thank you!</p>
      <p className="description text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
};

export default ThankYou;
