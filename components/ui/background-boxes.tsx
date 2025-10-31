/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rowIds = useMemo(() => Array.from({ length: 150 }, (_, i) => `row-${i}`), []);
  const colIds = useMemo(() => Array.from({ length: 100 }, (_, j) => `col-${j}`), []);
  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "-top-1/4 -translate-x-1/2 -translate-y-1/2 absolute left-1/4 z-0 flex h-full w-full p-4",
        className,
      )}
      {...rest}>
      {rowIds.map((rowId, i) => (
        <motion.div key={rowId} className="relative h-8 w-16 border-slate-700 border-l">
          {colIds.map((colId, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`${rowId}-${colId}`}
              className="relative h-8 w-16 border-slate-700 border-t border-r">
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-left-[22px] -top-[14px] pointer-events-none absolute h-6 w-10 stroke-[1px] text-slate-700">
                  <title>Plus</title>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
