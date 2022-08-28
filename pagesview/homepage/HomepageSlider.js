import { useState } from "react";
import { IPhone7 as IPhoneX } from "react-device-mockups";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { autoplayOptions } from "../../helpers/utils";
import style from "./Homepage.module.scss";

SwiperCore.use([Autoplay]);

// const helpful = [
//   "Undang hingga 1000 tamu",
//   "Pilih tema  sesuka kamu",
//   "Beda tamu beda undangan, bisa!",
// ];

const slider = [
  "/hero/hero-story-1.jpg",
  "/hero/hero-story-2.jpg",
  "/hero/hero-story-3.jpg",
];

const HomepageSlider = () => {
  const [swiped, setSwiped] = useState(false);

  return (
    <div className={style.heroSlider}>
      <IPhoneX width={300} color="black">
        <Swiper
          autoplay={autoplayOptions(5000)}
          loop
          className={`${style.heroSwiper} p-4 h-full overflow-hidden rounded-xl relative`}
          onSwiper={setSwiped}
          onSlideChange={() => {
            const el = document.getElementById("heroProgressInside");
            if (el) {
              el.classList.remove(style.progressInside);
              setTimeout(() => {
                el.classList.add(style.progressInside);
              }, 1);
            }
          }}
        >
          {slider.map((h, index) => (
            <SwiperSlide key={h} className="h-full w-full relative">
              <Image alt={`Hero Image ${index}`} src={h} layout="fill" />
            </SwiperSlide>
          ))}
          {swiped && (
            <div className={style.storyProgress}>
              <div className={style.progressInside} id="heroProgressInside" />
            </div>
          )}
        </Swiper>
      </IPhoneX>
    </div>
  );
};

export default HomepageSlider;
