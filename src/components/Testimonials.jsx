import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    
    if (swiper) {
      swiper.update();
    }
  }, []);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from healthcare professionals and customers who trust our products.
        </p>
        
        <div className="testimonials-slider">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonial.testimonial}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 