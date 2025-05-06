import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth text-white">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-10 relative -top-10">
          <Image
            src="/logo 2.png"
            alt="A Creates Logo"
            width={350}
            height={350}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-8xl md:text-10xl mb-4 font-light">A CREATES</h1>
        <p className="text-xl md:text-2xl mb-8 text-center font-bold ">
          Helping brands shine through bold design & creative storytelling ✨
        </p>
        <a href="#services" className="text-white px-8 py-1 rounded-full hover:opacity-90 transition relative -bottom-10 flex items-center justify-center gap-2" style={{background: 'linear-gradient(to right, #0d5080, #402563, #c440b5)'}}>
          Explore Services
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative -right-2">
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
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About the Creator</h3>
            <p>
              A passionate designer with a keen eye for detail and a love for creative storytelling.
              With years of experience in the industry, she brings a unique perspective to every project,
              helping brands find their authentic voice through thoughtful design.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">About A Creates</h3>
            <p>
              A Creates is a freelance studio that focuses on helping brands find their voice visually
              through branding, graphic design, and social media content creation. We believe in creating
              bold, memorable designs that tell your brand's story in the most compelling way.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white w-300 mx-auto" />

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add your portfolio items here */}
        </div>
      </section>

      <hr className="border-white w-300 mx-auto" />


      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Collaborate!</h2>
        <p className="mb-6">Slide into the inbox 😘 → <strong>acreates@studio.com</strong></p>
        <a href="mailto:acreates@studio.com" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
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
