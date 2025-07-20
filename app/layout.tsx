import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
  title: "Luma",
  description: "A digital literacy advocacy group in partnership with Meta and ENG",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
