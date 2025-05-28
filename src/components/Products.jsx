const graphics = import.meta.glob('../assets/site_designs/*.png', { eager: true });

const graphics_gallery = Object.entries(graphics).map(([path, module]) => ({
    src: module.default,
    alt: path.split('/').pop().replace('.png', ''),
}));



export default function Products() {

    return (
        <div className="py-15">

            <div className="text-center font-bold text-4xl">previous projects</div>
            <div className="grid grid-cols-3  gap-1 px-5 py-2">
                {graphics_gallery.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                    />
                ))}
            </div>
        </div>
    )
}