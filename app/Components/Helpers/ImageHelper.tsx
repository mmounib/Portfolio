import "../../../app/imageHolder.css";
import Image from "next/image";

const ImageHelper = () => {
  return (
    <>
      <div className="left-light"></div>

      <div className="guy-image-container z-10">
        {/* <img
          className="shape vector"
          src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/vector-icon.svg"
          alt="vector shape"
        />
        <img
          className="shape circles"
          src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/group-icon.svg"
          alt="circles shape"
        />
        <img
          className="shape triangle"
          src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/group-icon2.svg"
          alt="triangle shape"
        />
        <img
          className="shape plus-sign"
          src="https://raw.githubusercontent.com/Moamal-2000/images/15544c5f489023b8c871801240bcff0fa435be65/plus-sign-icon.svg"
          alt="plus sign shape"
        /> */}

        <div className="background-square-frame"></div>
        <div className="invisible-holder">
          <div className="square-frame">
            <Image
              src="/resume-image-removebg.png"
              alt="My Image"
              width={150}
              height={150}
              className="object-cover img z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHelper;
