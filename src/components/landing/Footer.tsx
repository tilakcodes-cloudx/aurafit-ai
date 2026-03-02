import AuraFitLogo from "../AuraFitLogo";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <AuraFitLogo size={24} />
        <span className="text-sm font-semibold text-foreground">
          AURA<span className="text-primary">FIT</span> AI
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        Engineer Your Body. Optimize Your Life.
      </p>
      <p className="text-xs text-muted-foreground">
        © 2026 AURAFIT AI. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
