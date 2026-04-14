"use client";
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { FaPercent } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);
type CardRef = React.RefObject<HTMLDivElement | null>;

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null);

  const cardRefs: CardRef[] = [
    useRef<HTMLDivElement>(null), // [0] top-left card
    useRef<HTMLDivElement>(null), // [1] top-right card
    useRef<HTMLDivElement>(null), // [2] bottom-left card
    useRef<HTMLDivElement>(null), // [3] bottom-right card
  ];

  useGSAP(() => {
    if (!carContainerRef.current || !containerRef.current) return;



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        end: "+=700vh",
        scrub: 1.5,
        pin: true,
        invalidateOnRefresh: false,
        refreshPriority: 0,
      },
    });

    // Car slides out across full timeline
    tl.to(carContainerRef.current, { x: "100%", ease: "power1.inOut", duration: 1 }, 0);

    const fade = { opacity: 1, duration: 0.4, ease: "power2.out" };

    tl.to(cardRefs[0].current, fade, 0.20); // top-left  — first
    tl.to(cardRefs[2].current, fade, 0.30); // bottom-left — second
    tl.to(cardRefs[1].current, fade, 0.55); // top-right  — third
    tl.to(cardRefs[3].current, fade, 0.75); // bottom-right — last

  }, { scope: containerRef });

  return (
    <main className="w-full overflow-hidden">
      <section
        ref={containerRef}
        className="h-screen w-full grid grid-rows-3 overflow-hidden relative"
      >
        {/* Top Part */}
        <div className="relative overflow-hidden">

          <div
            ref={cardRefs[0]}
            className="
              absolute z-10
              top-1/2 -translate-y-1/2
              opacity-0
              right-[calc(50%-112px)] md:right-[calc(25%+140px)] lg:right-[calc(20%+150px)] 
            "
          >
            <Card bg="bg-yellow-300" value="58" description="Increase in pick up point use" />
          </div>

          <div
            ref={cardRefs[1]}
            className="
              absolute z-20
              top-1/2 -translate-y-1/2
              opacity-0
              right-4 md:right-[5%] lg:right-[8%]
            "
          >
            <Card bg="bg-gray-900" text="text-white" value="27" description="Increase in pick up point use" />
          </div>
        </div>

        {/* Car Animation */}
        <div className="bg-green-400 lg:max-h-52 self-center flex items-center justify-center relative overflow-hidden">
          <span className="text-[9vw] font-black whitespace-nowrap">WELCOME ITZFIZZ</span>
          <div ref={carContainerRef} className="absolute inset-0 bg-black ml-5">
            <Image
              src="/car.png"
              alt="Car"
              width={400}
              height={200}
              priority
              quality={75}
              className="h-full w-auto object-contain -translate-x-5 lg:-translate-x-20"
            />
          </div>
        </div>

        {/* Bottom Part */}
        <div className="relative overflow-hidden">
          <div
            ref={cardRefs[2]}
            className="
              absolute z-10
              top-1/2 -translate-y-1/2
              opacity-0
              right-[calc(50%-112px)] md:right-[calc(25%+140px)] lg:right-[calc(20%+150px)]
            "
          >
            <Card bg="bg-blue-300" value="23" description="Decreased in customer phone calls" />
          </div>

          <div
            ref={cardRefs[3]}
            className="
              absolute z-20
              top-1/2 -translate-y-1/2
              opacity-0
              right-4 md:right-[5%] lg:right-[8%]
            "
          >
            <Card bg="bg-orange-300" text="text-gray-700" value="40" description="Decreased in customer phone calls" />
          </div>
        </div>
      </section>
    </main>
  );
};

const Card = ({
  bg,
  text = "text-gray-900",
  value,
  description,
}: {
  bg: string;
  text?: string;
  value: string;
  description: string;
}) => {
  return (
    <div className={`${bg} ${text} p-5 rounded-xl flex flex-col justify-center shadow-lg min-w-52 md:min-w-60`}>
      <h1 className="text-6xl md:text-7xl font-bold flex items-end gap-1 leading-none">
        {value}<FaPercent size={36} className="mb-1" />
      </h1>
      <p className="text-sm mt-2 leading-snug">{description}</p>
    </div>
  );
};

export default Page;