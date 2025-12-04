import image_7f3ecd4a64954ba0b8d4d33764605ca253014126 from 'figma:asset/7f3ecd4a64954ba0b8d4d33764605ca253014126.png';
import image_e0926b9601f278920ad23316644c6254296a9968 from 'figma:asset/e0926b9601f278920ad23316644c6254296a9968.png';
import image_2a036ce49707a69d8efa6e173d287552eedef91b from 'figma:asset/2a036ce49707a69d8efa6e173d287552eedef91b.png';
import image_c4189cd37dc6a0c5914f5f4ee1554d775a23918b from 'figma:asset/c4189cd37dc6a0c5914f5f4ee1554d775a23918b.png';
import image_f8b8cc014364e45afb5ce0d5c0adc066d7d18c84 from 'figma:asset/f8b8cc014364e45afb5ce0d5c0adc066d7d18c84.png';
import image_85d83ce0f2ebe94799eec24e7832beda0845c58c from 'figma:asset/85d83ce0f2ebe94799eec24e7832beda0845c58c.png';
import image_7b99b217ea16fc0815f70e851b7800ddfbbd7ba1 from 'figma:asset/7b99b217ea16fc0815f70e851b7800ddfbbd7ba1.png';
import image_09b6b19cec23a52e96393fa25e601f2ce5f6fd2c from 'figma:asset/09b6b19cec23a52e96393fa25e601f2ce5f6fd2c.png';
import image_3d902d0998c3ea9d69e0520e214a0579528f9f72 from 'figma:asset/3d902d0998c3ea9d69e0520e214a0579528f9f72.png';
import image_56a4d89fac208259d19967d4e45fd5157accb53a from 'figma:asset/56a4d89fac208259d19967d4e45fd5157accb53a.png';
import image_7cb9459c0b969467d7e02991df8b0cc6a87c56e3 from 'figma:asset/7cb9459c0b969467d7e02991df8b0cc6a87c56e3.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Star, Home, Zap, Hammer, Phone, Mail, MapPin, ArrowRight, Menu, X, Leaf } from 'lucide-react'
import imgAuraSpacesLogoHWhite1 from "figma:asset/d81a78d002c1d513be105d537c89425276468218.png"
import billboardImage from 'figma:asset/98410cc6b5bed76fee3831ac1ad0ca4e9711ee3a.png'
import heroInteriorImage from 'figma:asset/1091b37e8125a9bf5409b309790eeb1e13e5c5ab.png'
import newHeroImage from 'figma:asset/339593a875d3263703c9f02a1193144b92b9b516.png'
import Heading from './imports/Heading1'

import React, { useState, useEffect } from "react";
// import your icons, Button, images, etc.

// 👇 your Apps Script URL

const ENDPOINT = "https://script.google.com/macros/s/AKfycbyHZ9F5ykPQNhLzRXroqz0VAkrYbsy0JNsEzhNM4QbirihWsJDAV2-Af0UUd2QXqE5PBA/exec";


export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const [mobileValue, setMobileValue] = useState("");
  const [status, setStatus] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 🔔 form submit + notification logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: if filled, ignore
    if ((fd.get("company") as string)?.length) return;

    const data = Object.fromEntries(fd.entries());

    setStatus("Sending…");
    setIsFormSubmitted(false);

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        // no headers or mode => simple request, we ignore the response
        body: JSON.stringify(data),
      });
    } catch (err) {
      // Most likely a CORS / opaque-response issue; data still usually arrives.
      console.warn("Submit error (request may still have been received):", err);
    }

    // UI: always show success after attempting to send
    setIsFormSubmitted(true);
    setStatus("");          // hide status text
    form.reset();
    setMobileValue("");     // reset controlled mobile field
  };

  // 🌫 scroll / navbar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400;

      // For hero heading fade
      if (scrollPosition <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        const opacity =
          1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(opacity);
      }

      // For navbar collapse (triggers after 100px scroll)
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#696A5A] text-[#EEE7D2]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className="backdrop-blur-xl backdrop-saturate-150 bg-[#696A5A]/70 rounded-3xl md:rounded-full border border-[#EEE7D2]/10 shadow-lg"
            style={{
              padding: isScrolled && !isNavHovered ? '8px 20px' : '16px 32px',
              maxWidth: isScrolled && !isNavHovered ? '140px' : '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <div 
              className="flex items-center justify-center"
              style={{
                justifyContent: isScrolled && !isNavHovered ? 'center' : 'space-between',
                transition: 'justify-content 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Logo */}
              <a href="#hero" className="cursor-pointer flex-shrink-0">
                <div 
                  className="bg-center bg-cover bg-no-repeat hover:opacity-80" 
                  style={{ 
                    backgroundImage: `url('${imgAuraSpacesLogoHWhite1}')`,
                    height: isScrolled && !isNavHovered ? '36px' : '48px',
                    width: isScrolled && !isNavHovered ? '82px' : '109px',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }} 
                />
              </a>
              
              {/* Desktop Navigation Links */}
              <div 
                className="hidden md:flex items-center gap-2 overflow-hidden"
                style={{
                  maxWidth: isScrolled && !isNavHovered ? '0px' : '600px',
                  opacity: isScrolled && !isNavHovered ? 0 : 1,
                  marginLeft: isScrolled && !isNavHovered ? '0px' : 'auto',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <a 
                  href="#about" 
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-4 py-2 whitespace-nowrap" 
                  style={{ fontFamily: 'Parkinsans, sans-serif' }}
                >
                  About Us
                </a>
                <a 
                  href="#services" 
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-4 py-2 whitespace-nowrap" 
                  style={{ fontFamily: 'Parkinsans, sans-serif' }}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-4 py-2 whitespace-nowrap" 
                  style={{ fontFamily: 'Parkinsans, sans-serif' }}
                >
                  Contact us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-[#EEE7D2] p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                style={{
                  opacity: isScrolled && !isNavHovered ? 0 : 1,
                  pointerEvents: isScrolled && !isNavHovered ? 'none' : 'auto',
                  transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-[#EEE7D2]/20">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#about" 
                    className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2" 
                    style={{ fontFamily: 'Parkinsans, sans-serif' }}
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </a>
                  <a 
                    href="#services" 
                    className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2" 
                    style={{ fontFamily: 'Parkinsans, sans-serif' }}
                    onClick={closeMobileMenu}
                  >
                    Services
                  </a>
                  <a 
                    href="#contact" 
                    className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2" 
                    style={{ fontFamily: 'Parkinsans, sans-serif' }}
                    onClick={closeMobileMenu}
                  >
                    Contact us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-12 mt-16 md:mt-0">
              {/* Heading */}
              <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[150px]">
                <Heading />
              </div>
              
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-[#EEE7D2] font-light leading-relaxed max-w-lg">
                  Where aesthetics meet intelligence. Transform your home with premium interior design, smart automation, and expert refurbishment services.
                </p>
              </div>
              
              <div>
                <Button 
                  size="lg" 
                  className="bg-[#D97A43] text-[#EEE7D2] hover:bg-[#D97A43]/90 transition-all duration-300 px-8 py-4 rounded-full group relative overflow-hidden"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#EEE7D2]/20">
                <div className="col-span-3 text-center mb-8">
                  <p className="text-lg md:text-xl text-[#EEE7D2] font-light italic" style={{ fontFamily: 'Parkinsans, sans-serif' }}>
                    "From smart to soulful - adding aura to your spaces"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={newHeroImage}
                  alt="Modern sage green living room design - Aura Spaces"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#696A5A]/40 via-[#696A5A]/20 to-transparent"></div>
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D97A43]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#87A39F]/20 rounded-full blur-3xl"></div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-[#EEE7D2]/10 backdrop-blur-md rounded-2xl p-6 border border-[#EEE7D2]/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#87A39F] flex items-center justify-center">
                    <Home className="w-6 h-6 text-[#EEE7D2]" />
                  </div>
                  <div>
                    <div className="text-lg font-light text-[#EEE7D2]" style={{ fontFamily: 'Parkinsans, sans-serif' }}>Smart Homes</div>
                    <div className="text-sm text-[#EEE7D2] font-light">Intelligent living</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-[#EEE7D2]/10 backdrop-blur-md rounded-2xl p-6 border border-[#EEE7D2]/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D97A43] flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#EEE7D2]" />
                  </div>
                  <div>
                    <div className="text-lg font-light text-[#EEE7D2]" style={{ fontFamily: 'Parkinsans, sans-serif' }}>Premium</div>
                    <div className="text-sm text-[#EEE7D2] font-light">Design quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-8 font-light text-[#EEE7D2]">Services</h2>
            <p className="text-xl text-[#EEE7D2] max-w-2xl mx-auto font-light text-[15px]">
              We craft exceptional living spaces that combine Smart Technology, Sustainable Design, and Modern Craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Interior Design */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-8">
                <ImageWithFallback 
                  src={image_85d83ce0f2ebe94799eec24e7832beda0845c58c}
                  alt="Interior Design Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl mb-4 font-light text-[#EEE7D2]">Interior Solutions</h3>
              <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px] text-left">
                Professional Interior Design services to transform your space with expert guidance on layout, styling, and selection.
              </p>
            </div>

            {/* Home Automation */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-8">
                <ImageWithFallback 
                  src={image_f8b8cc014364e45afb5ce0d5c0adc066d7d18c84}
                  alt="Home Automation Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl mb-4 font-light text-[#EEE7D2]">Home Automation</h3>
              <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px] text-left">
               Integrated smart home solutions for lighting, security, thermal comfort control, and entertainment curated for modern, comfortable living.
              </p>
            </div>

            {/* Home Refurbishment */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl mb-8">
                <ImageWithFallback 
                  src={image_7f3ecd4a64954ba0b8d4d33764605ca253014126}
                  alt="Home Refurbishment Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl mb-4 font-light text-[#EEE7D2]">Home Refurbishment</h3>
              <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px] text-justify text-left">
                Comprehensive home makeover, transforming your space from initial concept and design through to careful construction, finishing, and final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Core Values & Brand Positioning Section */}
      <section className="py-32 px-6 bg-[#87A39F]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-8 font-light text-[#EEE7D2]">What Makes Us Different</h2>
            <p className="text-[#EEE7D2] max-w-4xl mx-auto font-light leading-relaxed text-[15px]">
              Aura Spaces blends modern interior design with smart technology and energy efficient solution to create homes that are not only aesthetic but also aligned with the UK's net-zero goals.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-20">
      
            <div className="grid md:grid-cols-2 gap-12">
              {/* Smart Tech Integration */}
              <div className="bg-[#EEE7D2]/10 backdrop-blur-md rounded-3xl p-8 border border-[#EEE7D2]/20 transition-all duration-500 hover:bg-[#EEE7D2]/15 hover:border-[#D97A43]/40 hover:shadow-2xl hover:shadow-[#D97A43]/20 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#D97A43] flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-[#EEE7D2]" />
                </div>
                <h4 className="text-2xl mb-4 font-light text-[#EEE7D2]">Smart Tech Integration</h4>
                <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px]">
                  Every Aura interior comes with options for IoT devices, automation, and energy management systems seamlessly integrated into your living space.
                </p>
              </div>

              {/* The Aura App */}
              <div className="bg-[#EEE7D2]/10 backdrop-blur-md rounded-3xl p-8 border border-[#EEE7D2]/20 transition-all duration-500 hover:bg-[#EEE7D2]/15 hover:border-[#D97A43]/40 hover:shadow-2xl hover:shadow-[#D97A43]/20 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#87A39F] flex items-center justify-center mb-6">
                  <Hammer className="w-8 h-8 text-[#EEE7D2]" />
                </div>
                <h4 className="text-2xl mb-4 font-light text-[#EEE7D2]">Exceptional Workmanship</h4>
                <p className="text-[#EEE7D2] font-light leading-relaxed mb-4 text-[15px]">
                  Every Aura interior is crafted with precision and care by skilled professionals with years of experience in the UK interiors industry.
                </p>
                <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px]">
                  We take pride in delivering superior build quality, meticulous attention to detail, and finishes that stand the test of time.
                </p>
              </div>

              {/* Sustainable Materials & Design */}
              <div className="bg-[#EEE7D2]/10 backdrop-blur-md rounded-3xl p-8 border border-[#EEE7D2]/20 transition-all duration-500 hover:bg-[#EEE7D2]/15 hover:border-[#D97A43]/40 hover:shadow-2xl hover:shadow-[#D97A43]/20 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#A88864] flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-[#EEE7D2]" />
                </div>
                <h4 className="text-2xl mb-4 font-light text-[#EEE7D2]">Sustainable Materials & Design</h4>
                <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px]">
                  We aim to achieve interiors designed with eco-friendly materials and modular concepts to reduce waste and environmental impact.
                </p>
              </div>

              {/* Net Zero Contribution */}
              <div className="bg-[#EEE7D2]/10 backdrop-blur-md rounded-3xl p-8 border border-[#EEE7D2]/20 transition-all duration-500 hover:bg-[#EEE7D2]/15 hover:border-[#D97A43]/40 hover:shadow-2xl hover:shadow-[#D97A43]/20 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#696A5A] flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-[#EEE7D2]" />
                </div>
                <h4 className="text-2xl mb-4 font-light text-[#EEE7D2]">Net Zero Contribution</h4>
                <p className="text-[#EEE7D2] font-light leading-relaxed text-[15px]">
                  By integrating smart energy monitoring with efficient interior design, Aura Spaces actively supports the UK’s carbon reduction goals..
                </p>
              </div>
            </div>
          </div>

          {/* Brand Positioning */}
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#A88864]/20 bg-[rgba(105,106,90,0.34)]">
        <div className="max-w-6xl mx-auto">
          {/* Main About Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-8 font-light text-[#EEE7D2]">About Us</h2>
          </div>

          {/* About Us Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-center space-y-12">
              <div className="space-y-6">
                <p className="md:text-2xl text-[#EEE7D2] font-light leading-relaxed text-[16px]">
                  At Aura Spaces, we're a collective of designers, engineers, and tech enthusiasts driven by a shared passion for reimagining the way people live.
                </p>
                <p className="md:text-xl text-[#EEE7D2] font-light leading-relaxed text-[16px]">
                  Our mission is simple to make beautiful, intelligent, and sustainable interiors accessible to every home in the UK.
                </p>
              </div>
            
              <div className="space-y-6 pt-6 border-t border-[#EEE7D2]/20">
                <p className="md:text-xl text-[#EEE7D2] font-light leading-relaxed text-[16px]">
                  What began as a small idea to create sustainable, affordable, and elegant homes has evolved into a purpose-led journey to make sustainable living practical, attainable, and inspiring for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={image_e0926b9601f278920ad23316644c6254296a9968}
                  alt="Aura Spaces Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-8 font-light text-[#EEE7D2]">Get In Touch</h2>
            <p className="text-xl text-[#EEE7D2] max-w-2xl mx-auto font-light">
              Ready to transform your space? Contact us for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#87A39F] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#EEE7D2]" />
                </div>
                <div>
                  <h4 className="text-lg mb-2 font-light text-[#EEE7D2]">Phone</h4>
                  <p className="text-[#EEE7D2] font-light">+44 (0) 7721855790</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#87A39F] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#EEE7D2]" />
                </div>
                <div>
                  <h4 className="text-lg mb-2 font-light text-[#EEE7D2]">Email</h4>
                  <p className="text-[#EEE7D2] font-light">hello@auraspaces.co.uk</p>
                </div>
              </div>
            </div>

            <div className="bg-[#A88864]/30 rounded-3xl p-8 border border-[#EEE7D2]/20">
              {!isFormSubmitted ? (
                <>
                  <h3 className="text-2xl mb-8 font-light text-[#EEE7D2]">Request Consultation</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input 
                          name="firstName"
                          type="text" 
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] placeholder-[#EEE7D2] focus:border-[#D97A43] focus:outline-none transition-colors duration-300 font-light"
                          placeholder="First Name"
                          required
                          autoComplete="given-name"
                        />
                      </div>
                      <div>
                        <input 
                          name="lastName"
                          type="text" 
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] placeholder-[#EEE7D2] focus:border-[#D97A43] focus:outline-none transition-colors duration-300 font-light"
                          placeholder="Last Name"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <input 
                        name="email"
                        type="email" 
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] placeholder-[#EEE7D2] focus:border-[#D97A43] focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Email"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <input 
                        name="mobile"
                        type="tel" 
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] placeholder-[#EEE7D2] focus:border-[#D97A43] focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Phone Number"
                        pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?1\d{3}|\(?01\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?2\d{2}|\(?02\d{2}\)?)\s?\d{4}\s?\d{4}$|^(\+44\s?[1-9]\d{2,4}|\(?0[1-9]\d{2,4}\)?)\s?\d{6}$"
                        title="Please enter a valid UK phone number (e.g., 07123 456789 or +44 7123 456789)"
                        required
                        autoComplete="tel"
                        value={mobileValue}
                        onFocus={(e) => {
                          if (!e.target.value) {
                            setMobileValue('+44 ');
                          }
                        }}
                        onChange={(e) => {
                          let v = e.target.value;

                          // Always enforce +44 prefix
                          if (!v.startsWith('+44')) {
                            v = '+44 ';
                          }

                          // Strip everything except numbers to reformat cleanly
                          const digits = v.replace(/[^\d]/g, '').replace(/^44/, ''); 
                          // Now "digits" contains only the UK mobile digits after +44

                          // Limit to 10 digits after +44
                          const limited = digits.substring(0, 10);

                          // Format as +44 XXXX XXXXXX
                          let formatted = '+44 ';
                          if (limited.length > 0) {
                            formatted += limited.substring(0, 4);
                          }
                          if (limited.length > 4) {
                            formatted += ' ' + limited.substring(4);
                          }

                          setMobileValue(formatted);
                        }}
                            />
                          </div>

                    <div>
                      <select name="service" required className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] focus:border-[#D97A43] focus:outline-none transition-colors duration-300 font-light">
                        <option value="" className="bg-[#696A5A] text-[#EEE7D2]">Select a service</option>
                        <option value="interior-design" className="bg-[#696A5A] text-[#EEE7D2]">Interior Design</option>
                        <option value="home-automation" className="bg-[#696A5A] text-[#EEE7D2]">Home Automation</option>
                        <option value="refurbishment" className="bg-[#696A5A] text-[#EEE7D2]">Home Refurbishment</option>
                        <option value="multiple" className="bg-[#696A5A] text-[#EEE7D2]">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <textarea 
                      name="message"
                      required
                        rows={4}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#A88864] text-[#EEE7D2] placeholder-[#EEE7D2] focus:border-[#D97A43] focus:outline-none resize-none transition-colors duration-300 font-light"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>

                    <Button
                    type="submit"
                    className="w-full bg-[#D97A43] text-[#EEE7D2] hover:bg-[#D97A43]/90 
                              transition-all duration-300 rounded-full py-4 mt-8 cursor-pointer"
                  >
                    Send Message
                  </Button>

                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                  {/* Success Icon */}
                  <div className="w-20 h-20 rounded-full bg-[#87A39F] flex items-center justify-center mb-4">
                    <svg 
                      className="w-10 h-10 text-[#EEE7D2]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  
                  {/* Success Message */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-[#EEE7D2]">Thank You!</h3>
                    <p className="text-lg text-[#EEE7D2] font-light leading-relaxed max-w-md">
                      Thanks for submitting your details, our team will be getting in touch with you soon
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="pt-8">
                    <div className="w-16 h-1 bg-[#D97A43] rounded-full mx-auto"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#A88864]/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <a href="#hero" className="cursor-pointer">
                <div className="bg-center bg-cover bg-no-repeat h-12 w-[109px] hover:opacity-80 transition-opacity duration-300" style={{ backgroundImage: `url('${imgAuraSpacesLogoHWhite1}')` }} />
              </a>
            </div>
            <div className="flex items-center space-x-12">
              <a href="#services" className="text-[#EEE7D2] hover:text-[#D97A43] transition-colors duration-300">Services</a>
              <a href="#about" className="text-[#EEE7D2] hover:text-[#D97A43] transition-colors duration-300">About</a>
              <a href="#contact" className="text-[#EEE7D2] hover:text-[#D97A43] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#A88864]/30 text-center text-[#EEE7D2]">
            <p className="font-light mb-4">&copy; 2025 Aura Spaces. All rights reserved.</p>
            <p className="text-sm font-light opacity-80">
           Aura Spaces is the interior division of TSP London Limited, focused on delivering smart and sustainable interior solutions. TSP London Limited is registered in England and Wales (Company No. 14883402)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}