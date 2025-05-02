import React from 'react';
import CountUp from 'react-countup';
import { FaPeace, FaBullseye, FaClock, FaRocket } from 'react-icons/fa';
import './CounterSection.css'; // Optional for custom styles
import { useInView } from 'react-intersection-observer';

const counters = [
    {
      id: 1,
      icon: <FaPeace size={40} />,
      value: 1200,
      label: 'Happy Clients',
    },
    {
      id: 2,
      icon: <FaBullseye size={40} />,
      value: 8880,
      label: 'Finished Projects',
    },
    {
      id: 3,
      icon: <FaClock size={40} />,
      value: 16800,
      label: 'Working Hours',
    },
    {
      id: 4,
      icon: <FaRocket size={40} />,
      value: 100,
      label: 'Satisfaction',
      suffix: '%',
    },
  ];
  
 
    const CounterSection = () => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.3, // Trigger when 30% is visible
        });
    return (
    //   <section className="counter-section text-white text-center py-5">
    //     <div className="container">
    //       <div className="row">
    //         {counters.map(({ id, icon, value, label, suffix }) => (
    //           <div className="col-sm-6 col-md-3 mb-4" key={id}>
    //             <div className="counter-box">
    //               <div className="icon mb-3">{icon}</div>
    //               <h2>
    //                 <CountUp end={value} duration={5} suffix={suffix || ''} />
    //               </h2>
    //               <p className="text-uppercase">{label}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    <section ref={ref} className="counter-section text-white text-center py-5">
     
      <div className="container">
        <div className="row">
          {counters.map(({ id, icon, value, label, suffix }) => (
            <div className="col-sm-6 col-md-3 mb-4" key={id}>
              <div className="counter-box">
                <div className="icon mb-3">{icon}</div>
                <h2>
                  {inView ? (
                    <CountUp end={value} duration={3} suffix={suffix || ''} />
                  ) : (
                    0
                  )}
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