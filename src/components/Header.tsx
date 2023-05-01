import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-md"
            src="https://www.codepeek.com.br/_next/static/media/logo.c50471c1.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Powered by @matheus13f</h1>
      </div>

      <div>
        <Link
          href="https://codepeek.com.br/subscribe"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-yellow-500 flex items-center rounded-full text-center"
        >
          Inscreva-se no CodePeek com 20% de desconto!
        </Link>
      </div>
    </header>
  );
}

export default Header;
