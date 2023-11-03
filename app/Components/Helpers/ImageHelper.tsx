import "../../../app/imageHolder.css";
import Image from "next/image";

const ImageHelper = () => {
  return (
    <>
      <div className="left-light"></div>

      <div className="guy-image-container z-10">
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
