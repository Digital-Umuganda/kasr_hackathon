// Components
import Title from "../title";

const Overview = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Overview</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          We present a large-scale automatic speech recognition (ASR) corpus for{" "}
          <span className="font-black">Kinyarwanda</span>, The dataset was
          created by <span className="font-black">Digital Umuganda</span> and
          made possible through funding from the{" "}
          <span className="font-black">Gates Foundation</span>. The data spans
          five high-impact domains — <span className="font-black">Health</span>,{" "}
          <span className="font-black">Government</span>,{" "}
          <span className="font-black">Financial Services</span>,{" "}
          <span className="font-black">Education</span>, and{" "}
          <span className="font-black">Agriculture</span> — to support robust
          ASR model development in both conversational and formal contexts.{" "}
        </p>
        <p className="text-justify">
          The challenge is structured around{" "}
          <span className="font-black">three progressive tracks</span> that
          cater to different resource and expertise levels:
        </p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            <span className="font-black">Track A – Small</span>: 500 hours of
            fully transcribed Kinyarwanda speech.
          </li>
          <li className="text-justify">
            <span className="font-black">Track B – Medium</span>: 1000 hours of
            fully transcribed Kinyarwanda speech.
          </li>
          <li className="text-justify">
            <span className="font-black">Track C – Large</span>: 1000 hours of
            transcribed speech plus 1000 hours of unlabeled Kinyarwanda audio.
          </li>
        </ul>
        <p className="text-justify">
          Across these tracks, participants will build, fine‑tune, and evaluate
          state‑of‑the‑art speech‑to‑text systems that advance accessibility,
          innovation, and research. The event welcomes researchers, students,
          startups, and hobbyists worldwide.
        </p>
      </div>
    </div>
  );
};

export default Overview;
