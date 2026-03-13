import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { cld } from "../../lib/cloudinary";

const CloudinaryImage = ({ publicId, className, width, height }) => {
  let img = cld.image(publicId).format("auto").quality("auto");

  if (width || height) {
    img = img.resize(
      auto()
        .width(width || undefined)
        .height(height || undefined)
        .gravity(autoGravity()),
    );
  }

  return <AdvancedImage cldImg={img} className={className} loading="lazy" />;
};

export default CloudinaryImage;
