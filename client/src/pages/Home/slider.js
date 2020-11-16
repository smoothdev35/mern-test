import React, { useEffect } from "react";
import gsap from "gsap";

export default function Slider() {
  const slides = [
    {
      id: "1",
      value: "Feature 1",
    },
    {
      id: "2",
      value: "Feature 2",
    },
    {
      id: "3",
      value: "Feature 3",
    },
    {
      id: "4",
      value: "Feature 4",
    },
  ];
  const boxRef = React.useRef();
  React.useEffect(() => {
    //Get width.
    let baseWidth = boxRef.current.offsetWidth;
    //Position all items one after another (position:absolute in the css).
    gsap.set(".slider_slide", { x: (i) => i * baseWidth });
    //Get complete width with all slides out of screen.
    let wrapWidth = (slides.length - 1) * baseWidth;
    //Animate all items and use modifiers to reset all items that reach the end (left) to the other end of the carousel (right) for the infinite looping.
    let tl = gsap.timeline({ repeat: -1 }).pause();
    setTimeout(() => {
      tl.to(".slider_slide", {
        duration: 6,
        x: "-=" + (baseWidth + wrapWidth),
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-baseWidth, wrapWidth)),
        },
      }).play();

      //Following statements add several pauses to the timeline so the individual items stay in screen for 1 second before resuming the animation.
      tl.addPause(1.5, () => {
        setTimeout(() => {
          tl.play();
        }, 1500);
      });

      tl.addPause(3, () => {
        setTimeout(() => {
          tl.play();
        }, 1500);
      });

      tl.addPause(4.5, () => {
        setTimeout(() => {
          tl.play();
        }, 1500);
      });

      tl.addPause(6, () => {
        setTimeout(() => {
          tl.play();
        }, 1500);
      });
    }, 2000);
  }, []);
  return (
    <article id="slider" ref={boxRef}>
      <div className="slider_slide"></div>
      <div className="slider_slide"></div>
      <div className="slider_slide"></div>
      <div className="slider_slide"></div>
    </article>
  );
}
