import { useEffect } from "react";
import DOTS from "vanta/src/vanta.dots";

export const Vanta = () => {
  useEffect(() => {
    DOTS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      showLines: true,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff8820,
      color2: 0x8e37e0,
      size: 2.2,
      spacing: 27.0,
    });
  }, []);

  return (
    <div>
      <div className="bg" id="vanta"></div>
    </div>
  );
};
