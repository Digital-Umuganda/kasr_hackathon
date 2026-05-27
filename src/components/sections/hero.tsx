// Assets
import logo from "../../assets/logo.svg";

// Components
import Width from "../width";
import Title from "../title";

const Hero = () => {
  return (
    <Width className="bg-[#009263] sm:rounded-lg relative flex flex-col items-center overflow-hidden mb-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/waves.svg')] bg-cover bg-no-repeat opacity-35 bg-fixed"
      />
      <div className="z-10 xl:w-2/3 w-full flex flex-col items-center justify-center gap-5 mt-24 mb-16 px-4">
        <Title className="text-white">
          AfriVoices Automatic Speech Recognition Hackathon.
        </Title>
        <p className="text-white text-center w-5/6">
          AfriVoices is a multilingual speech hackathon designed to accelerate
          research and innovation in Automatic Speech Recognition (ASR) for
          select East African languages —{" "}
          <span className="font-bold">Swahili</span>,{" "}
          <span className="font-bold">Kikuyu (Gĩkũyũ)</span>,{" "}
          <span className="font-bold">Luo (Dholuo)</span>,{" "}
          <span className="font-bold">Somali</span>,{" "}
          <span className="font-bold">Maasai</span>, and{" "}
          <span className="font-bold">Kalenjin</span>.
        </p>
        <a
          href="#"
          className="bg-white text-[#009263] font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors mt-2"
        >
          Join Now
        </a>
      </div>
      <div className="z-10 w-full p-6 bg-white flex flex-wrap flex-row items-center justify-center gap-6">
        <p className="font-semibold text-gray-700">Organized by:</p>
        <img src={logo} alt="Digital Umuganda" className="h-8" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#009263] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>
          <span className="font-bold text-gray-800 text-lg">MCAAI</span>
        </div>
      </div>
    </Width>
  );
};

export default Hero;
