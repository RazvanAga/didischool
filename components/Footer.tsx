import Image from 'next/image'
import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from '@/lib/constants'
import { WhatsAppIcon } from './WhatsAppIcon'

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-section-dark pt-10 pb-32 px-5">
      <div className="flex flex-col items-center gap-5 text-center">
        <Image
          src="/images/logo.png"
          alt="Didi Afterschool"
          width={56}
          height={56}
          className="h-14 w-14 object-contain opacity-90"
        />

        <p className="font-body font-bold text-[15px] text-white/80">
          {ADDRESS}
        </p>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactează-ne pe WhatsApp"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coral text-white shadow-press-coral active:translate-y-[2px] transition-transform"
            >
              <WhatsAppIcon size={22} />
            </a>
          </li>
          <li>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white active:translate-y-[2px] transition-transform"
            >
              <FacebookIcon size={22} />
            </a>
          </li>
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white active:translate-y-[2px] transition-transform"
            >
              <InstagramIcon size={22} />
            </a>
          </li>
        </ul>

        <p className="mt-2 font-body text-[12.5px] text-white/40">
          © 2026 Didi Afterschool
        </p>
      </div>
    </footer>
  )
}
