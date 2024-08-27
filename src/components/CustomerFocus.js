import React from 'react';
import burgerKingLogo from '../images/customersLogo/logo-burger-king-pc03cunximtod1cjnx1io3p48z7b114vy1wqzgkrng.png';
import nandosLogo from '../images/customersLogo/logo-nandos-pc02x9i9xrq73i0fbdj5ts0nslmd8265z2m30bv21s.png';
import androidIcon from '../images/customers/icons/android-line-logo-poj9xsxronaq6rbd8spn1rmmf3bgobn0pjr0l0hr0c.png';

const CustomerFocus = () => {
  return (
    <section className="container-fluid px-0 customerFocus customersCust">
      <div className="custom-container">
        <h1 className="text-center">Customers In Focus</h1>
        <div class="section-title-border mt-3 mb-5"></div>
        {/* First Row */}
        <div className="row">
          <CustomerItem
            logoSrc={burgerKingLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Taha Anis"
            position="Executive Director"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
          <CustomerItem
            logoSrc={nandosLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Faiza Musawwar"
            position="GM Marketing"
            icons={[androidIcon, ]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
        </div>

        {/* Second Row */}
        <div className="row mt-5">
          <CustomerItem
            logoSrc={burgerKingLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Taha Anis"
            position="Executive Director"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
          <CustomerItem
            logoSrc={nandosLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Faiza Musawwar"
            position="GM Marketing"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
        </div>

        {/* Third Row */}
        <div className="row mt-5">
          <CustomerItem
            logoSrc={burgerKingLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Taha Anis"
            position="Executive Director"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
          {/* Placeholder for empty second column */}
          <div className="col-lg-6 px-3"></div>
        </div>

        {/* Fourth Row */}
        <div className="row mt-5">
          <CustomerItem
            logoSrc={burgerKingLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Taha Anis"
            position="Executive Director"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
          <CustomerItem
            logoSrc={nandosLogo}
            videoSrc="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=1&showinfo=0&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&start=30&end=60"
            name="Faiza Musawwar"
            position="GM Marketing"
            icons={[androidIcon]}
            quote="” The unified aspect of Blink just made our lives easier. To know that we this one channel where we can control our app and website “"
          />
        </div>
      </div>
    </section>
  );
};

const CustomerItem = ({ logoSrc, videoSrc, name, position, icons, quote }) => {
  return (
    <div className="col-lg-6 d-flex flex-column px-3">
      <div className="w-100 d-flex justify-content-center align-items-center">
        <img src={logoSrc} alt="" />
      </div>
      <div className="w-100 mt-4">
        <iframe
          title="customer-video"
          width="100%"
          height="377px"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
      <div className="w-100 mt-3 px-2 d-flex justify-content-between">
        <div className="d-flex flex-column">
          <h4 className="textColor2">{name}</h4>
          <h4 className="textColor2">{position}</h4>
        </div>
        <div>
          {icons.map((icon, index) => (
            <a key={index} href="/#">
              <img src={icon} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="w-100 mt-3">
        <p className="px-2">{quote}</p>
      </div>
    </div>
  );
};

export default CustomerFocus;
