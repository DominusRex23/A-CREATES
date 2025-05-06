import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth text-white overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 sm:py-0 w-full">
        <div className="mb-6 sm:mb-10 relative sm:-top-10 w-full">
          <Image
            src="/logo 2.png"
            alt="A Creates Logo"
            width={350}
            height={350}
            className="mx-auto w-[250px] sm:w-[350px]"
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-8xl md:text-10xl mb-4 font-light">A CREATES</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center font-bold px-4">
          Helping brands shine through bold design & creative storytelling ✨
        </p>
        <a href="#services" className="text-white px-6 sm:px-8 py-2 sm:py-1 rounded-full hover:opacity-90 transition relative sm:-bottom-10 flex items-center justify-center gap-2" style={{background: 'linear-gradient(to right, #0d5080, #402563, #c440b5)'}}>
          Explore Services
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative -right-2">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
          </svg>
        </a>
      </section>

      <hr className="border-white w-300 mx-auto" />

      {/* About */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">About the Creator</h3>
            <p className="text-base sm:text-lg">
              A passionate designer with a keen eye for detail and a love for creative storytelling.
              With years of experience in the industry, she brings a unique perspective to every project,
              helping brands find their authentic voice through thoughtful design.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">About A Creates</h3>
            <p className="text-base sm:text-lg">
              A Creates is a freelance studio that focuses on helping brands find their voice visually
              through branding, graphic design, and social media content creation. We believe in creating
              bold, memorable designs that tell your brand's story in the most compelling way.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white w-300 mx-auto" />

      {/* Services */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { title: "Branding", desc: "Logos, brand kits, visual identity" },
            { title: "Graphic Design", desc: "Posters, packaging, prints, more" },
            { title: "Social Media", desc: "Content creation and layout design" },
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-white w-300 mx-auto" />

      {/* Portfolio */}
      <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Add your portfolio items here */}
        </div>
      </section>

      <hr className="border-white w-300 mx-auto" />

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Collaborate!</h2>
        <p className="mb-6 text-base sm:text-lg">Slide into the inbox 😘 → <strong>acreates@studio.com</strong></p>
        <a href="mailto:acreates@studio.com" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Say Hello 👋
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} A Creates. All rights reserved.
      </footer>
    </main>
  );
}
