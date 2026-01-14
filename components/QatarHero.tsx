'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { ArrowRight, Globe, TrendingUp } from 'lucide-react';

const QatarHero = () => {
  const videoSrc = '/qatarVideo.mp4';
  const backgroundSrc = '/videoBackground.jpg';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative bg-black'>
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc={videoSrc}
        bgImageSrc={backgroundSrc}
        title='Elite Edge'
        date='QATAR'
        scrollToExpand='SCROLL TO EXPERIENCE'
        textBlend={true}
      >
        <div className='max-w-5xl mx-auto'>
          {/* Glass Card Container */}
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <h2 className='text-4xl md:text-5xl font-bold mb-8 text-white text-center tracking-tight'>
                Bridging Excellence <span className="text-blue-400">Across Borders</span>
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-white/90'>
                <div className='space-y-4'>
                  <p className='text-lg leading-relaxed font-light text-gray-200'>
                    At Elite Edge, we embody the spirit of Qatar's visionary growth. 
                    We bring world-class expertise to local markets, ensuring that 
                    every partnership is built on a foundation of trust, excellence, 
                    and forward-thinking strategies.
                  </p>
                  <div className='flex items-center gap-3 text-blue-300 pt-2'>
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Globe className='w-6 h-6' />
                    </div>
                    <span className='font-semibold tracking-wide'>Global Reach, Local Impact</span>
                  </div>
                </div>

                <div className='space-y-4'>
                  <p className='text-lg leading-relaxed font-light text-gray-200'>
                    Our tailored solutions empower businesses to thrive in dynamic 
                    environments. From staffing to operational optimization, we 
                    leverage cutting-edge practices to drive sustainable success 
                    for our clients in the region and beyond.
                  </p>
                  <div className='flex items-center gap-3 text-blue-300 pt-2'>
                     <div className="p-2 bg-blue-500/20 rounded-lg">
                        <TrendingUp className='w-6 h-6' />
                     </div>
                    <span className='font-semibold tracking-wide'>Accelerating Growth</span>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default QatarHero;
