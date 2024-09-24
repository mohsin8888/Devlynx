import React from "react";
import { Link } from "react-router-dom";
import headerlogo from '../../asset/images/header/logo.svg'

const Logo = ({
    url,
    customClass,
    ImageClass,
    src,
    
}) => {
  return (
    <>
      <div className={`${customClass}`}>
        <Link to={url} className="">
          <img src={headerlogo} alt="Logo" className={`w-[160px] ${ImageClass}`} />
        </Link>
      </div>
    </>
  );
};

export default Logo;
