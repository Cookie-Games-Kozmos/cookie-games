import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center pt-20 pb-16"
    >
      <div className="max-w-[1240px] items-center mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <a className="uppercase text-2xl tracking-widest text-[#FF7062]">
            Hakkımızda
          </a>
          <p className="py-2 text-gray-600">
            Selam! Biz Cookie Games ekibi, çekirdek bir ekip olmamıza rağmen var
            olan azmimiz ile daha çok çalışıyor rakiplerimizle aramızda olan
            farkı kapatıyoruz. Ekip içerisindeki en önemli faktör olan yönetimi
            arkadaşlığın vermiş olduğu samimiyet ve disiplinle harmanlıyoruz, bu
            sayede daha sağlam bir otoriteye sahip oluyoruz. Amaçlarımız
            arasında hali hazırda yapmış olduğumuz "İlk" oyunumuz olan
            "Project:Escape" i sizlere sunmak istiyoruz. Bu sayede yazılım,
            hikaye ve tasarımlar hakkındaki eksiklerimizi tamamlayacak sıradaki
            projeler için daha hazırlıklı olacağız. Biz Cookie Games ekibi
            zamanınızı ayırıp bu metni okuduğunuz için teşekkür ediyor iyi,
            günler diliyoruz. -Oyunlarımızı oynayarak yapacağınız yapıcı
            eleştiriler bizim için çok önemli...-.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-black rounded-xl flex item-center justify-center hover:scale-105 ease-in duration-300 transition-all filter grayscale hover:grayscale-0">
          <Image
            className="rounded-xl"
            src="/assets/cookieweb.png"
            alt="a picture of me"
            width={400}
            height={430}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
