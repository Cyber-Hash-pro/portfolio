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
      <div className="inline-flex font-[firaCode] font-mixed items-center gap-3 border border-[#ffff] rounded-md px-10 py-2 mt-4">
        <div className="w-4 h-4 rounded-sm bg-[#C778DD]"></div>
        <p className="text-sm text-[#9AA1A6]">Currently working on <span className="text-white font-medium">Portfolio</span></p>
      </div>
      </div>
      <div className="mt-30  ml-30  w-150">
        <div className="relative ">
          <blockquote className="relative border border-[#9AA1A6] rounded-sm  py-4 pl-14 text-[#CDD6DD]">
            <span className="absolute left-10 bg-[#282C33] top-[-10px] text-4xl text-[#CDD6DD]">“</span>
            <p className="text-lg  leading-relaxed font-[firaCode]">The code may fail, but the coder doesn’t</p>
          </blockquote>
          <div className="absolute right-0  border border-[#9AA1A6] px-6 py-3 rounded-sm bg-transparent flex items-center">
            <span className="text-3xl text-[#CDD6DD] absolute top-[-11px] bg-[#282C33] mr-4">”</span>
            <span className="text-white font-[firaCode]">- Dr. Who</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
