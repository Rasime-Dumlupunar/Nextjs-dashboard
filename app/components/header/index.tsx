import { BiSolidBellRing } from "react-icons/bi";
import Input from "./input";
import Image from "next/image";
import profile from "@/assets/images/profile.jpg"

const Header = () => {
  return (
    <div className='border p-2 flex justify-between'>
      <Input/>
      <div className="flex gap-3 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer"/>
        <div className="flex gap-3">
          <Image src={profile} alt="user" width={50} height={50} className="object-contain"/>
          <div>
          <h1 className="font-semibold">Rasime Dumlupunar</h1>
          <p>admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
