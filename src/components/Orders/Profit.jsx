import { TiArrowSortedUp } from "react-icons/ti";
import ProfitBar from "./ProfitBar";

export default function Profit() {
    return (
        <div className='w-[350px] xl:w-[450px] h-36 bg-primary rounded-lg flex justify-between 
        items-center'>

            <div className='p-3 flex flex-col gap-3'>
                <h5 className='text-sm'>Net Profit</h5>

                <h2 className='text-3xl font-bold'>$ 6759.25</h2>

                <div className='flex gap-1 items-center text-[#66ea4c] font-bold'>
                    <TiArrowSortedUp className='text-xl' />
                    <span className='text-sm'>3%</span>
                </div>
            </div>

            <div className='p-3 pr-10'>
                <ProfitBar value={70} />

                <div className='text-xs p-1 text-[gray]'>
                    Goal Completed
                </div>
            </div>

        </div>

    )
}
