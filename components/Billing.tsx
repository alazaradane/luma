import { apple, bill, google, megaphone } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
import Button from "./Button";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={megaphone}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Advocating for Responsible
       <br className="sm:block hidden" /> Digital Citizenship
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our advocacy efforts are centered around promoting positive online interactions, combating misinformation, and encouraging critical thinking. 
        Be a part of our movement to make the digital space a place of respect, integrity, and responsibility.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles="mt-10" />
      </div>
    </div>
  </section>
);

export default Billing;
