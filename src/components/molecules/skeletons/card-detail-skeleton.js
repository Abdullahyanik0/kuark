import { Skeleton } from "@mantine/core";
import React from "react";

const CardDetailSkeleton = () => {
  return (
    <div className="flex justify-center pt-12">
      <div>
        {" "}
        <div>
          {" "}
          <Skeleton height={50} circle mb="xl" />
        </div>
        <div className="w-[610px]">
          {" "}
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </div>
      </div>
    </div>
  );
};

export default CardDetailSkeleton;
