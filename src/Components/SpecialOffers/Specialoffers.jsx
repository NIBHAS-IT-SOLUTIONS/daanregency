import React from 'react'
import './Specialoffers.css'
function Specialoffers() {

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
          .then(() => alert("Coupon Code copied!"))
          .catch(err => console.error("Failed to copy: ", err));
      };
    const Offers=[
        {   Title:'Discount Offer',
            offpercent:'25%',
            description:'Get 25% off on all products this weekend only',
            code:'DAAN15'
        },
        {
            Title:'Limited Offer',
            offpercent:'15%',
            description:'Get 15% off on all products this weekend only',
            code:'DAAN1'
        },
        {
            Title:'VIP Offer',
            offpercent:'30%',
            description:'Get 30% off on all products this weekend only',
            code:'DAAN'
        },
        {
            Title:'Bundle Offer',
            offpercent:'25%',
            description:'Family Combo: 2 + 2 Rooms for 25% off',
            code:'DAAN25'
        },
    ]
    

  return (
    <section id="labels">
  <div class="container">
  <h2 className='text-center display-3'>Special Offers</h2>
  <br /><br />
	<div class="row">
        {
            Offers.map((offer)=>{
                return(
                    <div class="col-6 col-sm-6 col-md-3">
                    <div class="dl">
                    <div class="brand">
                            <h2>{offer.Title}</h2>
                     </div>
                      <div class="discount bg-dark">{offer.offpercent}
                          <div class="type">off</div>
                      </div>
                      <div class="descr">
                          <strong>{offer.description}</strong> 
                          
                      </div>
                      <div class="ends">
                          <small>* Conditions and restrictions apply.</small>
                      </div>
                      <div class="coupon midnight-blue">
                          <div id="code"  onClick={(e)=>handleCopy(offer.code)} 
                             style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>{offer.code}</div>
                      </div>
                    </div>
                    <br />
                  </div>
                  
                )
                
            })
       
}

	</div>
  </div>
</section>
  )
}

export default Specialoffers