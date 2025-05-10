import React from 'react';
import CountUp from 'react-countup';
import { FaPeace, FaBullseye, FaClock, FaRocket } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CounterSection.css';

const counters = [
  { id: 1, icon: <FaPeace size={40} />, value: 1200, label: 'Happy Clients' },
  { id: 2, icon: <FaBullseye size={40} />, value: 7, label: 'branches' },
  { id: 3, icon: <FaClock size={40} />, value: 16800, label: 'Working Hours' },
  { id: 4, icon: <FaRocket size={40} />, value: 100, label: 'Satisfaction', suffix: '%' },
];

const CounterSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section ref={ref} className="counter-section text-white text-center py-5">
      <div className="container">

        {/* MOBILE VIEW: Slider */}
        <div className="d-md-none">
          <Slider {...sliderSettings}>
            {counters.map(({ id, icon, value, label, suffix }) => (
              <div key={id} className="p-3">
                <div className="counter-box">
                  <div className="icon mb-3">{icon}</div>
                  <h2>
                    {inView ? <CountUp end={value} duration={3} suffix={suffix || ''} /> : 0}
                  </h2>
                  <p className="text-uppercase">{label}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP VIEW: Grid */}
        <div className="row d-none d-md-flex">
          {counters.map(({ id, icon, value, label, suffix }) => (
            <div className="col-sm-6 col-md-3 mb-4" key={id}>
              <div className="counter-box">
                <div className="icon mb-3">{icon}</div>
                <h2>
                  <CountUp end={value} duration={3} suffix={suffix || ''} />
                </h2>
                <p className="text-uppercase">{label}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CounterSection;
