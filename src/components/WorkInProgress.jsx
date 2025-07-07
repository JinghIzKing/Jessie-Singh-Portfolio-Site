import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const WorkInProgress = () => {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <motion.div
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
              alt="Work in progress"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <FiClock className="text-indigo-500 text-xl" />
            <h2 className="text-2xl font-bold text-indigo-800">Work in Progress</h2>
          </div>
          
          <p className="text-gray-600 mb-4">
            I started this portfolio site recently and am currently in the process of adding my project and work experience. Thanks for checking out my site! It'll be done in a jiffy!
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className="bg-indigo-500 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          <p className="text-sm text-gray-500 mt-2">Estimated completion: 65%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkInProgress;