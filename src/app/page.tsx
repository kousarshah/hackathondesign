import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <div className="absolute w-[1321px] h-[850px] left-[10px] top-[204px] bg-[#f0f2f3] rounded-bl-[20px]">
        <div className="w-[557px] h-[337px] left-[70px] top-[229px] flex items-center">
          <span className="absolute w-[177px] h-[14px] left-[70px] top-[229px] font-inter font-normal text-[14px] leading-[100%] tracking-[0.12em] uppercase text-[#272343] text-nowrap">
            Welcome to chairy
          </span>
          <h1 className="absolute w-[557px] h-[198px] left-[70px] top-[267px] font-inter font-bold text-[60px] leading-[110%] capitalize text-[#272343]">
            Best Furniture Collection for your interior.{" "}
          </h1>
        </div>

        <button className="absolute flex flex-row justify-center items-center px-[24px] py-[14px] gap-[20px] w-[171px] h-[52px] left-[70px] top-[514px] bg-[#029FAE] rounded-[8px] text-white">
          Shop Now
          <div className="w-[24px] h-[24px] flex-none flex-grow-0 ">
            <div className="absolute right-[16px] border-[1.5px] border-white">
              <FaArrowRight />
            </div>
          </div>
        </button>
        <Image
          src={"/imgs/Product Image.png"}
          alt="Product Image"
          width={434}
          height={584}
          className="absolute left-[777px] top-[115px] "
        />
      </div>

      
    </div>
  );
}


