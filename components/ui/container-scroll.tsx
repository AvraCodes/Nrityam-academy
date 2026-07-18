"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, m as motion, MotionValue, useSpring } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.92, 1] : [1.05, 1];
  };

  const rotate = useTransform(smoothProgress, [0.08, 0.42], isMobile ? [8, 0] : [20, 0]);
  const scale = useTransform(smoothProgress, [0.08, 0.42], scaleDimensions());
  const translate = useTransform(smoothProgress, [0.08, 0.42], isMobile ? [0, -40] : [0, -100]);

  return (
    <div
      className="h-[38rem] sm:h-[48rem] md:h-[64rem] flex items-center justify-center relative p-2 sm:p-4 md:p-10"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <div
        className="py-4 sm:py-6 md:py-12 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 10px 30px -10px rgba(0, 0, 0, 0.06), 0 20px 40px -15px rgba(249, 115, 22, 0.04), 0 40px 60px -20px rgba(0, 0, 0, 0.03)",
      }}
      className="max-w-5xl -mt-6 sm:-mt-10 md:-mt-12 mx-auto h-[24rem] sm:h-[30rem] md:h-[42rem] w-full border-2 sm:border-4 border-zinc-300 dark:border-zinc-800 p-1.5 sm:p-2 md:p-6 bg-zinc-200 dark:bg-zinc-900 rounded-[20px] sm:rounded-[24px] md:rounded-[30px] transition-colors duration-300"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#0a0a0f] md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
