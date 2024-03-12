"use client";

import { ButtonRotateBorder } from "@/src/components/ui";

import { FormEvent, useState } from "react";
import { Result } from "./result";
import axios from "axios";

export type IResult = {
  label: string;
  score: number;
};

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<IResult[] | null>(null);

  async function sendImageToIA(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { data } = await axios.post(
      "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
      file,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    setResult(data);
  }

  return (
    <>
      {!result ? (
        <form
          className="p-4 flex items-center flex-col justify-center gap-4"
          onSubmit={sendImageToIA}
        >
          <input
            id="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            type="file"
            className="hidden"
          />
          <label htmlFor="file" className="cursor-pointer">
            <div className="border-dashed border-gray-500 border-2 backdrop-blur-lg bg-slate-900 opacity-80 p-20 flex items-center flex-col rounded-md">
              <img
                src={file ? URL.createObjectURL(file) : "./file-upload.svg"}
              />
              <h3 className="font-bold text-white mt-4">
                {file ? "File attached" : "Drag and drop your file here"}
              </h3>
              <p className="font-sm text-white">
                {file ? file.name : "5MB max file size"}
              </p>
            </div>
          </label>
          <ButtonRotateBorder>⚡ Start magic</ButtonRotateBorder>
        </form>
      ) : (
        <Result results={result} />
      )}
    </>
  );
}
