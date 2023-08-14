"use client";

import { type Editor } from "@tiptap/react";
import React from "react";

type Props = {
  editor: Editor | null;
};

const Toolbar: React.FC<Props> = ({ editor }) => {
  if (!editor) return;
  return (
    <div className="flex flex-row justify-between">
      <div>
        <button
          className="font-bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </button>
        <button
          className="italic ml-1"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          I
        </button>
      </div>
      <div>
        <button
          className="mr-1"
          onClick={() => editor.chain().focus().setColor("#000000").run()}
        >
          <div className="p-[6px] rounded-full bg-black" />
        </button>
        <button
          className="mr-1"
          onClick={() => editor.chain().focus().setColor("#ADC200").run()}
        >
          <div className="p-[6px] rounded-full bg-[#ADC200]" />
        </button>
        <button
          className="mr-1"
          onClick={() => editor.chain().focus().setColor("#7F00AB").run()}
        >
          <div className="p-[6px] rounded-full bg-[#7F00AB]" />
        </button>
        <button
          className="mr-1"
          onClick={() => editor.chain().focus().setColor("#09B8B8").run()}
        >
          <div className="p-[6px] rounded-full bg-[#09B8B8]" />
        </button>
        <button
          className="mr-1"
          onClick={() => editor.chain().focus().setColor("#FF4821").run()}
        >
          <div className="p-[6px] rounded-full bg-[#FF4821]" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
