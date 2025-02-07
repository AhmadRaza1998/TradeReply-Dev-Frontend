import BannerSec from "@/Components/common/Home/BannerSec";
import AnswerTrades from "@/Components/common/Home/AnswerTrades";
import TradesTabs from "@/Components/common/Home/TradesTabs";
import OurMission from "@/Components/common/Home/OurMission";
import Testimonials from "@/Components/common/Home/Testimonials";
import HowitWorks from "@/Components/common/Home/HowitWorks";
import FeaturedResources from "@/Components/common/Home/FeaturedResources";
import LearningResources from "@/Components/common/Home/LearningResources";

export default function Home() {
  return (
    <div className="home" id="home-page">
      <BannerSec />
      <AnswerTrades />
      <TradesTabs />
      <section className="our_testimonial_sec">
        <OurMission />
        <Testimonials />
      </section>
      <HowitWorks />
      <LearningResources />
      <FeaturedResources />
    </div>
  );
}
