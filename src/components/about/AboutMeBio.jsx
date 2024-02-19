import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";

const AboutMeBio = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left text-xl text-primary-dark dark:text-ternary-light leading-relaxed">
        <p className="mb-4">
          Ahmed Najeebat Opeyemi is a dynamic professional based in Lagos State,
          Nigeria, specializing in software development, graphic design, and
          digital marketing. With a keen eye for detail and a knack for
          problem-solving, Ahmed excels in crafting cutting-edge software
          solutions, designing visually stunning graphics, and executing
          effective digital marketing campaigns.
        </p>
        <p className="mb-4">
          His diverse skill set and multidisciplinary approach enable him to
          deliver comprehensive and impactful solutions that drive success for
          businesses and organizations across various industries in the
          ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
};

export default AboutMeBio;
