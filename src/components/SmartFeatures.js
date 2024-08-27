import React, { useState, useEffect } from 'react';
import data from '../data/data.json'; // Adjust the path as per your project structure

const SmartFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {    
    setFeatures(data.SmartFeatures);
  }, []);

  return (
    <div id="features" className="text-center">
      <div className="  ">
        <div className=" section-title align-items-center smFeatures ">
          <h1 className='pt-5'>Don't Experiment When You Have Blink</h1>
          <div class="section-title-border mt-3" bis_skin_checked="1"></div>
        </div>
        <div className="row" style={{  marginTop: '50px' ,marginLeft: '15px', marginRight: '15px'}}>
        
          {features.length > 0 ? (
            features.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                <i className={d.icon}></i>
                <h3 style={{fontSize: '20px'}}>{d.title}</h3>
                <p style={{fontSize: '15px'}}>{d.text}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartFeatures;
