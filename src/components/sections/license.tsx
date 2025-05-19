// Components
import Title from "../title";

const License = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <Title className="text-[#009263] text-4xl">License</Title>
      <p className="text-justify">
        Data and evaluation scripts are available under{" "}
        <span className="font-black">
          Creative Commons Attribution 4.0 (CC BY 4.0)
        </span>
        . Hackathon participant code must be released{" "}
        <span className="font-black">
          under a permissive open‑source license
        </span>{" "}
        (Apache‑2.0, MIT, BSD‑3‑Clause, or MPL‑2.0)
      </p>
    </div>
  );
};

export default License;
