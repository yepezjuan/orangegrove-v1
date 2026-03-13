import CloudinaryImage from "./CloudinaryImage";
const graphics_gallery = [
  "Crack_rock_cafe_hdgrx7",
  "cowbow_draft_ydehyp",
  "ny_la_mtckgj",
  "to_go_logo_x1fguw",
  "televisa_hucr_v5imko",
  "finalmock_bv14ab",
  "hucr_retreat_front_1_o9ejak",
  "cholo_eawvb0",
  "add_cca2ie",
  "hucr_retreat_back_d5z8da",
  "og_gameboy_jq0xin",
  "promo_black_mzitlh",
];

export default function Products() {
  return (
    <div id="portfolio" className="py-15 scroll-mt-20">
      <div className="text-center font-bold text-4xl">Graphic Designs:</div>
      <div className="grid grid-cols-3  gap-1 px-5 py-2">
        {graphics_gallery.map((publicId, i) => (
          <CloudinaryImage
            key={i}
            publicId={publicId}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
}
