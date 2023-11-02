import BannerSvg from '../../../assets/banner.svg';

function Banner() {
  return (
    <section className="mt-24 flex flex-col">
      <div className="flex items-center justify-between mb-32">
        <div className="flex flex-col">
          <h1 className="text-neutral-d_grey mr-10">
            Lessons and insights <br />
          </h1>
          <h1 className="text-primary">from 8 years</h1>
          <span className="text-neutral-grey text-body_regular2 mt-4">
            Where to grow your business as a photographer: site or social media?
          </span>

          <button className="bg-primary px-5 py-2 text-neutral-white rounded w-32 mt-8 text-body_medium2">
            Register
          </button>
        </div>

        <img src={BannerSvg} alt="banner" />
      </div>

      <div className="flex items-center justify-center space-x-2">
        <div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-primary opacity-30"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-primary opacity-30"></div>
      </div>
    </section>
  );
}

export default Banner;
