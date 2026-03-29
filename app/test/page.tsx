"use client";

import { motion } from "framer-motion";

const posts = [
  { id: 1, title: "First Blog" },
  { id: 2, title: "Second Blog" },
  { id: 3, title: "Third Blog" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function BlogList() {
  return (
    <motion.div
      className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900 min-h-screen"

      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          variants={item}

          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.4 }}

          className="p-6 bg-gray-800 rounded-xl text-white"
        >
          {post.title}
        </motion.div>
      ))}
    </motion.div>
  );
}