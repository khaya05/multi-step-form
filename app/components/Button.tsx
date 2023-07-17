'use client';

import useCustomHook from "@/hooks/useCustomHook";

const Button = () => {
  const { next, back} = useCustomHook()
  
  return (
    <div className="flex justify-center items-center">
      <button onClick={back}>Go Back</button>
      <button onClick={next}>Next Step</button>
    </div>
  );
};

export default Button;
