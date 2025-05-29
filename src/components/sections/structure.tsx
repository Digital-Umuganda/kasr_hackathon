import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

// Assets
import folder from "../../assets/folder.svg";

type Type1 = {
  test: string;
  train: string;
  track: string;
  total: string;
  devtest: string;
  unlabeled: string;
};

type Type2 = {
  type: string;
  field: string;
  required: string;
  description: string;
};

const columns1: ColumnDef<Type1>[] = [
  {
    header: "Track",
    accessorKey: "track",
  },
  {
    accessorKey: "train",
    header: "Train (hrs)",
  },
  {
    accessorKey: "devtest",
    header: "Devtest (hrs)",
  },
  {
    accessorKey: "test",
    header: "Test (hrs) †",
  },
  {
    accessorKey: "unlabeled",
    header: "Unlabeled (hrs)",
  },
  {
    accessorKey: "total",
    header: "Total Audio (hrs)",
  },
];

const columns2: ColumnDef<Type2>[] = [
  {
    header: "Field",
    accessorKey: "field",
  },
  {
    header: "Required?",
    accessorKey: "required",
  },
  {
    header: "Data Type",
    accessorKey: "type",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
];

const Structure = () => {
  const data1: Type1[] = [
    {
      test: "25",
      train: "490",
      total: "540",
      devtest: "25",
      unlabeled: "-",
      track: "A — Small",
    },
    {
      test: "50",
      train: "980",
      devtest: "50",
      total: "1180",
      unlabeled: "-",
      track: "B — Medium",
    },
    {
      test: "50",
      train: "980",
      total: "2250",
      devtest: "50",
      unlabeled: "1170",
      track: "C — Large",
    },
  ];

  const data2: Type2[] = [
    {
      type: "string",
      required: "True",
      field: "voice_creator_id",
      description: "An id for the voice contributor",
    },
    {
      type: "string",
      required: "True",
      field: "image_path",
      description: "The path to the image file",
    },
    {
      type: "string",
      required: "True",
      field: "image_category",
      description: "One of the 5 categories of the dataset",
    },
    {
      type: "string",
      required: "False",
      field: "image_sub_category",
      description: "A subcategory of the image",
    },
    {
      type: "string",
      required: "True",
      field: "audio_path",
      description: "The path to the audio file",
    },
    {
      type: "string",
      required: "False",
      field: "transcription",
      description: "The  transcribed written sentence",
    },
    {
      field: "age",
      type: "string",
      required: "False",
      description: "The age range of the speaker",
    },
    {
      type: "string",
      field: "gender",
      required: "False",
      description: "The gender of the speaker (Male, Female, Unknown)",
    },
    {
      type: "string",
      required: "True",
      field: "project_name",
      description:
        "Name of the project (in this case it is afrivoice_kinyarwanda)",
    },
    {
      type: "string",
      field: "locale",
      required: "True",
      description:
        "The locale of the speaker (language_country_where_data_was_collected in )",
    },
    {
      type: "Int",
      field: "year",
      required: "True",
      description: "Year of the recording",
    },
    {
      field: "dialect",
      type: "string",
      required: "False",
      description: "The Language variant collected",
    },
    {
      type: "string",
      field: "location",
      required: "False",
      description:
        "The location of the contributor (smaller administrative unit to countries), this can be used to spot accents and specific terms depending on the location",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Dataset Structure</Title>
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          The dataset was collected through a{" "}
          <span className="font-black">crowd-sourcing methodology</span>. It
          consists of <span className="font-black">audio recordings</span>,{" "}
          <span className="font-black">images</span>, and a{" "}
          <span className="font-black">manifest</span>. Contributors were
          presented with images and asked to describe them by recording
          themselves speaking, with recordings ranging from{" "}
          <span className="font-black">10 to 30 seconds</span>.
        </p>
        <div className="flex items-start">
          <Title className="text-xl text-[#009263]">
            Dataset Sizes & Splits per Track
          </Title>
        </div>
        <DataTable columns={columns1} data={data1} />
        <p>
          † <span className="font-black">Test transcriptions are withheld</span>{" "}
          and used exclusively for leaderboard evaluation.
        </p>
        <p>Each track is delivered as:</p>
        <img src={folder} alt="Folder Structure" className="w-full" />
        <p>
          Text for the <span className="font-black">test</span> split is
          withheld. Speaker and domain tags enable domain‑robust training.
        </p>
        <DataTable columns={columns2} data={data2} />
      </div>
    </div>
  );
};

export default Structure;
