import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-100 to-green-100">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-xl inline-block"
        >
          <FaShieldAlt className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">
            Genuine Medicines Guarantee
          </h3>
        </motion.div>
      </div>
    </section>
  );
}