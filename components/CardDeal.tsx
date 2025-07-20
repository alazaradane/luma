import { card, social } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Mastering Social Media Management<br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Social media is a powerful tool, but mastering its use requires skill and strategy. 
        Our training programs guide you through effective social media management, from content creation to community engagement.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={social} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
