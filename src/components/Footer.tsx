'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <footer className="bg-[#0b2b46] text-gray-300 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo/logo.png" alt="US Software LTD" className="h-14 w-auto bg-white/10 p-2 rounded-lg backdrop-blur-sm" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {isEn 
                ? "Your trusted partner in navigating the digital landscape. We deliver smart, scalable, and secure IT solutions."
                : "আপনার বিশ্বস্ত প্রযুক্তিগত অংশীদার। আমরা উন্নত, টেকসই এবং নিরাপদ আইটি সলিউশন প্রদান করি।"}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00a884] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00a884] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b2b46"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00a884] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00a884] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">{isEn ? "Quick Links" : "গুরুত্বপূর্ণ লিংক"}</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-400 hover:text-[#00a884] transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#00a884]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">{isEn ? "Our Services" : "আমাদের সেবাসমূহ"}</h4>
            <ul className="space-y-3">
              {['Web Development', 'Software Development', 'Mobile Apps', 'Digital Marketing', 'IT Consulting'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-400 hover:text-[#00a884] transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#00a884]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">{isEn ? "Contact Us" : "যোগাযোগ করুন"}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#00a884] shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm">{isEn ? "123 Tech Valley, Silicon City, 10001" : "১২৩ টেক ভ্যালি, সিলিকন সিটি, ১০০০১"}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#00a884] shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+880 1712-34578</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#00a884] shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@ussoftwareltd.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} US Software LTD. {isEn ? "All rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#00a884]">{isEn ? "Privacy Policy" : "গোপনীয়তা নীতি"}</Link>
            <Link href="#" className="hover:text-[#00a884]">{isEn ? "Terms of Service" : "সেবার শর্তাবলী"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
