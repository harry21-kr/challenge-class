"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

const CreateDealPage = () => {
  const [content, setContent] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);

  const handleClickCreate = async () => {
    if (!img) return;

    const extension = img.name.split(".").slice(-1)[0];
    const filename = nanoid() + "." + extension;

    const res = await supabase.storage
      .from("deals")
      .upload(`/${filename}`, img);

    if (!res.data) return;

    const imgURL =
      "https://xzinypinhazkqlgfumfn.supabase.co/storage/v1/object/public/" +
      res.data?.fullPath;

    await supabase.from("deals").insert({ content, imgURL });
  };

  return (
    <Page title="판매글 작성하기">
      <Input
        label="판매글 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="대표 이미지"
        type="file"
        onChange={(e) => setImg(e.target.files?.[0] || null)}
      />
      <Button onClick={handleClickCreate}>작성하기</Button>
    </Page>
  );
};

export default CreateDealPage;
