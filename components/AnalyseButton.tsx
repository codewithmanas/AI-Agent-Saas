"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const AnalyseButton = () => {
    const status = useFormStatus();
  return (
    <div>
      <Button type="submit" disabled={status.pending} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-white">
        {status.pending ? "Analysing..." : "Analyse" }
      </Button>
    </div>
  );
};

export default AnalyseButton;
