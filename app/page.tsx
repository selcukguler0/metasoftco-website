import Header from "@/components/Header";
import Aktivite from "@/components/Home/Aktivite";
import EmblaCarousel from "@/components/Home/EmblaCarousel/Carousel";
import { TeklifAl } from "@/components/Home/TeklifAl";
import Image from "next/image";
import Link from "next/link";

const fotografAktiviteleri = [
  "/anasayfa-slides/fotograf-aktiviteleri/1.jpg",
  "/anasayfa-slides/fotograf-aktiviteleri/2.jpg",
  "/anasayfa-slides/fotograf-aktiviteleri/3.jpg",
  "/anasayfa-slides/fotograf-aktiviteleri/4.jpg",
]
const yapayZekaAktiviteleri = [
  "/anasayfa-slides/yapay-zeka-aktiviteleri/1.jpg",
  "/anasayfa-slides/yapay-zeka-aktiviteleri/2.jpg",
  "/anasayfa-slides/yapay-zeka-aktiviteleri/3.jpg",
  "/anasayfa-slides/yapay-zeka-aktiviteleri/4.jpg",
]

export default function Home() {
  return (
    <>
      <Header page="Ana Sayfa" />
      <main className="container mt-48">
        <div className="mb-12 md:mb-0 md:min-h-[60vh]">
          <div className="mt-12 md:ml-56 max-w-[800px]">
            <h2 className="text-5xl md:text-7xl font-black">
              İnovasyonla harmanlanmış etkinlik deneyimleri sunuyoruz.
            </h2>
            <TeklifAl />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-12 mb-7 md:items-end">
          <h2 className="text-4xl md:text-5xl font-semibold md:flex-shrink-0">
            <span className="text-2xl">Metasoftco</span> <br />
            Neler Yapıyoruz?
          </h2>
          <p className="text-lg">Yapay zeka destekli projeler, etkileşimli fotoğraf deneyimleri ve özelleştirilmiş interaktif makineler sunarak, her etkinliğinizi benzersiz ve hatırlanır kılacak yenilikçi çözümler üretiyoruz.</p>
        </div>
        <Aktivite title="Yapay Zeka Projeleri" subtitle="Yapay zeka destekli uygulamalarımızla gerçekliğin sınırlarını zorlayın; etkinliklerinizi yenilikçi ve eğlenceli çözümlerimizle canlandırın." slides={yapayZekaAktiviteleri} links={["Fotoğraf Çek", "Fotoğraf Gönder", "Fotoğraf Baskı", "Fotoğraf Paylaş"]} />
        <Aktivite title="Makine Aktiviteleri" subtitle="Etkinliklerinizde katılımcılarınızın eğlenceli ve unutulmaz anlar yaşamasını sağlayacak fotoğraf aktiviteleri." slides={fotografAktiviteleri} links={["Fotoğraf Çek", "Fotoğraf Gönder", "Fotoğraf Baskı", "Fotoğraf Paylaş"]} />
      </main>
    </>
  );
}
