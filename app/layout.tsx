import "@/styles/globals.css";
export const metadata = {
  title: "Luma",
  description: "A digital literacy advocacy group in partnership with Meta and ENG",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
