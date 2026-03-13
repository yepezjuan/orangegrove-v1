// inside your component (e.g., FilmGallery.jsx)
import CloudinaryImage from "./CloudinaryImage";

const filmGallery = [
  "000083080006_krv75t",
  "000091330004_tl6zdg",
  "000080320033_h9utfj",
  "000328220028_v4th0j",
  "000328220024_skjk2b",
  "000015610037_whanig",
  "000080320017_jd7e0d",
  "000080320009_mzoyx8",
  "000015610035_ax0ysd",
  "000015610012_eegzv6",
  "000091330009_iw2ok0",
  "000091330013_qy6gcn",
];

export default function Gallery() {
  return (
    <>
      <div className="text-3xl text-center font-bold pb-5 scroll-mt-20">
        film photos
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-5 py-2">
        {filmGallery.map((publicId, i) => (
          <CloudinaryImage
            key={i}
            publicId={publicId}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </>
  );
}
