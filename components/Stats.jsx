"use client"

import CountUp from "react-countup"

const fallbackStats = [
    { num: 3, text: "Years Building Software" },
    { num: 5, text: "Certifications & Bootcamps" },
    { num: 3, text: "Featured Impact Projects" },
    { num: 40, text: "Deployment Time Reduced (%)" },
    { num: 60, text: "Error Detection Improvement (%)" },
]

const Stats = ({ items }) => {
  const stats = items?.length ? items : fallbackStats;

  return (
    <section className="pt-2 pb-10 xl:pt-0 xl:pb-2">
        <div className="container mx-auto">
            <div className="mx-auto grid max-w-[90vw] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-none xl:grid-cols-5 xl:gap-3">
                {stats.map((item, index) => {
                    return (
                        <div 
                            className="flex items-center justify-center gap-3 xl:justify-start"
                            key={index}>
                            <CountUp 
                            end={item.num} 
                            duration={2.4}
                            delay={0.25}
                            className="text-4xl xl:text-5xl font-extrabold" 
                        />
                            <p className={`${item.text.length < 18 ? "max-w-[110px]" : "max-w-[150px]"} text-sm leading-snug text-white/80 xl:text-[13px]`}>
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats