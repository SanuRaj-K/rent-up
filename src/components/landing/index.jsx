import React from "react";

export const LandingPage = () => {
  return (
    <div>
      <section className=" pb-36 min-h-screen w-full bg-landing bg-cover bg-no-repeat">
        <div>
          <h1>search your next home</h1>
          <h3>find new & featured property located in your local city</h3>
          <div>
            <div>
              <label htmlFor="city">city/street</label>
              <input type="text" placeholder="Location" name="city" id="city" />
            </div>
            <div>
              <label htmlFor="property">property type</label>
              <input
                type="text"
                placeholder="Property Type"
                name="property"
                id="property"
              />
            </div>
            <div>
              <label htmlFor="range">price range</label>
              <input
                type="text"
                placeholder="Price Tange"
                name="range"
                id="range"
              />
            </div>
            <div>
                <span>Advanced filter</span>
                <div>
                    
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
