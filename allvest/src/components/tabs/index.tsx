import React from "react";

const Tab: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="lined-btn-small p-3 w-[170px] md:w-[250px] lg:w-max lg:px-5">
      <p className="text-xs text-center md:text-base">{title}</p>
    </div>
  );
};

export default Tab;
