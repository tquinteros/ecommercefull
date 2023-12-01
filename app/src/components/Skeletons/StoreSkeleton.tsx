import React from "react";
import ContentLoader from "react-content-loader"

// Loading animation

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-600 p-2 col-span-3 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-600" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-600 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-600 px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-600" />
      </div>
    </div>
  );
}

export function LoaderTest() {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={600}
      viewBox="0 0 500 600"
      backgroundColor="#b3b2b2"
      className="col-span-3 w-full h-full"
      foregroundColor="#ecebeb"
    >
      <rect x="3" y="418" rx="2" ry="2" width="140" height="10" />
      <rect x="3" y="400" rx="2" ry="2" width="140" height="10" />
      <rect x="-20" y="-11" rx="2" ry="2" width="500" height="600" />
    </ContentLoader>
  )

}


export default function ProductSkeleton() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 px-12">
        <LoaderTest />
        <LoaderTest />
        <LoaderTest />
        <LoaderTest />
        <LoaderTest />
      </div>
    </>
  );
}