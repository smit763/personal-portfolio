import { Typewriter } from "react-simple-typewriter";
import { usetDetails } from "../../Utils/Details/UserDetails";

const Hero = () => {
  return (
    <div id="about" className="pb-10 pt-24 md:py-28 xl:py-32 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-sansSerif font-bold stroke-text min-h-[120px] sm:min-h-max">
        <Typewriter
          words={[usetDetails.userName]}
          loop={1} // Animation runs only once
          cursor={false} // Cursor is hidden after typing
          typeSpeed={70} // Speed of typing
        />
      </h1>
    </div>
  );
};

export default Hero;
