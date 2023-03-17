const Header = () => {
  return (
    <header className="flex justify-end">
      <section className="flex items-center justify-items-end space-x-3">
        <div className="flex h-8 items-center overflow-hidden rounded-full bg-white">
          <input
            type="text"
            className=" h-8 rounded-full p-2  placeholder:items-center placeholder:text-xs"
            placeholder="Search Transaction"
          />

          <img
            className="mr-3 h-5 w-5 items-center"
            src="assets/search.svg"
            alt=""
          />
        </div>
        <div>
          <img src="assets/notification.svg" className="h-5 w-5" alt="" />
        </div>
        <span className="text-gray-500">|</span>
        <div>
          <img src="assets/avatar.png" className="h-8 w-8" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
