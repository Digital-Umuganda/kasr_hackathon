// Assets
import gates from "../../assets/gates.svg";

// Components
import Width from "../width";
import Title from "../title";

const Hero = () => {
  return (
    <Width className="h-[800px] bg-[#009263] sm:rounded-lg relative flex flex-col items-center overflow-hidden mb-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/waves.svg')] bg-cover bg-no-repeat opacity-35 bg-fixed"
      />
      <div className="z-10 xl:w-2/3 w-full flex flex-col items-center justify-center gap-5 md:mt-56 mt-40">
        <Title className="text-white">
          Kinyarwanda Automatic Speech Recognition Hackathon.
        </Title>
        <p className="text-white text-center w-5/6">
          Create robust ASR models capable of performing reliably across various
          domains (healthcare, education, agriculture, financial services, and
          government) and supporting a wide range of real-world use cases.
        </p>
      </div>
      <div className="z-10 absolute bottom-4 left-4 w-auto p-6 h-auto bg-white rounded gap-2 flex flex-row items-center">
        <p>Sponsored by:</p>
        <img src={gates} alt="gates" className="w-[150px]" />
      </div>
    </Width>
  );
};

export default Hero;
