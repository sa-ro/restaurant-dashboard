import HomeComponent from "@/app/components/Home";
import SideBar from "@/app/components/SideBar";
import Header from "./components/Header";

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
