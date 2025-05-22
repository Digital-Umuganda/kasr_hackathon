// Components
import Title from "../title";

const Rules = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Hackathon Rules</Title>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-start">
          <Title className="text-2xl text-[#009263]">
            General Rules (apply to all tracks)
          </Title>
          <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
            <li className="text-justify">
              <span className="font-black">Team size</span>: 5 participants
              maximum.
            </li>
            <li className="text-justify">
              <span className="font-black">One leaderboard account</span>: per
              team.
            </li>
            <li className="text-justify">
              <span className="font-black">No manual transcription</span>: or
              human correction of test audio.
            </li>
            <li className="text-justify">
              All submitted <span className="font-black">code</span>,{" "}
              <span className="font-black">
                trained model checkpoints/weights
              </span>
              , and <span className="font-black">training scripts</span> must be
              made <span className="font-black">publicly available</span> (e.g.,
              in a GitHub repository) and released under a permissive
              open‑source license (Apache‑2.0, MIT, BSD‑3‑Clause, or MPL‑2.0).
            </li>
            <li className="text-justify">
              The <span className="font-black">top 5</span> teams per track must
              provide a short technical report;{" "}
              <span className="font-black">track winners</span> must publish a
              detailed blog post or workshop paper.
            </li>
            <li className="text-justify">
              Organizers may request{" "}
              <span className="font-black">reproducibility artifacts</span>{" "}
              (training logs, checkpoints, hardware specs).
            </li>
            <li className="text-justify">
              Any <span className="font-black">data or model cards</span>{" "}
              provided by organizers must accompany the final submission.
            </li>
          </ul>
        </div>
        <p>
          All three components must be publicly accessible for a team to be
          eligible for prizes.
        </p>
        <div className="flex flex-col gap-4 items-start">
          <Title className="text-2xl text-[#009263]">
            Track‑Specific Rules
          </Title>
          <div className="flex flex-col gap-4 items-start">
            <Title className="text-xl text-[#009263]">
              Track A – Small (500 hrs transcribed)
            </Title>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
              <li className="text-justify">
                <span className="font-black">Training data</span>: Teams may use
                only the 500 hrs transcribed corpus supplied for Track A.
              </li>
              <li className="text-justify">
                <span className="font-black">
                  External speech corpora: Not allowed —
                </span>{" "}
                no additional Kinyarwanda audio (labeled or unlabeled) may be
                used.
              </li>
              <li className="text-justify">
                <span className="font-black">Cross‑lingual transfe</span>:
                Allowed as in Track A.
              </li>
              <li className="text-justify">
                <span className="font-black">Training‑trace sharing</span> Teams
                must log experiments with{" "}
                <span className="font-black">Weights & Biases</span>,
                <span className="font-black">TensorBoard</span>, or an
                equivalent public experiment‑tracking tool and grant organizers
                read access to verify that only Track A data were used.
              </li>
              <li className="text-justify">
                <span className="font-black">Data augmentation</span>{" "}
                Recommended to keep GPU hours ≤ 150; teams exceeding this must
                disclose resource usage.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Title className="text-xl text-[#009263]">
              Track B – Medium (1000 hrs transcribed)
            </Title>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
              <li className="text-justify">
                <span className="font-black">Training data</span>: Teams may use
                <span className="font-black">only</span> the 1000 hrs
                transcribed corpus supplied for Track B.
              </li>
              <li className="text-justify">
                <span className="font-black">External speech corpora</span>: Not
                allowed.
              </li>
              <li className="text-justify">
                <span className="font-black">Cross‑lingual transfe</span>:
                Pre‑trained models on{" "}
                <span className="font-black">non‑Kinyarwanda languages</span>{" "}
                (e.g., wav2vec 2.0 English base) are permitted, but fine‑tuning
                must use only the Track A data.
              </li>
              <li className="text-justify">
                <span className="font-black">Training‑trace sharing</span> Teams
                must log experiments with{" "}
                <span className="font-black">Weights & Biases</span>,
                <span className="font-black">TensorBoard</span>, or an
                equivalent public experiment‑tracking tool and grant organizers
                read access to verify that only Track A data were used.
              </li>
              <li className="text-justify">
                <span className="font-black">Data augmentation</span> Allowed
                (speed perturbation, noise injection, SpecAugment, etc.) as long
                as it is derived solely from the Track A audio.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Title className="text-xl text-[#009263]">
              Track C – Large (1000 hrs transcribed + 1000 hrs unlabeled)
            </Title>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
              <li className="text-justify">
                <span className="font-black">Training data</span>: Teams must
                use the 1 000 hrs transcribed + 1000 hrs unlabeled audio
                supplied. Semi‑/self‑supervised training (pseudo‑labeling, SSL
                pre‑training) is encouraged.
              </li>
              <li className="text-justify">
                <span className="font-black">External open‑source data</span>:
                Allowed, provided it is{" "}
                <span className="font-black">publicly available</span> and
                licensed for research use (e.g., Common Voice ). All additional
                datasets must be listed in a{" "}
                <span className="text-[#009263]">data_sources.md</span> file.
              </li>
              <li className="text-justify">
                <span className="font-black">Private or paid datasets</span>:{" "}
                Prohibited.
              </li>
              <li className="text-justify">
                <span className="font-black">Model size disclosure</span> Teams
                must report total parameter count and inference real‑time factor
                (RTF) on 1 * A100 GPU.
              </li>
              <li className="text-justify">
                <span className="font-black">Compute budget</span> Recommended
                to keep GPU hours ≤ 400; disclose if higher.
              </li>
            </ul>
          </div>
          <Title className="text-2xl text-[#009263]">Submission Format</Title>
          <div className="flex flex-col gap-4 items-start">
            <p>Participants must submit:</p>
            <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
              <li className="text-justify">
                <span className="text-[#009263]">submission.zip</span>{" "}
                containing:
                <ul className="list-disc list-inside pl-4 flex flex-col gap-2">
                  <ul className="list-disc list-inside pl-8">
                    <li className="text-justify">
                      Plain text transcripts for the test set (one file per
                      audio or a consolidated{" "}
                      <span className="text-[#009263]">.tsv/.csv</span> )
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="text-justify">
                A URL link to their{" "}
                <span className="font-black">public GitHub repository</span>{" "}
                containing source code and instructions
              </li>
              <li className="text-justify">
                A URL link to a{" "}
                <span className="font-black">
                  technical blog post or workshop paper (PDF)
                </span>{" "}
                explaining their methodology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
