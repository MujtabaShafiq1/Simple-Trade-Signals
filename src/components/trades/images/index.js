import React from "react";
import Image from "next/image";

const TradeImages = () => {
  const signals = [
    {
      title: "NAS100",
      description:
        "NAS100 recently shifted trend and now has gain momentum after a 50bps interest rate cut announcement by the FED yesterday. We will be looking for LONGs on the index 🚀",
      image:
        "https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.29350-15/459808957_503065099205700_1393252675632737225_n.webp?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDU2Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Jq0UASEHX3wQ7kNvgH0zlgq&_nc_gid=5bd6c817d78f4f03a540c346b718120f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2MDU4MzUyMzk1MTM2NTI4NA%3D%3D.3-ccb7-5&oh=00_AYAkB6Vxpz_XimEADdp1iafIvBqdCsTf7-45khFuw1mwBg&oe=66F63155&_nc_sid=7a9f4b",
    },
    {
      title: "NAS100",
      description:
        "NAS100 recently shifted trend and now has gain momentum after a 50bps interest rate cut announcement by the FED yesterday. We will be looking for LONGs on the index 🚀",
      image:
        "https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.29350-15/459808957_503065099205700_1393252675632737225_n.webp?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDU2Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Jq0UASEHX3wQ7kNvgH0zlgq&_nc_gid=5bd6c817d78f4f03a540c346b718120f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2MDU4MzUyMzk1MTM2NTI4NA%3D%3D.3-ccb7-5&oh=00_AYAkB6Vxpz_XimEADdp1iafIvBqdCsTf7-45khFuw1mwBg&oe=66F63155&_nc_sid=7a9f4b",
    },
    {
      title: "NAS100",
      description:
        "NAS100 recently shifted trend and now has gain momentum after a 50bps interest rate cut announcement by the FED yesterday. We will be looking for LONGs on the index 🚀",
      image:
        "https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.29350-15/459808957_503065099205700_1393252675632737225_n.webp?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDU2Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Jq0UASEHX3wQ7kNvgH0zlgq&_nc_gid=5bd6c817d78f4f03a540c346b718120f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2MDU4MzUyMzk1MTM2NTI4NA%3D%3D.3-ccb7-5&oh=00_AYAkB6Vxpz_XimEADdp1iafIvBqdCsTf7-45khFuw1mwBg&oe=66F63155&_nc_sid=7a9f4b",
    },
    {
      title: "NAS100",
      description:
        "NAS100 recently shifted trend and now has gain momentum after a 50bps interest rate cut announcement by the FED yesterday. We will be looking for LONGs on the index 🚀",
      image:
        "https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.29350-15/459808957_503065099205700_1393252675632737225_n.webp?stp=dst-jpg_e35_s720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDU2Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Jq0UASEHX3wQ7kNvgH0zlgq&_nc_gid=5bd6c817d78f4f03a540c346b718120f&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ2MDU4MzUyMzk1MTM2NTI4NA%3D%3D.3-ccb7-5&oh=00_AYAkB6Vxpz_XimEADdp1iafIvBqdCsTf7-45khFuw1mwBg&oe=66F63155&_nc_sid=7a9f4b",
    },
  ];

  return (
    <section className="max-w-screen-2xl mb-32 mx-auto">
      <div className="text-center font-bold text-5xl md:text-7xl mb-10">
        <span className="text-neutral-100">Trade</span>
        <span className="text-primary-100">&nbsp;Signals</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {signals.map(({ title, description, image }, index) => (
          <div
            key={title}
            className="bg-neutral-50 text-neutral-900 flex flex-col items-center border-2 border-primary-200 justify-center w-[600px] h-[500px] rounded-xl shadow-lg">
            <div className="p-6 text-left">
              <p className="font-bold mb-4 text-2xl">{title}</p>
              <p className="font-normal text-lg">{description}</p>
            </div>
            <div className="w-full h-full relative rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradeImages;
