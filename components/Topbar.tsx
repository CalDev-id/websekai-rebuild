import { useRef, useState } from "react";
import Image from "next/image";

import ImgLogo from "@/public/Images/Logo.png"
import WebsekaiLogo from "@/public/Images/websekai-logo.jpg"

const Topbar = (props: any) => {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    // const triggerDropdown = () => {
    //     if (dropdownOpen) {
    //         dropdownTarget.current.classList.remove("hidden");
    //     } else {
    //         dropdownTarget.current.classList.add("hidden");
    //     }
    //     setDropdownOpen(!dropdownOpen);
    // };

    return (
        <>
            <div className="w-full">
                <div className="bg-transparent fixed py-5 lg:py-8 z-10 w-full lg:static">
                    <div className="flex justify-between mx-5 lg:mx-0">
                    {props.home ? (
                            <div className="flex lg:hidden">
                            <Image src={ImgLogo}
                                alt=""
                                className="w-10 lg:hidden"
                                onClick={props.setSidebarOn.bind(null, true)}/>
                            <h1 className="self-center text-2xl font-bold text-white ml-3">{props.pageName}</h1>
                            </div>
                        ) : (
                            <div className="flex lg:hidden">
                            <a href="#" className="text-4xl text-white"><i className="bx bx-left-arrow-alt"></i></a>
                            <h1 className="self-center text-xl font-bold mb-2 text-white ml-3">{props.pageName}</h1>
                            </div>
                        )}

                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search movie, anime, genre"
                            className="rounded-full py-2 px-5 w-96  border-none hidden lg:block text-black bg-[#35383F] focus:outline-green-500"
                        />

                        <div className="flex self-center">
                            <span className="text-3xl text-white self-center mx-2 lg:hidden">
                                <i className="bx bx-search-alt-2"></i>
                            </span>

                            <p className="px-5 text-lg self-center font-semibold hidden lg:block">
                                Welcome, User
                            </p>
                            <Image src={WebsekaiLogo}
                                alt=""
                                className="w-14 rounded-full hidden lg:block p-1 border-white border-2"
                                />
                        </div>
                    </div>
                    <div
                        // ref={dropdownTarget}
                        className="bg-slate-600 hidden text-white rounded-xl float-right absolute z-10 right-10 mt-2"
                    >
                        <ul>
                            <li className="p-5 py-3">
                                <a href="#">Dashboard</a>
                            </li>
                            <li className="p-5 py-3">
                                <a href="#">Settings</a>
                            </li>
                            <a href="#" className="p-5 py-3">
                                <p>Sign out</p>
                            </a >
                        </ul>
                    </div>
                </div>
            </div>
            {/* <style jsx="true">
                {`
                    #search {
                        background-image: url("/images/search.png");
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-position: 95% 50%;
                    }
                `}
            </style> */}
        </>
    );
};

export default Topbar;