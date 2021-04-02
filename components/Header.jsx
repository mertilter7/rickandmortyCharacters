import Link from "next/link";
function Header() {
  return (
    <div className="flex justify-center p-5 font-bold bg-black text-white">
      <Link href="/">
        <a>Rick Andy Morty Characters</a>
      </Link>
    </div>
  );
}

export default Header;
