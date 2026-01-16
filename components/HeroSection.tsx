import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-body font-[firaCode]">
        <h1 className="text-[#C778DD] text-3xl font-semibold"><span className="text-white">Nilesh is a</span> web designer <span className="text-white">and</span><br/>front-end developer</h1>
        <p className="hero-desc mt-8">He crafts responsive websites where technologies <br /> meet creativity.</p>
        <div style={{ marginTop: 20 }}>
          <button className="border-2 h-[37px] w-[148px] border-[#C778DD] ">Contact me!!</button>
        </div>
      </div>

      <div className="relative" aria-hidden>
        <img src="outerline.svg " className="w-[140px] h-[140px] absolute top-[20%] left-[-6%] z-[-1] " alt="" />
        <img src="/man.png" className="" alt="Hero figure" />
        <img src="dot.svg" className="absolute bottom-18 h-[78px] w-[78px] right-0 " alt="" />
      <div  className="flex gap-2">

        <div className="w-10 h-10 bg-[#C778DD]"></div>
        <h1>Currently working on <span className="text-white">Portfolio</span></h1>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
