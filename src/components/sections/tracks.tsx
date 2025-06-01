import type { ColumnDef } from "@tanstack/react-table";

// Commponents
import Title from "../title";
import { DataTable } from "../table";

type Type = {
  track: string;
  unlabeled: string;
  transcribed: string;
  restrictions: string;
};

const columns: ColumnDef<Type>[] = [
  {
    header: "Track",
    accessorKey: "track",
  },
  {
    accessorKey: "transcribed",
    header: "Transcribed Speech",
  },
  {
    accessorKey: "unlabeled",
    header: "Unlabeled Speech",
  },
  {
    header: "Restrictions",
    accessorKey: "restrictions",
  },
];

const Tracks = () => {
  const data: Type[] = [
    {
      unlabeled: "-",
      track: "A — Small",
      transcribed: "540 hrs",
      restrictions: "Must train only on the supplied data",
    },
    {
      unlabeled: "-",
      track: "B — Medium",
      transcribed: "1 180 hrs",
      restrictions: "Must train only on the supplied data",
    },
    {
      track: "C — Large",
      transcribed: "1 180 hrs",
      unlabeled: "1 170 hrs (unsupervised)",
      restrictions:
        "May combine the supplied data with publicly available open‑source datasets (e.g. Common Voice, BABEL)",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Track Overview</Title>
      <div className="flex flex-col gap-6">
        <DataTable columns={columns} data={data} />
        <div className="flex flex-col gap-2 items-start">
          <Title className="text-xl text-[#009263]">
            Track A – Small Dataset
          </Title>
          <p className="text-justify">
            Develop an ASR model using the 540 hrs transcribed corpus. Emphasis
            is on <span className="font-black">data efficiency</span> and
            creative augmentation.
          </p>
          <p>
            To join this track go this{" "}
            <a
              target="_blank"
              className="text-[#009263] underline decoration-dotted"
              href="https://www.kaggle.com/t/72712e5b79b74cdc96c69b43291a599e"
            >
              link
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Title className="text-xl text-[#009263]">
            Track B – Medium Dataset
          </Title>
          <p className="text-justify">
            Build a model with the full 1180hrs transcribed corpus. Focus on{" "}
            <span className="font-black">scalability</span> and{" "}
            <span className="font-black">architectural improvements</span>.
          </p>
          <p>
            To join this track go this{" "}
            <a
              target="_blank"
              className="text-[#009263] underline decoration-dotted"
              href="https://www.kaggle.com/t/cdb2b277147742b7a11dd170b9d2082a"
            >
              link
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Title className="text-xl text-[#009263]">
            Track C - Large Dataset
          </Title>
          <p className="text-justify">
            Leverage 1180hrs transcribed + 1170hrs unlabeled audio.
            Semi‑supervised or self‑supervised methods (e.g. wav2vec 2.0,
            Whisper fine‑tuning) are encouraged. External{" "}
            <span className="font-black">open‑source</span> speech data is
            allowed but must be disclosed.
          </p>
          <p>
            To join this track go this{" "}
            <a
              target="_blank"
              className="text-[#009263] underline decoration-dotted"
              href="https://www.kaggle.com/competitions/kinyarwanda-automatic-speech-recognition-track-c"
            >
              link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
