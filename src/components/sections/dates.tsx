import type { ColumnDef } from "@tanstack/react-table";

// Components
import Title from "../title";
import { DataTable } from "../table";

type Type = {
  date: string;
  milestone: string;
};

const columns: ColumnDef<Type>[] = [
  {
    header: "Milestone",
    accessorKey: "milestone",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
];

const Dates = () => {
  const data: Type[] = [
    {
      date: "June 1, 2025",
      milestone: "Hackathon Launch",
    },
    {
      date: "June 30, 2025",
      milestone: "Submission Deadline",
    },
    {
      date: "July 1–11, 2025",
      milestone: "Top 5 Review & Validation",
    },
    {
      date: "July 14, 2025",
      milestone: "Winners Announced",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <Title className="text-[#009263] text-4xl">
        Important Dates (Africa/Kigali, UTC+02)
      </Title>
      <div className="flex flex-col gap-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Dates;
