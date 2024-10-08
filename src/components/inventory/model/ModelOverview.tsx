
interface Prop {
  data: any;
}

export default function ModelOverview({ data }: Prop) {
  return (
    <div className="space-y-[16px]">
      <h2 className="text-[16px] font-semibold">Basic Information</h2>
      <section className="grid grid-cols-5 w-full space-x-[16px]">
        <section className="col-span-2 w-[100%] h-fit p-[16px] border-[#E9EAEB] space-y-[16px] border-[1px] rounded-md">
          <div className=" text-center py-[12px] bg-[#FBFBFB] border-[#E9EAEB] border-[1px] rounded-md gap-[8px]">
            <p className="text-[#777777B2] text-[12px]">TOTAL STOCK</p>
            <p className="text-[24px] font-semibold">{data.total}</p>
          </div>

          <div className="space-y-[16px]">
            <div className="flex justify-between">
              <span className="text-[12px] text-[#777777B2] font-bold">
                AVAILABLE
              </span>{' '}
              <span className="text-[13px] font-semibold">
                {data?.available}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[12px] text-[#777777B2] font-bold">
                ASSIGNED
              </span>{' '}
              <span className="text-[13px] font-semibold">
                {data?.assigned}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[12px] text-[#777777B2] font-bold">
                FAULTY
              </span>{' '}
              <span className="text-[13px] font-semibold">{data?.faulty}</span>
            </div>
          </div>
        </section>

        <section className=" col-span-3 p-[16px] space-y-[16px]">
          <div className="flex justify-between md:w-[90%] w-[100%]">
            <span className="text-[12px] text-[#777777B2] font-bold">
              MODEL NAME
            </span>{' '}
            <span className="text-[13px] font-semibold text-left w-[50%]">
              {data?.name}
            </span>
          </div>
          <div className="flex justify-between md:w-[90%] w-[100%]">
            <span className="text-[12px] text-[#777777B2] font-bold">
              MODEL NO
            </span>{' '}
            <span className="text-[13px] font-semibold text-left w-[50%]">
              {data?.id}
            </span>
          </div>
          <div className="flex justify-between md:w-[90%] w-[100%]">
            <span className="text-[12px] text-[#777777B2] font-bold">
              MANUFACTURER
            </span>{' '}
            <span className="text-[13px] font-semibold text-left w-[50%]">
              {data?.manufacturer}
            </span>
          </div>
          <div className="flex justify-between md:w-[90%] w-[100%]">
            <span className="text-[12px] text-[#777777B2] font-bold">
              AVAILABLE
            </span>{' '}
            <span className="text-[13px] font-semibold text-left w-[50%]">
              {data?.available}
            </span>
          </div>
          <div>
            <p className="text-[12px] text-[#777777B2] font-bold">
              DESCRIPTION
            </p>
            <p className="text-[13px] font-semibold text-left">
              {data?.comment}
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}