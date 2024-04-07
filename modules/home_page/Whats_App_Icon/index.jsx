import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "@/public/assets/images/whatsAppIcon.png";


const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-float ">
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B212768049725&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={img} alt="WhatsApp" className="w-14 md:w-20 h-auto" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
