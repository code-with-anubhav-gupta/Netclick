"use client";
import Image from "next/image";

const SocialIcons = ({loading}) => {
  return (
    <>
      {loading ? (
        <div className="fixed top-1/3 right-0 w-10 z-50 flex flex-col items-center space-y-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
        
            <Image
              src="/assets/image/Facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>

          
          <a href="#" target="_blank" rel="noopener noreferrer">
            
            <Image
              src="/assets/image/Email.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>

          
          <a href="#" target="_blank" rel="noopener noreferrer">
            
            <Image
              src="/assets/image/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
        </div>
      ) : (
        <div className="fixed top-1/3 right-0 w-10 z-50 flex flex-col items-center space-y-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/image/Facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/image/Email.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/image/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
        </div>
      )}
    </>
  );
};

export default SocialIcons;
