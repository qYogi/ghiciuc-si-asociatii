"use client";
import dynamic from "next/dynamic";

const Maps = dynamic(
  () => import("@/app/_components/Map/Map").then((mod) => mod.default),
  {
    ssr: false, // Disable SSR, valid here since this is a Client Component
    loading: () => (
      <div className="h-[50vh] w-full bg-gray-200 animate-pulse">
        Loading Map...
      </div>
    ),
  },
);

// Wrapper component
export const MapWrapper = () => {
  return (
    <div className="border-2 border-muted shadow-xl overflow-hidden">
      <Maps />
    </div>
  );
};
