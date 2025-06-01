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
            <a
              target="_blank"
              className="font-black underline decoration-dashed cursor-pointer text-[#009263]"
              href="https://www.kaggle.com/t/72712e5b79b74cdc96c69b43291a599e"
            >
              Track A – Small
            </a>
            : 540 hours of fully transcribed Kinyarwanda speech.
          </li>
          <li className="text-justify">
            <a
              target="_blank"
              className="font-black underline decoration-dashed cursor-pointer text-[#009263]"
              href="https://www.kaggle.com/t/cdb2b277147742b7a11dd170b9d2082a"
            >
              Track B – Medium
            </a>
            : 1180 hours of fully transcribed Kinyarwanda speech.
          </li>
          <li className="text-justify">
            <a
              target="_blank"
              className="font-black underline decoration-dashed cursor-pointer text-[#009263]"
              href="https://www.kaggle.com/competitions/kinyarwanda-automatic-speech-recognition-track-c"
            >
              Track C – Large
            </a>
            : 1180 hours of transcribed speech plus 1170 hours of unlabeled
            Kinyarwanda audio.
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
