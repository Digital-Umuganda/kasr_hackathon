import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

type Type = {
  track: string;
  prize: string;
};

const columns: ColumnDef<Type>[] = [
  {
    header: "Track",
    accessorKey: "track",
  },
  {
    accessorKey: "prize",
    header: "Prize 🥇 1st Place",
  },
];

const Prizes = () => {
  const prizes: Type[] = [
    {
      track: "A",
      prize: "1,000 USD",
    },
    {
      track: "B",
      prize: "1,000 USD",
    },
    {
      track: "C",
      prize: "1,000 USD",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">Prizes</Title>
      <div className="flex flex-col gap-4">
        <p>
          For each track, the <span className="font-black">top 5</span>{" "}
          participants will be shortlisted based on their leaderboard scores and
          submitted materials. Following a manual reproducibility and quality
          review,{" "}
          <span className="font-black">
            only the 1st‑place winner in each track
          </span>{" "}
          will be selected.
        </p>
        <DataTable columns={columns} data={prizes} />
      </div>
    </div>
  );
};

export default Prizes;
