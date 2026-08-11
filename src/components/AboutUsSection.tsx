'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutUsSection() {
  const { language } = useLanguage();

  const isEn = language === 'en';

  const content = {
    badge: isEn ? "ABOUT US SOFTWARE" : "আমাদের সম্পর্কে",
    title1: isEn ? "We Build Digital" : "আমরা তৈরি করি",
    title2: isEn ? "Experiences That Matter" : "ডিজিটাল ভবিষ্যৎ",
    description: isEn 
      ? "US Software LTD is a cutting-edge IT solutions provider. We specialize in delivering high-impact, scalable, and innovative digital solutions to help modern businesses thrive in an ever-evolving technological landscape."
      : "ইউএস সফটওয়্যার লিমিটেড একটি আধুনিক আইটি সলিউশন প্রোভাইডার। আধুনিক ব্যবসাগুলোকে প্রযুক্তিগতভাবে আরও শক্তিশালী ও আধুনিক করতে আমরা কাজ করে যাচ্ছি।",
    points: [
      {
        icon: <ShieldCheck className="text-[#00a884] mb-2" size={28} />,
        title: isEn ? "Secure & Reliable" : "নিরাপদ ও নির্ভরযোগ্য",
        desc: isEn ? "Top-notch security for all your applications." : "আপনার অ্যাপ্লিকেশনের জন্য সর্বোচ্চ নিরাপত্তা।"
      },
      {
        icon: <Zap className="text-orange-500 mb-2" size={28} />,
        title: isEn ? "Fast Performance" : "দ্রুত পারফরম্যান্স",
        desc: isEn ? "Optimized for lightning-fast speeds." : "বিদ্যুৎ গতির জন্য অপ্টিমাইজড।"
      },
      {
        icon: <Trophy className="text-blue-500 mb-2" size={28} />,
        title: isEn ? "Award Winning" : "পুরস্কারপ্রাপ্ত",
        desc: isEn ? "Recognized for excellence in IT." : "আইটি ক্ষেত্রে শ্রেষ্ঠত্বের স্বীকৃতি।"
      }
    ]
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Images/Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Collaboration" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b46]/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl">{isEn ? "Empowering businesses through technology" : "প্রযুক্তির মাধ্যমে ব্যবসাকে শক্তিশালী করা"}</p>
              </div>
            </motion.div>
            
            {/* Decorative Dot Grid */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[radial-gradient(#00a884_2px,transparent_2px)] [background-size:16px_16px] opacity-30 z-0"></div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex bg-[#e6f6f3] text-[#00a884] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6"
            >
              {content.badge}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#0b2b46] leading-tight mb-6"
            >
              {content.title1} <span className="text-[#00a884]">{content.title2}</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-10"
            >
              {content.description}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {content.points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex flex-col"
                >
                  {point.icon}
                  <h4 className="font-bold text-[#0b2b46] text-lg mb-1">{point.title}</h4>
                  <p className="text-gray-500 text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
