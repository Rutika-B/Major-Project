"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, Controller } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function Note() {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({});
  const submit = async ({ data }: any) => {
    console.log("Im here");
    console.log(data);
    // if (data) {
    const { data: any, error } = await supabase
      .from("notes")
      .insert([{ content: "sofjos", userId: "sodj", docId: "oisjo" }])
      .select();
    // }
  };
  return (
    <>
      <div className="flex items-center justify-center object-cover mx-3 mb-4 shadow-md shadow-gray-200 w-full">
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
          <Controller
            name="notes"
            control={control}
            render={({ field: { onChange } }) => (
              <Editor
                apiKey="lscbuvufo5mqp67pwfi8wy2nfufuqtjujq2jhame5q93rj0e"
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 400,
                  menubar: true,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
                onEditorChange={onChange}
              />
            )}
          ></Controller>
          <button type="submit" className="">
          </button>
        </form>
      </div>
    </>
  );
}

export default Note;
