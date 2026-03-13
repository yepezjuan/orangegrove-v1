import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { cld } from "../../lib/cloudinary";

const CloudinaryImage = ({ publicId, className }) => {
  const img = cld.image(publicId).format("auto").quality("auto");

  return <AdvancedImage cldImg={img} className={className} loading="lazy" />;
};

export default CloudinaryImage;
