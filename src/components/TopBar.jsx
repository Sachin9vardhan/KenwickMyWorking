import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-sky-500 text-white py-1 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <FaPhoneAlt />
        <span>+91 7903263072 / +91 8619336778</span>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <FaEnvelope />
        <span>kenwickremedies@gmail.com</span>
      </div>
    </div>
  );
}