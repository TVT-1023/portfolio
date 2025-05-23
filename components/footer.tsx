import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import InstagramLogo from '@/public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TiktokLogo from '@/public/images/svg/Tiktok-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '@/public/images/svg/Youtube-Logo.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-default px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        {/* <nav className="mb-8 flex justify-center space-x-6">
          <Link
            href="/discord"
            className="transition-colors hover:text-gray-300"
          >
            Discord
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-gray-300"
          >
            Contact Me
          </Link>
          <Link href="/hire" className="transition-colors hover:text-gray-300">
            Hire Me
          </Link>
          <Link href="/shop" className="transition-colors hover:text-gray-300">
            Shop
          </Link>
        </nav> */}

        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={TwitterLogo}
                alt="X/Twitter Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={YouTubeLogo}
                alt="YouTube Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://github.com/Caldwell-1023"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={GithubLogo}
                alt="Github Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={InstagramLogo}
                alt="Instagram Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={TiktokLogo}
                alt="TikTok Logo"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-center"
            >
              <Image
                src={LinkedinLogo}
                alt="Linkedin Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-sm">
          e-mail: tvtdev07@gmail.com
        </p>
        <p className="mt-1 text-center text-sm">
          © {currentYear} Caldwell Labs, All rights reserved
        </p>
      </div>
    </footer>
  );
}
