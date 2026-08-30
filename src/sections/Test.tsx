import { useRef } from "react";

const Test = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  console.log(boxRef)

  return (
    <>

  
      <div ref={boxRef} className="h-20 w-20 bg-primary" />;
    </>
  );
};

export default Test;
