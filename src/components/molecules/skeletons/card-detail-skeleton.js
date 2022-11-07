import { Skeleton } from "@mantine/core";


const CardDetailSkeleton = ({ loading }) => {
  return (
    !!loading && (
      <div className="flex justify-center  pt-16 w-full ">
        <div className="w-8/12 flex ">
          <Skeleton height={230} width={330} circle mb="xl" />
          <div className="w-8/12 m-12 ">
            <Skeleton height={10} radius="xl" />
            <Skeleton height={10} mt={48} width="80%" radius="xl" />
            <Skeleton height={10} mt={48} width="70%" radius="xl" />
            <Skeleton height={10} mt={24} width="50%" radius="xl" />
          </div>
        </div>
      </div>
    )
  );
};

export default CardDetailSkeleton;
