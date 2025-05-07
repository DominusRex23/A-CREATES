"use client";

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

interface Project {
  title: string;
  description: string;
  images: string[];
  category: string;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [portfolioEmblaRef, portfolioEmblaApi] = useEmblaCarousel();
  const [pricingEmblaRef, pricingEmblaApi] = useEmblaCarousel();
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);

  const scrollPrev = useCallback((api: EmblaCarouselType | undefined) => {
    if (api) api.scrollPrev();
  }, []);

  const scrollNext = useCallback((api: EmblaCarouselType | undefined) => {
    if (api) api.scrollNext();
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const homeSection = document.getElementById('home');
      
      // Show nav when scrolled past home section
      if (homeSection) {
        const homeHeight = homeSection.offsetHeight;
        setShowNav(scrollPosition > homeHeight * 0.8);
      }

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen scroll-smooth text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/logo 2.png"
                alt="A Creates Logo"
                width={90}
                height={90}
                className="w-100 h-100"
              />
            </div>
            <div className="flex space-x-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 sm:py-0 w-full">
        <div className="mb-6 sm:mb-10 relative sm:-top-10 w-full animate-fade-in">
          <Image
            src="/logo 2.png"
            alt="A Creates Logo"
            width={350}
            height={350}
            className="mx-auto w-[250px] sm:w-[350px] transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-8xl mb-4 font-light animate-slide-up">A CREATES</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center font-bold px-4 animate-slide-up-delay">
          Helping brands shine through bold design & creative storytelling <span className="sparkle-text"></span>
        </p>
        <a
          href="#services"
          className="group text-black px-6 sm:px-8 py-2 sm:py-1 rounded-full transition-all duration-500 relative sm:-bottom-10 flex items-center justify-center gap-2 bg-white hover:bg-gradient-to-r hover:from-[#0d5080] hover:via-[#402563] hover:to-[#c440b5] hover:text-white hover:opacity-90 hover:shadow-lg hover:scale-[1.02] animate-fade-in-delay"
        >
          Explore Services
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative -right-2 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      <hr className="border-white max-w-6xl mx-auto" />

      {/* About */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left transform transition-all duration-700 hover:translate-x-2">
            <h3 className="text-2xl font-semibold mb-4">About the Creator</h3>
            <p className="text-base sm:text-lg">
              A passionate designer with a keen eye for detail and a love for creative storytelling.
              With years of experience in the industry, she brings a unique perspective to every project,
              helping brands find their authentic voice through thoughtful design.
            </p>
          </div>
          <div className="text-center md:text-left transform transition-all duration-700 hover:-translate-x-2">
            <h3 className="text-2xl font-semibold mb-4">About A Creates</h3>
            <p className="text-base sm:text-lg">
              A Creates is a freelance studio that focuses on helping brands find their voice visually
              through branding, graphic design, and social media content creation. We believe in creating
              bold, memorable designs that tell your brand's story in the most compelling way.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white max-w-6xl mx-auto" />

      {/* Services */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center animate-fade-in">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { title: "Branding", desc: "Logos, brand kits, visual identity" },
            { title: "Graphic Design", desc: "Posters, packaging, prints, more" },
            { title: "Social Media", desc: "Content creation and layout design" },
          ].map((service, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-white max-w-6xl mx-auto" />

      

      {/* Portfolio */}
      <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center animate-fade-in">Portfolio</h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={portfolioEmblaRef}>
            <div className="flex">
              {[
                {
                  title: "Project 1",
                  description: "Brand identity design for a modern tech startup",
                  images: ["/PORTFOLIO/3.png"],
                  category: "Branding"
                },
                {
                  title: "Project 2",
                  description: "Social media campaign for a lifestyle brand",
                  images: ["/PORTFOLIO/4.png"],
                  category: "Social Media"
                },
                {
                  title: "Project 3",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/5.png"],
                  category: "Graphic Design"
                },
                {
                  title: "Project 4",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/6.png"],
                  category: "Graphic Design"
                },
                {
                  title: "Project 5",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/7.png"],
                  category: "Graphic Design"
                },
                { 
                  title: "Project 6",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/8.png"],
                  category: "Graphic Design"
                },
                {
                  title: "Project 7",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/9.png"],
                  category: "Graphic Design"
                },
                {
                  title: "Project 8",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/10.png"],
                  category: "Graphic Design"
                },
                {
                  title: "Project 9",
                  description: "Packaging design for a premium product line",
                  images: ["/PORTFOLIO/11.png"],
                  category: "Graphic Design"
                },
                
              ].map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-w-16 aspect-h-12 mb-6 relative overflow-hidden rounded-lg">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="rounded-lg object-contain w-full h-full transition-transform duration-700 hover:scale-105"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-black transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm transition-colors duration-300 hover:bg-gray-200">
                        {project.category}
                      </span>
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            onClick={() => scrollPrev(portfolioEmblaApi)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
            onClick={() => scrollNext(portfolioEmblaApi)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 animate-slide-up">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">{selectedProject.title}</h3>
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      setSelectedImageIndex(0);
                    }}
                    className="text-gray-500 hover:text-black"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Main Image Viewer */}
                <div className="relative mb-4">
                  <div className="aspect-w-16 aspect-h-12 relative">
                    <Image
                      src={selectedProject.images[selectedImageIndex]}
                      alt={`${selectedProject.title} - Image ${selectedImageIndex + 1}`}
                      width={1200}
                      height={900}
                      className="rounded-lg object-contain w-full h-full bg-gray-50"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  
                  {/* Image Navigation Buttons */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-4">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden ${
                        selectedImageIndex === index ? 'ring-2 ring-black' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      <hr className="border-white max-w-6xl mx-auto my-8" />

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Pricing Packages</h2>

        {/* Graphic Design Packages */}
        <div className="max-w-7xl mx-auto mb-20">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Graphic Design Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Basic",
                price: "₱4,499 / $89.99",
                features: [
                  "10 graphic design",
                  "1 revision",
                  "5 days turn around time"
                ]
              },
              {
                name: "Standard",
                price: "₱6,499 / $119.99",
                features: [
                  "15 graphic design",
                  "2 revisions",
                  "1 week turn around time"
                ]
              },
              {
                name: "Pro",
                price: "₱8,699 / $159.99 ",
                features: [
                  "20 graphic design",
                  "2 revisions",
                  "2 weeks turn around time",
                  "FREE: 2 designs"
                ]
              },
              {
                name: "Premium",
                price: "₱11,999 / $219.99",
                features: [
                  "30 graphic design",
                  "2 revisions",
                  "3 weeks turn around time",
                  "FREE: 4 designs"
                ]
              }
            ].map((pkg, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-xl h-full"
              >
                <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={feature.includes("FREE:") ? "font-bold" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SMM Packages */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Social Media Marketing Packages</h3>
          <div className="relative">
            <div className="overflow-hidden" ref={pricingEmblaRef}>
              <div className="flex">
                {/* First slide - 2x1 layout */}
                <div className="flex-[0_0_100%] min-w-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4">
                    {[
                      {
                        name: "Starter",
                        price: "₱3,999",
                        features: [
                          "8 Social media post",
                          "No caption",
                          "1 Revision",
                          "FREE: 2 designs"
                        ]
                      },
                      {
                        name: "Basic",
                        price: "₱6,499",
                        features: [
                          "10 Social media post",
                          "with caption",
                          "2 Story content",
                          "Content calendar",
                          "Content scheduling",
                          "1 Revision",
                          "FREE: 2 designs"
                        ]
                      }
                    ].map((pkg, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl h-full relative hover:-translate-y-1"
                      >
                        <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                        <p className="text-3xl font-extrabold mb-4">{pkg.price}</p>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className={feature.includes("FREE:") ? "font-bold" : ""}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full mt-6 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white">
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="max-w-4xl mx-auto mt-6 pt-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl relative hover:-translate-y-1">
                      <h4 className="text-xl font-bold mb-2">Standard</h4>
                      <p className="text-3xl font-extrabold mb-4">₱8,999</p>
                      <ul className="space-y-3">
                        {[
                          "10 social media post",
                          "with caption",
                          "5 story content",
                          "Content calendar",
                          "Content scheduling",
                          "2 revisions",
                          "FREE: 2 story content"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={feature.includes("FREE:") ? "font-bold" : ""}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full mt-6 bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second slide - 1x1 layout */}
                <div className="flex-[0_0_100%] min-w-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-4">
                    {[
                      {
                        name: "Pro",
                        price: "₱14,999",
                        features: [
                          "1 month",
                          "2 platforms (FB/IG)",
                          "15 Social media post",
                          "with caption",
                          "5 Story content",
                          "2 Video reels",
                          "Content calendar",
                          "Content scheduling",
                          "Analytics Report",
                          "Hashtag research",
                          "2 Revisions",
                          "FREE: 5 Story content"
                        ]
                      },
                      {
                        name: "Premium",
                        price: "₱19,999",
                        features: [
                          "1 month",
                          "2 platforms (FB/IG)",
                          "20 Social media post",
                          "with caption",
                          "10 Story content",
                          "2 Video reels",
                          "Content calendar",
                          "Content scheduling",
                          "Analytics Report",
                          "Hashtag Research",
                          "2 Revisions",
                          "FREE: 5 designs of your choice (post or story)"
                        ]
                      }
                    ].map((pkg, index) => (
                      <div 
                        key={index}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl h-full flex flex-col justify-between relative hover:-translate-y-1"
                      >
                        <div>
                          <h4 className="text-2xl font-bold mb-3">{pkg.name}</h4>
                          <p className="text-4xl font-extrabold mb-6">{pkg.price}</p>
                          <ul className="space-y-4">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className={`text-lg ${feature.includes("FREE:") ? "font-bold" : ""}`}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="w-full mt-8 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white">
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
              onClick={() => scrollPrev(pricingEmblaApi)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition"
              onClick={() => scrollNext(pricingEmblaApi)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <hr className="border-white max-w-6xl mx-auto" />

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in">Let's Collaborate!</h2>
        <p className="mb-6 text-base sm:text-lg animate-fade-in-delay">Slide into the inbox 😘 → <strong>acreates@studio.com</strong></p>
        <a 
          href="mailto:acreates@studio.com" 
          className="inline-block bg-white text-black px-6 py-3 rounded-full transition-all duration-500 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-lg animate-fade-in-delay-2"
        >
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
