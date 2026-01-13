'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 1. Track scroll progress of the TALL container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // 2. Smooth the progress with a spring for that "heavy", luxurious feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
    mass: 0.5
  });

  // 3. Define animation phases
  // Phase 1: Expansion (0 - 0.5 progress)
  // Phase 2: Hold/Reading (0.5 - 0.8 progress)
  // Phase 3: Exit/Fade (0.8 - 1.0 progress)
  
  const widthProgress = useTransform(smoothProgress, [0, 0.4], [0, 1]); // Expands quickly
  
  // Dimensions
  // Starts small (300px) and expands to nearly full width (95vw or larger)
  const initialWidth = 350;
  const initialHeight = 450;
  
  const rawMediaWidth = useTransform(widthProgress, [0, 1], [initialWidth, isMobile ? 800 : 1800]); 
  const rawMediaHeight = useTransform(widthProgress, [0, 1], [initialHeight, isMobile ? 600 : 1100]);
  
  // Parallax for Background Image (moves slower than scroll)
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  
  // Text Animations
  const textTranslateX = useTransform(widthProgress, [0, 1], [0, isMobile ? 120 : 200]);
  const titleOpacity = useTransform(widthProgress, [0, 0.2], [1, 0]); // Title fades out as it expands
  
  // Inner Content Opacity (Start showing after expansion is mostly done)
  const contentOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.4, 0.6], [50, 0]); // Slight slide-up

  // Overlay Opacity
  const overlayOpacity = useTransform(smoothProgress, [0.2, 0.5], [0.6, 0.2]); // Lighten overlay as it gets big

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='relative h-[300vh] w-full' // Very tall container to allow pinning
    >
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center bg-black">
        
        {/* Background Image with Parallax */}
        <motion.div
            className='absolute inset-0 z-0'
            style={{ y: bgY, scale: 1.1 }} // Scale up slightly to avoid edges during parallax
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              fill
              className='object-cover opacity-60'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80' />
        </motion.div>

        {/* Expanding Media Container */}
        <motion.div
          className='relative z-10 overflow-hidden shadow-2xl border border-white/10'
          style={{
            width: rawMediaWidth,
            height: rawMediaHeight,
            maxWidth: '95vw',
            maxHeight: '90vh',
            borderRadius: 24, // Fixed border radius
            boxShadow: '0px 20px 80px -10px rgba(0, 0, 0, 0.6)', // Richer shadow
          }}
        >
          {mediaType === 'video' ? (
              <div className='relative w-full h-full pointer-events-none'>
                 {mediaSrc.includes('youtube.com') ? (
                       <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full object-cover'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                 ) : (
                    <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover'
                    />
                 )}
                 {/* Dark Overlay on Video */}
                <motion.div
                  className='absolute inset-0 bg-black'
                  style={{ opacity: overlayOpacity }}
                />
              </div>
          ) : (
             <div className='relative w-full h-full'>
                <Image
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  fill
                  className='object-cover'
                />
                 {/* Dark Overlay on Image */}
                <motion.div
                  className='absolute inset-0 bg-black'
                  style={{ opacity: overlayOpacity }}
                />
             </div>
          )}

           {/* Initial Floating Info Text (Fades out) */}
           <motion.div 
            className='absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4'
            style={{ opacity: titleOpacity }}
           >
                  {date && (
                    <p className='text-xl md:text-2xl text-blue-200 mb-2 font-light tracking-wide'>
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p className='text-sm md:text-base text-white/80 font-medium tracking-widest uppercase'>
                      {scrollToExpand}
                    </p>
                  )}
           </motion.div>
        </motion.div>


         {/* Main Title (Also fades out/moves) */}
         <motion.div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-3 z-20 pointer-events-none w-full px-4 ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
            }`}
             style={{ opacity: titleOpacity }}
          >
             <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter'>
               {firstWord}
            </h2>
            <h2 className='text-5xl md:text-7xl lg:text-8xl font-bold text-white/50 tracking-tighter'>
               {restOfTitle}
            </h2>
         </motion.div>


         {/* Content that appears after expansion */}
         <motion.div
             className='absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none' 
             // pointer-events-none on container, auto on children if needed
             style={{ opacity: contentOpacity, y: contentY }}
         >
              <div className="container mx-auto px-4 md:px-8 pointer-events-auto">
                 {children}
              </div>
         </motion.div>

      </div>
    </div>
  );
};

export default ScrollExpandMedia;
