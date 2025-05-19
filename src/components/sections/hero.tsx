// Assets
import gates from "../../assets/gates.png";

// Components
import Width from "../width";
import Title from "../title";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Width className="h-[800px] bg-[#009263] rounded-lg relative flex flex-col items-center overflow-hidden mb-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/waves.svg')] bg-cover bg-no-repeat opacity-35 bg-fixed"
      />
      <div className="z-10 w-2/3 flex flex-col items-center justify-center gap-5 mt-56">
        <Title className="text-white">
          Kinyarwanda Automatic Speech Recognition Hackathon.
        </Title>
        <p className="text-white text-center w-5/6">
          Create robust ASR models capable of performing reliably across various
          domains (healthcare, education, agriculture, financial services, and
          government) and supporting a wide range of real-world use cases.
        </p>
        <Button className="w-[150px] bg-white text-[#009263]">Join Now</Button>
      </div>
      <div className="z-10 absolute bottom-4 left-4 w-auto p-6 h-auto bg-white rounded gap-6 flex flex-row items-center">
        <p>Sponsored by:</p>
        <img src={gates} alt="gates" className="w-[150px]" />
      </div>
    </Width>
  );
};

export default Hero;
