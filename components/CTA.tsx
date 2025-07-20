import styles from "@/styles/style";
import Button from "./Button";
const CTA: React.FC = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>
                Join the Digital Literacy Olympiad 2025!
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Showcase your digital skills. Compete. Learn. Lead.
                Whether you're a student, or enthusiast—this is your chance to shine in Ethiopia’s biggest Digital Literacy Olympiad.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button istrue />
        </div>
    </section>
)

export default CTA;