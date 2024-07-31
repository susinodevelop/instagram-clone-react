import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description: "Es la pagina para ver historias",
};

const StoriesLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-screen">
      {children}
    </div>
  );
}

export default StoriesLayout;