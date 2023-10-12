interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  return (
    <div className="h-screen bg-slate-700 flex items-center justify-center p-5">
      <h1
        className=" text-3xl md:text-6xl lg:text-9xl uppercase font-black text-center text-white"
        // data-testid="header"
      >
        {message}
      </h1>
    </div>
  );
};

export default Header;
