import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#A88864]/20 bg-[rgba(105,106,90,0.34)]">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout: Narrow content left, Visual composition right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <motion.p 
              className="text-[#EEE7D2]/60 text-xs md:text-sm uppercase tracking-[0.2em] mb-6 font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who we are
            </motion.p>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-12 font-light text-[#EEE7D2] tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Us
            </motion.h2>

            {/* Content Blocks with Generous Spacing */}
            <div className="space-y-10">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-base md:text-lg text-[#EEE7D2]/90 font-light leading-[1.8]">
                  Aura Spaces is a <span className="font-medium text-[#EEE7D2]">UK-based interior company</span> that designs <span className="font-medium text-[#EEE7D2]">smart-ready</span> kitchens, bedrooms, and living rooms for modern homes.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p className="text-base md:text-lg text-[#EEE7D2]/90 font-light leading-[1.8]">
                  We combine thoughtful design, <span className="font-medium text-[#EEE7D2]">clear pricing</span>, and whole-home planning delivered virtually or on-site, without the showroom overhead.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="text-base md:text-lg text-[#EEE7D2]/90 font-light leading-[1.8]">
                  By integrating smart energy monitoring with efficient interior design, Aura Spaces actively supports the UK's carbon reduction goals.
                </p>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#EEE7D2]/0 via-[#EEE7D2]/30 to-[#EEE7D2]/0 my-8"></div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-base md:text-lg text-[#EEE7D2]/90 font-light leading-[1.8]">
                  Founded to make quality interiors accessible, we're positioned between design-led British kitchens and scalable delivery — offering <span className="font-medium text-[#EEE7D2]">designed systems</span> that work for real <span className="font-medium text-[#EEE7D2]">UK homes</span>.
                </p>
              </motion.div>
            </div>

            {/* Secondary CTA */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-[#EEE7D2]/70 hover:text-[#D97A43] transition-colors duration-300 text-sm tracking-wide group"
              >
                <span>How we work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Vertical Divider - Desktop Only */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#EEE7D2]/20 to-transparent"></div>
          </div>

          {/* Right Column - Visual Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1762087577939-705379c7d869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHN0dWRpbyUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODAzMjM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Aura Spaces Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Second Element - Image or Color Panel */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-2/3 aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#696A5A]/40"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1581674662583-5e89b374fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3RzJTIwZGlzY3Vzc2luZyUyMGJsdWVwcmludHN8ZW58MXx8fHwxNzY4MDMyMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design Collaboration"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#696A5A]/30 to-transparent"></div>
              </motion.div>

              {/* Muted Color Panel for Added Depth */}
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 rounded-[16px] bg-[#EEE7D2]/10 backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              ></motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
