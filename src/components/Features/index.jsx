import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Kelembutan Sutra",
      logo: "/feature-1.svg",
      content:
        "Serat bambu yang alami terasa selembut sutra, memberikan kenyamanan luar biasa sepanjang hari.",
    },
    {
      id: 2,
      title: "Sirkulasi Udara Optimal",
      logo: "/feature-2.svg",
      content:
        "Kain katun bambu memiliki kemampuan menyerap keringat dan kelembapan yang tinggi, menjaga tubuh tetap sejuk dan kering.",
    },
    {
      id: 3,
      title: "Anti-bakteri Alami",
      logo: "/feature-3.svg",
      content:
        "Bambu memiliki sifat anti-bakteri alami yang membantu mencegah bau tidak sedap, sehingga Anda selalu segar.",
    },
    {
      id: 4,
      title: "Ramah Lingkungan",
      logo: "/feature-4.svg",
      content:
        "Bambu adalah tanaman yang cepat tumbuh dan mudah diperbarui, menjadikannya pilihan yang lebih ramah lingkungan dibandingkan bahan lainnya.",
    },
    {
      id: 5,
      title: "Tahan Lama",
      logo: "/feature-5.svg",
      content:
        "Kualitas premium katun bambu menjamin ketahanan singlet ini, menemani Anda dalam berbagai aktivitas.",
    },
    {
      id: 6,
      title: "Serbaguna",
      logo: "/feature-6.svg",
      content:
        "Cocok untuk berbagai aktivitas, dari santai di rumah hingga olahraga yang intens.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">#singletkatunbambu #pakaiannyaman #sejukalaminya #ramah lingkungan</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Mengapa Memilih Singlet Katun Bambu?
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Dapatkan Singlet Katun Bambu sekarang dan rasakan perbedaannya!
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
