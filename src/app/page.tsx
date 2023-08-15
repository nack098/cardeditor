"use client";

import React, { useState } from "react";
import Tiptap from "@/components/Tiptap";
import ColorCost from "@/components/ColorCost";
import Image from "next/image";
import { useToPng } from "@hugocxl/react-to-image";

type ColorCost = {
  orange: number;
  cyan: number;
  magenta: number;
  lime: number;
  any: number;
};

type Color = "orange" | "cyan" | "magenta" | "lime" | "any";

export default function Home() {
  const [image, setImage] = useState<any>(null);
  const [name, nameState] = useState<string>("");
  const [content, contentState] = useState<string>("<p>Description</p>");
  const [health, healthState] = useState<number>(0);
  const [power, powerState] = useState<number>(0);
  const [colorCost, setColorCost] = useState<ColorCost>({
    orange: 0,
    cyan: 0,
    magenta: 0,
    lime: 0,
    any: 0,
  });

  const [state, converToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess(data) {
      const link = document.createElement("a");
      link.href = data;
      link.download = `${name ? name : "name"}.png`;
      link.click();
    },
  });

  const updateCost = (color: Color, value: number) => {
    setColorCost({ ...colorCost, [color]: value });
  };

  return (
    <main className="flex flex-row min-h-screen items-center justify-evenly p-6">
      <div className="bg-zinc-100 rounded-3xl py-20 px-16 drop-shadow-xl">
        <div className="bg-white py-8 px-6 rounded-xl">
          <div>
            <h1>Brilliant Card Generator</h1>
            <div>
              <p>By Smart</p>
              <p> Maintain by Nakuya</p>
            </div>
          </div>
          <div className="pt-3">
            <h3>Image</h3>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </div>
          <div className="pt-3">
            <h3>Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                nameState(e.target.value);
              }}
              className="border-black border"
            />
          </div>
          <div className="pt-3">
            <h3>Description</h3>
            <Tiptap update={contentState} />
          </div>
          <div className="pt-3">
            <h3>Power/Health</h3>
            <div className="text-black">
              <input
                className="border border-black w-14 text-center"
                type="number"
                value={power}
                onChange={(e) => powerState(parseInt(e.currentTarget.value))}
                min="0"
              />
              <span className="font-bold text-xl my-3">&nbsp;/&nbsp;</span>
              <input
                className="border border-black w-14 text-center"
                type="number"
                value={health}
                onChange={(e) => healthState(parseInt(e.currentTarget.value))}
                min="0"
              />
            </div>
          </div>
          <div className="pt-3">
            <h3>ColorCost</h3>
            <div className="flex flex-col w-64">
              <div className="flex flex-row justify-between pt-3 drop-shadow-md">
                <div className="flex">
                  <div className="px-3 py-3 bg-zinc-100 inline " />
                  <input
                    type="number"
                    min="0"
                    className="w-9 ml-3"
                    value={colorCost.any}
                    onChange={(e) => {
                      updateCost("any", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
                <div className="flex">
                  <div className="px-3 py-3 bg-[#ADC200] inline" />
                  <input
                    type="number"
                    min="0"
                    className="w-9 ml-3"
                    value={colorCost.lime}
                    onChange={(e) => {
                      updateCost("lime", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between pt-3 drop-shadow-md">
                <div className="flex">
                  <div className="px-3 py-3 bg-[#7F00AB] inline" />
                  <input
                    type="number"
                    min="0"
                    className="w-9 ml-3"
                    value={colorCost.magenta}
                    onChange={(e) => {
                      updateCost("magenta", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
                <div className="flex">
                  <div className="px-3 py-3 bg-[#09B8B8] inline" />
                  <input
                    type="number"
                    min="0"
                    className="w-9 ml-3"
                    value={colorCost.cyan}
                    onChange={(e) => {
                      updateCost("cyan", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between pt-3 drop-shadow-md">
                <div className="flex">
                  <div className="px-3 py-3 bg-[#FF4821] inline" />
                  <input
                    type="number"
                    min="0"
                    className="w-9 ml-3"
                    value={colorCost.orange}
                    onChange={(e) => {
                      updateCost("orange", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={converToPng}
            className="border border-black px-3 py-1 mt-5 rounded-3xl bg-smart_lime hover:bg-smart_orange duration-300"
          >
            Download
          </button>
        </div>
      </div>
      <div className="bg-[#f7dae9] p-14 rounded-3xl drop-shadow-xl">
        <h1 className="my-2 underline">Preview</h1>
        <div
          className="bg-zinc-100 max-h-[782px] max-w-[500px] h-[782px] w-[500px] flex flex-col items-center overflow-hidden"
          ref={ref}
        >
          <div className="h-[60px] flex p-3 text-right w-full justify-end">
            <ColorCost colors={colorCost} />
          </div>
          {image ? (
            <Image
              src={image}
              height={1}
              width={1}
              alt="rekt"
              className="w-full h-[370px] overflow-hidden object-cover"
            />
          ) : (
            <div className="h-[370px] w-full" />
          )}
          <div className="h-[272px] overflow-hidden text-black">
            <h1 className="text-center text-4xl pt-3">
              {name ? name : "card name"}
            </h1>
            <div
              className="text-center pt-5"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <div className="w-full pr-10 text-right text-black">
            {health > 0 || power > 0 ? (
              <h1 className="text-5xl">{`${power}/${health}`}</h1>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
