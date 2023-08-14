"use client";

import React from "react";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Toolbar from "./Toolbar";

type Props = {
  update: React.Dispatch<React.SetStateAction<string>>;
};

const Tiptap: React.FC<Props> = ({ update }) => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, TextStyle, Color],
    content: "<p>Description</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      update(html);
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent
        className="border border-black w-[500px] p-5"
        editor={editor}
        autoFocus={true}
      />
    </>
  );
};

export default Tiptap;
