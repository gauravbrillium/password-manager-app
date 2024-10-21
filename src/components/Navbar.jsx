const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-700">&lt;</span>
          Password<span className="text-green-700"> Manager/&gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
