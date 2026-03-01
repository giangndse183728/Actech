import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-8  ">
      <div className="grid w-full grid-cols-1 md:grid-cols-[0.4fr_0.3fr_0.4fr]">
        {/* Left column - Logo (top) and contact (bottom) */}
        <div className="flex flex-col border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
          <div className="flex items-center justify-center gap-2 py-12 px-12">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/actech-logo.png"
                alt="ACTECH"
                width={32}
                height={32}
                className="h-10 w-10 object-contain"
              />
              <span className="tomorrow-font text-2xl font-semibold tracking-tight">
                ACTECH
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-200 py-6 text-sm text-gray-600">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>62 Ton Quang Phiet,  Rach Dua Ward, Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0909725142</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <span>actechvn@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center column - Navigation */}
        <div className="flex flex-col border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
          <div className="flex flex-1 items-center justify-start py-6 px-12">
            <div className="flex flex-col items-start gap-3 md:items-center">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-700 transition-colors hover:text-black"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 py-6" />
        </div>

        {/* Right column - CTA (top) and bottom bar (bottom) */}
        <div className="relative flex flex-col overflow-hidden">
   

          {/* Logo watermark behind CTA */}
          <div className="pointer-events-none absolute -right-8 bottom-0 opacity-10 md:opacity-20">
            <Image
              src="/images/actech-logo.png"
              alt="ACTECH mark"
              width={260}
              height={260}
              className="h-48 w-48 md:h-82 md:w-82 object-contain"
            />
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-between">
            <div className="flex items-start justify-start py-6 px-8">
              <div className="max-w-xs text-left">
                <h3 className="text-2xl font-medium leading-snug">
                  Would like to talk about your future project?
                </h3>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex border-2 border-black px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Get in touch &rarr;
                </Link>
              </div>
            </div>

            <div className="mt-8 py-8 text-sm text-gray-500">
              <div className="flex flex-col items-start justify-end gap-4 md:flex-row md:items-center md:justify-end">
                <span>&copy; 2026 ACTECH</span>
                <div className="flex items-center gap-12">
                  <Link href="#" className="transition-colors hover:text-black">
                    Privacy
                  </Link>
                  <Link href="#" className="transition-colors hover:text-black">
                    Terms
                  </Link>
                  <div className="flex items-center gap-3">
                    <Link
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-700"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
