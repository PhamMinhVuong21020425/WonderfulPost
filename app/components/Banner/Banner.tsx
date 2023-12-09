"use client"
import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';


const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center pb-14">
                        <div className="text-4xl font-bold tracking-tight text-gray-950 sm:text-75px md:4px">
                            Magic Post
                        </div>
                        <p className="mt-2 text-lg leading-8 text-black">
                            Services for fast delivery post office.
                        </p>
                    </div>


                    {/* DROPDOWN BUTTONS */}


                    <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            <div className="col-span-3">
                                <Dropdownone />
                            </div>
                            <div className="col-span-3">
                                <Dropdowntwo />
                            </div>
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                <button className="bg-violet-950 w-full hover:bg-violet-900 text-white font-bold py-4 px-3 rounded">
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Banner;
