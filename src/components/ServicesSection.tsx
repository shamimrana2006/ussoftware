"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Globe2, Code2, Megaphone, Users2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      id: "webDev",
      icon: <Globe2 size={24} className="text-white" />,
      title: t.services.webDev.title,
      desc: t.services.webDev.desc,
      color: "bg-[#00a884]",
    },
    {
      id: "softwareDev",
      icon: <Code2 size={24} className="text-white" />,
      title: t.services.softwareDev.title,
      desc: t.services.softwareDev.desc,
      color: "bg-[#00a884]",
    },
    {
      id: "digitalMarketing",
      icon: <Megaphone size={24} className="text-white" />,
      title: t.services.digitalMarketing.title,
      desc: t.services.digitalMarketing.desc,
      color: "bg-[#00a884]",
    },
    {
      id: "itConsulting",
      icon: <Users2 size={24} className="text-white" />,
      title: t.services.itConsulting.title,
      desc: t.services.itConsulting.desc,
      color: "bg-[#00a884]",
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex bg-[#e6f6f3] text-[#00a884] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4"
            >
              {t.services.badge}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-[#0b2b46] leading-tight"
            >
              {t.services.title1} <br />
              <span className="text-red-500">{t.services.title2}</span>
            </motion.h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end max-w-sm">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-4 md:text-right"
            >
              {t.services.subtitle}
            </motion.p>
            <motion.button 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="text-[#00a884] border border-[#00a884] px-5 py-2 rounded-md font-semibold flex items-center space-x-2 hover:bg-[#00a884] hover:text-white transition-all text-sm"
            >
              <span>{t.services.exploreAll}</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 flex flex-col items-start group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0b2b46] mb-3 group-hover:text-[#00a884] transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
