import { useEffect } from "react";
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "All categories", content: () => <p>Content for Tab 1</p> },
    { id: 2, label: "UI/UX Design", content: () => <p>Content for Tab 2</p> },
    { id: 3, label: "Websites", content: () => <p>Content for Tab 3</p> },
    { id: 4, label: "Mobile apps", content: () => <p>Content for Tab 4</p> },
    { id: 5, label: "Blender 3D", content: () => <p>Content for Tab 5</p> },
    { id: 6, label: "Graphics design", content: () => <p>Content for Tab 6</p> },
    { id: 7, label: "Games", content: () => <p>Content for Tab 7</p> },
  ];
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);
  return (<div>
    <div className=' bg-white p-10 text-black'>
      <div className='relative group inline-block'>
        <h1 className='text-3xl py-4 font-bold hover:text-black hover:cursor-default mb-0'>Our projects</h1>
        <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-full'></div>
      </div>
      <p className="text-sm  brder-2 pt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
      <div className="lg:block hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/4 py-4 px-1 text-center text-sm border-b-2 ${
                  activeTab === tab.id
                    ? "border-black text-black font-bold hover:cursor-pointer"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:cursor-pointer focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                }`}
              >
                {tab.label}
              </p>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"} tab-content`}
            >
              {tab.content()}
            </div>
          ))}
        </div>
      </div>
    </div>
     {size < 1024 && ( <div className="">

    <div className="flex flex-row mb-8 ">
      <div className="w-1/3">
        <nav className="flex flex-col">
          {tabs.map((tab) => (
            <p
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-gray-500 font-bold py-2 px-4 cursor-pointer${
                activeTab === tab.id ? "text-black border-l-4 border-black bg-gray-100" : ""
              }`}
            >
              {tab.label}
            </p>
          ))}
        </nav>
      </div>
      <div className="w-2/3">
        <div className="">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block ml-8" : "hidden"} tab-content`}
            >
              {tab.content()}
            </div>
          ))}
        </div>
      </div>
    </div>
 
</div>
 )}




    </div>

  );
}

export default Tabs;
