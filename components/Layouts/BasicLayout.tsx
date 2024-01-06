import Sidebar from '@/components/Sidebar'
import Topbar from '../Topbar';
import { useState } from 'react';

export default function BasicLayout(props: any) {
    const [sidebarOn, setSidebarOn] = useState(false);

    return (
        <>
        <section className="lg:flex bg-[#181A20] z-10">
            <div className="lg:w-[20%] 2xl:w-[15%]">
                <Sidebar
                    
                    sidebarOn={sidebarOn}
                    setSidebarOn={setSidebarOn}
                    name={'bayu'}
                />
            </div>

            <section className="lg:w-[80%] lg:px-10 2xl:w-[85%]">
                <Topbar
                    home={props.home}
                    pageName={props.pageName}
                    setSidebarOn={setSidebarOn}
                    name={props.name}
                />
                {/* <div className="xl:flex">
                    <div className="2xl:w-3/4 xl:w-full">
                        <main>{children}</main>
                    </div>

                    <div className="2xl:w-1/4 hidden 2xl:block pl-10 2xl:px-10">
                        <Chat />
                    </div>
                </div> */}
            </section>
        </section>
    </>
    )
}