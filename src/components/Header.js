import { NotificationIcon, SearchIcon } from "@/src/icons/icons";

const Header = () => {
  return (
    <header className="flex justify-end">
      <section className="flex items-center justify-items-end space-x-3">
        <div className="flex h-10 items-center overflow-hidden rounded-full bg-white">
        <input
            type="text"
            className=" h-10 rounded-full px-3  placeholder:items-center placeholder:text-xs"
            placeholder="Search Transaction"
          />

          <div className="mr-2 items-center">
          <SearchIcon  />
          </div>
        </div>
        <div>
          <NotificationIcon className="h-5 w-5" />
        </div>
        <span className="text-gray-500">|</span>
        <div>
          <img src="../assets/avatar.png" className="h-8 w-8" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
