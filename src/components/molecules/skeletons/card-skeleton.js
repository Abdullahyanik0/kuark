import { Skeleton } from "@mantine/core";

const CardSkeleton = ({ loading, count }) => {
  const arr = Array(count).fill("");

  return (
    !!loading && (
      <div className="w-full flex flex-wrap justify-center items-center gap-4 gap-y-16 pt-14 ">
        {arr?.map((_item, i) => (
          <div
            className="w-[600px] h-[200px] flex gap-8 justify-between  "
            key={i}
          >
            <Skeleton height={170} width={250} circle mb="xl" />
            <div className="w-8/12 ">
              <Skeleton height={10} radius="xl" />
              <Skeleton height={10} mt={48} width="80%" radius="xl" />
              <Skeleton height={10} mt={48} width="70%" radius="xl" />
              <Skeleton height={10} mt={24} width="50%" radius="xl" />
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default CardSkeleton;
