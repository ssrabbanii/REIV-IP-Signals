import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hero grid-pattern flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <h1 className="text-6xl font-bold mb-6 glow-text bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-reiv-purple hover:bg-reiv-purple-dark text-white">
          <Link to="/">Return Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;