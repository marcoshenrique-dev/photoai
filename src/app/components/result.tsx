import { ButtonRotateBorder } from "@/src/components/ui";
import { IResult } from "./upload";

type IProps = {
  results: IResult[];
};

export function Result({ results }: IProps) {
  return (
    <section className="flex flex-col justify-start gap-4">
      <h1 className="font-bold text-white">Results</h1>
      <div className="border-dashed border-gray-500 border-2 backdrop-blur-lg bg-slate-900 opacity-80 p-16 flex items-center flex-col rounded-md">
        {results.map((item) => (
          <div key={item.label} className="mb-6">
            <p className="font-medium text-white mb-4">{item.label}</p>
            <div className="flex flex-row gap-2 items-center justify-center">
              <progress
                className="w-56 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-700 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"
                value={item.score * 100}
                max={100}
              ></progress>
              <p className="text-sm text-white">
                {Math.round(item.score * 100)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      <ButtonRotateBorder oncClick={() => window.location.reload()}>
        ⚡ Reset results
      </ButtonRotateBorder>
    </section>
  );
}
