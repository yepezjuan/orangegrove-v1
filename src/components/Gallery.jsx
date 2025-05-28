

// inside your component (e.g., FilmGallery.jsx)
const images = import.meta.glob('../assets/filmGallery/*.jpg', { eager: true });

const filmGallery = Object.entries(images).map(([path, module]) => ({
    src: module.default,
    alt: path.split('/').pop().replace('.jpg', ''),
}));


export default function Gallery() {
    return (
        <>
            <div className="text-3xl text-center font-bold pb-5">film photos</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-5 py-2">
                {filmGallery.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                    />
                ))}
            </div>
        </>
    );
}

