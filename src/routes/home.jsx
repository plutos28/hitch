import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div class="mx-4 my-20 grid grid-cols-12 gap-5">
        <div class="col-span-1">
        </div>
        <div class="col-span-3"></div>
        <div class="col-span-4">
            <p class="text-[14px] text-hitchSecondaryLabel">Week of August 12 to August 18</p>

            {/* <!-- Current Weight Card --> */}
            <div class="mt-6 border border-hitchBorder rounded-md">
                <p class="p-3 text-[14px] bg-[#EFEFF0] rounded-t-md">Yesterday's Weight <span class="text-[#3c3c43DB]">- August 8</span></p>
                <div class="pl-3 py-6">
                    <h1 class="text-[24px] font-bold">75.3 kg</h1>
                </div>
            </div>

            {/* <!-- Log today's weight form --> */}
            <h1 class="mt-8 text-[14px]">Log today's weight</h1>
            <form class="mt-4 grid grid-cols-4 gap-5" action="#" method="post">
                <input class="text-[12px] col-span-3 border border-hitchBorder rounded-md px-2 py-2" type="number" name="" placeholder="weight in kg" id=""></input>
                <button type="submit" class="flex justify-center items-center space-x-2 text-[14px] text-hitchBlue border border-hitchBlue rounded-md py-2">
                    <svg class="fill-hitchBlue" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                    <p>Log</p>
                </button>
             </form>
        </div>
        <div class="col-span-3"></div>
        <div class="col-span-1">
        </div>
    </div>
  )
}