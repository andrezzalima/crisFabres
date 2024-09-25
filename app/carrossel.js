import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Importa o CSS básico do Swiper
import 'swiper/css/navigation'; // Importa o CSS da navegação
import 'swiper/css/pagination'; // Importa o CSS da paginação
import 'swiper/css/autoplay'; // Importa o CSS do autoplay
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      click
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="carousel overflow-hidden"
    >
      <SwiperSlide>
        <a href="#about">
        <Image
          src="/images/banner1.png"
          alt="Imagem 1"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://go.hotmart.com/O94850532U" target='_blank'>
        <Image
          src="/images/banner2.png"
          alt="Imagem 2"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="#ebook">
        <Image
          src="/images/banner3.png"
          alt="Imagem 2"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
        </a>
      </SwiperSlide>
    </Swiper>

  );
};

export default Carousel;
