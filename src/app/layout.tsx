import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';
import { Work_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Raleway } from "next/font/google";

const primary = Work_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const secondary = Space_Grotesk({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
});

const tertiary = Raleway({
  variable: "--font-tertiary",
  subsets: ["latin"],
  display: "swap",
});


type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/

/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
    <Flex
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-theme="dark"
      data-brand="cyan"
      data-accent="magenta"
      data-neutral="gray"
      data-border="conservative"
      data-solid="contrast"
      data-solid-style="flat"
      data-surface="translucent"
      data-transition="all"
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
        "root"
      )}
    >
      <Flex as="body" fillWidth fillHeight margin="0" padding="0">
        <Flex flex={1} direction="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}