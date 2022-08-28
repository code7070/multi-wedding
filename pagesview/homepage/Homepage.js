import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/button/Button";
import Icon from "../../components/icons";
import { autoplayOptions } from "../../helpers/utils";
import HomepageSlider from "./HomepageSlider";

// const helpful = [
//   "Buatin undangan digital",
//   "Cariin venue",
//   "Pilihin tenda",
//   "Cariin catering",
//   "Ngasitau Wedding Organizer",
//   "Urusin semua? Boleh!",
// ];

SwiperCore.use([Autoplay]);

const WordingSlide = () => {
  const helpful = [
    "Undang hingga 1000 tamu",
    "Pilih tema  sesuka kamu",
    "Beda tamu beda undangan, bisa!",
  ];

  const classchanger =
    "text-2xl color-green-darken border-b-2 font-semibold border-green leading-10";

  return (
    <div className="mb-8">
      <Swiper
        direction="vertical"
        autoplay={autoplayOptions}
        slidesPerView={1}
        style={{ height: "40px" }}
        loop
      >
        {helpful.map((h) => (
          <SwiperSlide key={h}>
            <span className={classchanger}>{h}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="flex items-center justify-between">
        <div className="flex-1 py-6 px-4">
          <div className="mt-10">
            <h2 className="text-5xl font-semibold color-green-dark mb-10">
              Pengen Nikah?
            </h2>
            <div className="text-xl font-medium color-green-dark mb-6 leading-7">
              Buat undangan pernikahanmu di sini,
              <br />
              dapatkan beragam kelebihan
            </div>
            {/* <WordingSlide /> */}
            <h3 className="text-xl font-medium color-green-dark mb-8 leading-7">
              Undang orang-orang ke pernikahan Anda dengan cara yang menarik.
              <br />
              <span>Undanganmu, semaumu.</span>
            </h3>
            <Button>
              Buat sekarang
              <Icon icon="ArrowRight" spaceLeft={2} />
            </Button>
          </div>
        </div>
        <div className="py-6 px-4 w-1/2">
          <HomepageSlider />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
