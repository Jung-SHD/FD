import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import Logo from "@/assets/icons/Logo.svg";
import Floating from "@/components/atoms/floating";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flaw Detector",
  description:
    "인공지능의 뛰어난 분석 능력을 활용하여 코드의 보안 취약점을 신속하게 해결하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bug.ico"/>
      </head>
      <body className={inter.className}>
        <div className="grid h-max min-h-screen w-full grid-rows-[auto_1fr_auto]">
          <header className="sticky top-0 z-50 w-full bg-white px-[40px]">
            <div className="mx-auto flex h-[136px] w-full min-w-[1240px] max-w-[1920px] items-center justify-between">
              <div className="flex gap-10 px-[40px]">
                <Link href="/" className="uppercase">
                  <Logo />
                </Link>
                <Link href="/vuldb" className="flex items-center">
                  취약점 DB
                </Link>
              </div>
              <div className="px-[40px]">
                <Link href="/repos">MY 저장소</Link>
              </div>
            </div>
          </header>
          <main className="relative mx-auto min-h-full w-full min-w-fit max-w-[1920px] px-[40px] text-text-dark has-[.content-w-full]:max-w-full has-[.content-px-none]:px-0">
            {children}
          </main>
          <footer className="relative overflow-hidden bg-bg-primary_light px-[80px] py-[60px] before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:bg-main-bg before:bg-[length:3856px_1134px] before:bg-[left_30%_top_45%] before:bg-no-repeat before:content-['']">
            <div className="relative z-30 mx-auto flex w-full min-w-[1240px] max-w-[1920px] items-stretch justify-between gap-10 px-[80px] py-5">
              <div className="">
                <div className="title-xs-bold uppercase">CONTACT</div>
                <div className="label-md-bold flex gap-10 [&_p]:text-text-default">
                  <div className="[&>div]:flex">
                    <div>
                      <p className="mr-5">(주)스펙스페이스</p>
                      <p className="mr-3">대표자</p>
                      <span>염민호</span>
                    </div>
                    <div>
                      <span>서울 강서구 마곡중앙2로 11, 3층 303호</span>
                    </div>
                    <div>
                      <p className="mr-4">Email</p>
                      <span>admin@sfacspace.com</span>
                    </div>
                  </div>
                  <div className="[&>div]:flex">
                    <div>
                      <p className="mr-3">사업자등록번호</p>
                      <span>450-87-01864</span>
                    </div>
                    <div>
                      <p className="mr-3">대표번호</p>
                      <span>02-6217-1119</span>
                    </div>
                    <div>
                      <p className="mr-5">팩스</p>
                      <span>02-6217-1115</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-end">
                <div className="mb-3 flex gap-5">
                  <Link href="/" className="text-text-default underline">
                    회사소개
                  </Link>
                  <Link
                    href="/agreements"
                    className="text-text-default underline"
                  >
                    서비스이용약관
                  </Link>
                  <Link href="/ppa" className="text-text-default underline">
                    개인정보처리방침
                  </Link>
                </div>
                <p className="label-xs-medium text-right">
                  Ⓒ Spacspace.All right reserved.
                </p>
              </div>
            </div>
          </footer>
          <Floating className="animate-bounce" />
        </div>
      </body>
    </html>
  );
}
