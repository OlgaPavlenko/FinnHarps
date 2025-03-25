import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";

import styles from "./Galary.module.scss";
import { useState } from "react";
import { galareRoutes } from "~/constants";

// import { galareRoutes } from '@/constants';

const Galary = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className={styles.galary}>
      <div className={styles.container}>
        <Swiper
          // pagination={{
          //   clickable: true,
          //   renderBullet: (index, className) =>
          //     `<span class="${className}">${index + 1}</span>`,
          // }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectCoverflow, FreeMode, Navigation, Thumbs, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 1.7,
              spaceBetween: 30,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper2"
        >
          {galareRoutes.map((rout, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={rout} width={600} height={400} alt={""} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={2}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper"
          style={{ width: "58%" }}
        >
          {galareRoutes.map((rout, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={rout} width={250} height={50} alt={""} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentials. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentials.
        </p>
      </div>
    </section>
  );
};

export default Galary;
