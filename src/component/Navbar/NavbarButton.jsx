import { LuArrowDownRight } from "react-icons/lu";

const NavbarButton = () => {
  // Resume file URL (Update with your actual resume link)
  const resumeUrl = "/Priya_Kushwaha_Resume.pdf"; // Ensure the file is in the public folder

  return (
    <a
      href={resumeUrl}
      download="piku1.pdf"
      className="px-4 py-2 rounded-full text-black text-xl border-cyan border flex items-center gap-1 
                 bg-gradient-to-r from-cyan to-pink hover:border-pink hover:scale-110 
                 transition-all duration-500 hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
};

export default NavbarButton;

