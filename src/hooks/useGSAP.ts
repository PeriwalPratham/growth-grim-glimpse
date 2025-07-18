import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  return { gsap, ScrollTrigger };
};

export const useGSAPTimeline = () => {
  const timelineRef = useRef<gsap.core.Timeline>();
  
  useEffect(() => {
    timelineRef.current = gsap.timeline();
    
    return () => {
      timelineRef.current?.kill();
    };
  }, []);
  
  return timelineRef.current;
};

export const useGSAPScrollTrigger = (
  trigger: string | Element,
  animation: () => void,
  options?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animation();
    });

    return () => ctx.revert();
  }, [animation]);
};