"use client";
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useAppSelector } from "@/store/store";
type Props = {
  fileUrl: string;
};

export default function CVPreview({ fileUrl }: Props) {
  const theme = useAppSelector((state) => state.theme.theme);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        width: "915px",
        height: "725px",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "0 auto",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          theme={theme}
          defaultScale={1.3}
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
}
