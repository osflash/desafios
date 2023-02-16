import "../styles/globals.css";

import { crimsonPro, lato } from "~/utils/fonts";

interface RottLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RottLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br" className={`${lato.variable} ${crimsonPro.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
