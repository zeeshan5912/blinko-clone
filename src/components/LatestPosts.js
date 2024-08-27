import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Assuming you have custom CSS

// Import images
import img1 from '../images/pexels-photo-5849585-300x176.webp';
import img2 from '../images/Screenshot-2024-04-17-at-4.08.59-PM-300x199.png';
import img3 from '../images/Screenshot-2024-02-19-at-2.44.28-PM-300x165.png';
import img4 from '../images/Screenshot-2024-02-16-at-12.17.53-PM-300x200.png';

const posts = [
  {
    category: 'UNCATEGORIZED',
    imgSrc: img1,
    title: 'Financial Strategies for New Businesses Right from the Get-Go',
    link: '#'
  },
  {
    category: 'Restaurant Marketing',
    imgSrc: img2,
    title: 'Get a Taste of Success: Use Corporate Videos to Promote Your Food Business',
    link: '#'
  },
  {
    category: 'Food Delivery Apps',
    imgSrc: img3,
    title: 'The 5 Best Burger Joints in Lahore',
    link: '#'
  },
  {
    category: 'Restaurant Marketing',
    imgSrc: img4,
    title: 'How to Open a Restaurant: 5 Steps to Success',
    link: '#'
  }
];

const LatestPosts = () => {
  const settings = {
    infinite: true,
    speed: 1000, // Set speed to 1000 milliseconds for slower transition
    cssEase: "ease-in-out",
    centerPadding: '30px',
    slidesToShow: 4,
    prevArrow: <button className="slick-prev" aria-label="Previous" type="button">Previous</button>,
    nextArrow: <button className="slick-next" aria-label="Next" type="button">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="container-fluid px-0 latestPosts overflow-x-hidden">
      <div className="container pb-1">
        <h1 className="text-center">Latest Posts</h1>
        <div class="section-title-border mt-3"></div>
      </div>
      <div className="container px-5 pt-5 pb-4">
        <Slider {...settings} className="LPosts">
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <div className="postWrap">
                <div className="postTop">
                  {post.category}
                </div>
                <a href={post.link}>
                  <img className="w-100 h-100" src={post.imgSrc} alt={post.title} />
                </a>
                <div className="postBottom">
                  {post.title}
                </div>
              </div>   
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LatestPosts;
