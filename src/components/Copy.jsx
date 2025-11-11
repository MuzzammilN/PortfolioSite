"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      let targets = [];
      let split;
      let isTextOnly = el.textContent.trim().length > 0 && el.childElementCount === 0;

      const init = () => {
        if (isTextOnly) {
          // ✅ Split text into lines
          split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
          });
          targets = split.lines;

          // set hidden start state for text
          gsap.set(targets, { yPercent: 100, opacity: 0 });
        } else {
          // ✅ For buttons/icons, just animate the whole element
          targets = [el];
          gsap.set(targets, { opacity: 0, y: 20 });
        }

        const animation = {
          yPercent: isTextOnly ? 0 : undefined,
          y: isTextOnly ? undefined : 0,
          opacity: 1,
          stagger: isTextOnly ? 0.1 : 0,
          delay,
          ease: "power2.out",
        };

        if (animateOnScroll) {
          gsap.to(targets, {
            ...animation,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        } else {
          gsap.to(targets, animation);
        }
      };

      // Wait for fonts to be ready before calling SplitText to avoid measurement warnings
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(init).catch(() => init());
      } else {
        // Fallback: run init immediately
        init();
      }

      return () => {
        // cleanup SplitText if it was created
        try {
          if (split && typeof split.revert === "function") split.revert();
        } catch (e) {
          // ignore cleanup errors
        }
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return React.cloneElement(React.Children.only(children), {
    ref: containerRef,
  });
}
