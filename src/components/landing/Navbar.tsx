import { motion } from "framer-motion";
import AuraFitLogo from "../AuraFitLogo";
import { Link } from "react-router-dom";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 glass-strong"
  >
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <AuraFitLogo size={32} />
        <span className="text-lg font-bold tracking-tight text-foreground">
          AURA<span className="text-primary">FIT</span>
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Log in
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-primary"
        >
          Get Started
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
