"use client";

import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArtArrowIcon, QuoteIcon } from "@/Components/img/svgIcons/SvgIcon"; 
import "../../../css/Home/Testimonials.scss";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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

  const Reviews = [
    {
      id: 1,
      title: "✅ Powerful Trade Builder",
      description:
        "No other platform allows traders to add detailed metrics while building a trade, with real-time calculations like a trading calculator."
    },
    {
      id: 2,
      title: "✅ Flexible Dashboards",
      description:
        "Traders can create multiple custom dashboards—one for tracking profits, another for losses, even one for stocks under $3 on Tuesdays—allowing for complete trading insights."
    },
    {
      id: 3,
      title: "✅ Accurate AutoSync",
      description:
        "Many platforms struggle with missed trades or broken imports. TradeReply’s AutoSync ensures trades are correctly pulled in—no manual fixes needed."
    },
    {
      id: 4,
      title: "✅ Custom Reports",
      description:
        "TradeReply allows traders to break down performance data in ways that help identify patterns and anomalies, making strategy refinement easy."
    },
    {
      id: 5,
      title: "✅ Instant Manual Edits",
      description:
        "Some platforms require constant refreshing after manual edits. TradeReply updates instantly, saving time and reducing frustration."
    },
    {
      id: 6,
      title: "✅ Clear Broker Support",
      description:
        "No guessing which brokers support AutoSync or manual imports. TradeReply makes this clear from the start, and the CSV importer works seamlessly."
    },
    {
      id: 7,
      title: "✅ Smart Trade Tagging",
      description:
        "A flexible tagging system allows traders to add custom labels to trades, making organization and review easier than ever."
    },
    {
      id: 8,
      title: "✅ Market Playback",
      description:
        "The Trade Replay feature provides a snapshot of exactly where the stock was at the time of trade entry and exit—giving traders valuable insight into their execution."
    },
    {
      id: 9,
      title: "✅ Real-Time Insights",
      description:
        "TradeReply lets you see key metrics instantly as you build a trade—stop loss, take profit, max risk, R:R, deviation, and more—without navigating away or breaking your flow."
    },
    {
      id: 10,
      title: "✅ Fast & Accurate",
      description:
        "TradeReply is built for speed, with no lag and correct date/time tracking to ensure every trade is recorded accurately."
    }
  ];

  return (
    <>
      <section className="testimonials_sec">
        <Container>
          <div className="testimonials_sec_content">
            <h3 className="d-inline-flex align-items-start">
              Why Traders Choose TradeReply{" "}
              <span className="ms-3">
                <ArtArrowIcon />
              </span>
            </h3>
            <p>User-Driven Features That Traders Trust, Rely On, and Love</p>
          </div>
          <div className="slider-container mt-4 mt-md-5">
            <Slider {...settings}>
              {Reviews?.map((item, index) => (
                <div className="testimonial_card" key={index}>
                  <span className="quoteIcon">
                    <QuoteIcon />
                  </span>
                  <p>
                    {item?.description}
                  </p>
                  <h3>- {item?.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
