import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

interface IProps {
    items: ReactNode[];
    customClass?: string;
}

export const Slider = ({ items, customClass }: IProps) => {

    return (
        <>
            <Swiper
                cssMode={true}
                loop={true}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay]}
                className={customClass || ""}
            >
                {items.map((Item, index) => (
                    <SwiperSlide key={index}>{Item}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
