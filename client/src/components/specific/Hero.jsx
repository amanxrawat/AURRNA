const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/908184/pexels-photo-908184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
      className=" border-b  pb-20 pt-8 md:pb-10 md:pt-5 "
    >
      <div className=" p-10 ">
        <div className="items-center md:flex">
          <div className="md:w-[478px] bg-white/30 rounded-lg backdrop-blur-lg px-10">
            <h1 className="mt-6 bg-gradient-to-b from-black to-dark uppercase font-Corm bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              aurrna
            </h1>
            <p className="mt-6 pb-8 text-xl tracking-tight text-[#010d3E]">
              Where elegance shines through every piece. Explore our exquisite collection of handcrafted jewelry, designed to reflect your unique style and make every moment special.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
