// import React from "react";
// import "./Offers.css";

// const offerItems = [
//   { icon: "fas fa-pen-fancy", title: "Project Creation", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//   { icon: "fas fa-dharmachakra", title: "Software Development", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//   { icon: "fas fa-tasks", title: "Project Management", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
//   ];

// export default function Offers() {
//   return (
//     <section className="we-offer-area text-center bg-gray">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="site-heading text-center">
//               <h2>Special <span>Offers</span></h2>
              
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {offerItems.map((item, idx) => (
//             <div className="col-md-4 col-sm-6 mb-4" key={idx}>
//               <div className="item">
//                 <i className={item.icon}></i>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import "./Offers.css";

const offerItems = [
  { percent: "25% OFF", code: "SAVE25", title: "Project Creation", desc: "Use this code to get 25% off your project creation." },
  { percent: "40% OFF", code: "DEV40", title: "Software Development", desc: "Get 40% discount on software development services." },
  { percent: "15% OFF", code: "PM15", title: "Project Management", desc: "15% off on all project management solutions." },
];

export default function Offers() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="we-offer-area text-center bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2>Special <span>Offers</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          {offerItems.map((item, idx) => (
            <div className="col-md-4 col-sm-6 mb-4" key={idx}>
              <div className="item" onClick={() => handleCopy(item.code)}>
                <div className="offer-percent">{item.percent}</div>
                <div className="offer-hover">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="offer-code">Code: <strong>{item.code}</strong></div>
                  {copiedCode === item.code && (
                    <div className="copied-msg">Code Copied!</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

