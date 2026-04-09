import { motion } from "framer-motion";

const SkillBar = ({ title, percent }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-white">
        <span className="text-xl font-semibold">{title}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-2 bg-[#F6C100] rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
