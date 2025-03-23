import HomeComponent from "@/app/components/Home";
import SideBar from "@/app/components/SideBar";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant-Dashboard",
    description: "restaurant-dashboard application",
    openGraph: {
      title: "Restaurant-Dashboard",
      description: "restaurant-dashboard application",
      images: [
        {
          url: "../public/Home/pizza.jpg",
          width: 800,
          height: 600,
          alt: "Restaurant Dashboard",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Restaurant-Dashboard",
      description: "restaurant-dashboard application",
    },
  };

const Page: React.FC = () => {
  return (
      <div className="flex">
          <SideBar />
          <div className="flex-1 lg:ml-[128px]">
              <Header />
              <div className="p-8">
                  <HomeComponent />
              </div>
          </div>
      </div>
  );
};

export default Page;
