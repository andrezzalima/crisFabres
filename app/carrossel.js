import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Instala os módulos do Swiper
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);

const Carousel = () => {
    return (
        <>
            <style jsx>{`
        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .swiper-slide img {
          width: 100%;
          height: auto;
        }
      `}</style>
            <Swiper
                spaceBetween={20} // Ajuste o espaço entre os slides
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30, // Ajuste o ângulo de rotação
                    stretch: 10, // Espaçamento entre os slides
                    depth: 200, // Profundidade do efeito 3D
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                <SwiperSlide>
                    <img src="/images/img1.jpg" alt="Imagem 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/img2.jpg" alt="Imagem 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/img3.jpg" alt="Imagem 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/img6.jpg" alt="Imagem 6" />
                </SwiperSlide>
                {/* Adicione mais SwiperSlides conforme necessário */}
            </Swiper>
        </>
    );
};

export default Carousel;