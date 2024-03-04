import React from 'react';
import { TbPencilOff } from "react-icons/tb";
import { MdOutlineQueryStats } from "react-icons/md";
import { PiAlignBottomBold } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";








const BlogCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => {
  return (
    <>
      <article
        className="rounded-lg border border-gray-100 dark:border-gray-800 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
      >
        <span className="inline-block rounded bg-gray-700 p-5 text-white ">
          {/* Displaying icon */}

            {icon}
          
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {desc}
        </p>

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more

          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </article>
    </>
  )
}


const BlogList = () => {
  const blogData = [
    {
      id: 1,
      icon: <TbPencilOff />,
      title: 'Improve Your Risk Management',
      desc: 'Use the R-Multiple stat to stop losing money from poor risk management',
    },
    {
      id: 2,
      icon: <MdOutlineQueryStats />,
      title: 'Stop Trading With Hesitation',
      desc: 'Become a confident trader through the power of journaling. No more hesitation',
    },
    {
      id: 3,
      icon: <PiAlignBottomBold />,
      title: 'Recover After A Trading Loss',
      desc: 'Losses are normal. Use TradeZella to help you recover and come back stronger',
    },
    {
      id: 4,
      icon: <AiFillLike />,
      title: 'Discover Your Best & Worst Trading Days',
      desc: 'Focus on improving what causes you to lose money on your bad days',
    },
    {
      id: 5,
      icon: <MdOutlineAutoFixHigh />,
      title: 'Understand Your Best Trade Setup',
      desc: 'Use your best trade setup consistently to build a profitable trading system.',
    },
    {
      id: 6,
      icon: <FaScaleUnbalanced />,
      title: 'Scale Up Your Trading Fast',
      desc: 'Powerful journal to help you focus on what works and target what needs to be improved',
    },
  ];

  return (<>

    <div className="px-2 md:px-32 py-32 text-center">
      <h1 className="text-xl font-bold md:text-4xl mb-4">Features</h1>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">

        {blogData.map((blog) => (
          <BlogCard key={blog.id} icon={blog.icon} title={blog.title} desc={blog.desc} />
        ))}




      </div>
    </div>
  </>
  );
}

export default BlogList;
