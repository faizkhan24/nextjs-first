import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1300px] mx-auto bg-white min-h-screen shadow-md flex flex-col border-l border-r">
      {children}
    </div>
  );
}

export default Container;
