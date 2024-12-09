import React from 'react';
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { WorkspacePremium } from '@mui/icons-material';

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">Most Proud of</h2>
            <span className="section__subtitle">Achievements</span>
            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description, icon }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id} style={{ position: 'relative' }}>
                            <img src={image} alt="client" className="testimonial__img" />
                            <h3 className="tetimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                            <span style={{ position: 'absolute', top: '14px', right: '19px' }}>
                                {icon}
                            </span>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Testimonials;