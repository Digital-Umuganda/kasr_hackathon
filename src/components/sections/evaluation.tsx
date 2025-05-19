// Components
import Title from "../title";

const EvaluationAndLeaderboard = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">
        Evaluation & Leaderboard
      </Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          Participants will submit plain-text transcripts for the{" "}
          <span className="font-black">test</span> split. We will score
          submissions using the{" "}
          <span className="font-black">Word Error Rate (WER)</span> and{" "}
          <span className="font-black">Character Error Rate (CER)</span>
        </p>
        <p className="text-justify">
          We combine them into a single{" "}
          <span className="font-black">Overall Score</span>:
        </p>
        <p className="text-justify">
          <span className="font-black">CombinedError</span> = 0.4 × WER + 0.6 ×
          CER
        </p>
        <p className="text-justify">
          <span className="font-black">Score</span> = (1 –{" "}
          <span className="font-black">CombinedError</span>) × 100
        </p>
        <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
          <li className="text-justify">
            <span className="font-black">Rank</span>: Participants are ordered
            by descending Score (higher is better).
          </li>
          <li className="text-justify">
            <span className="font-black">Weighting</span>: 40 % emphasis on
            word-level accuracy, 60 % on character-level accuracy—to balance
            fine-grained orthographic precision with overall transcription
            correctness.
          </li>
          <li className="text-justify">
            Automated evaluation scripts run on a held‑out test set. The public
            leaderboard shows the best submission per team.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EvaluationAndLeaderboard;
