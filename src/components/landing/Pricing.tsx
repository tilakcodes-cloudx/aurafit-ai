import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["Basic dashboard", "Manual logging", "Weekly insights", "3 goals"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    features: ["AI Coach access", "Advanced analytics", "Unlimited goals", "Priority support", "Progress Lab"],
    cta: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹999",
    period: "/month",
    features: ["Everything in Pro", "Custom meal plans", "1-on-1 AI sessions", "API access", "White-glove onboarding"],
    cta: "Go Elite",
    highlight: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Invest in Your <span className="text-gradient">Potential</span>
        </h2>
        <p className="text-muted-foreground">Start free. Upgrade when you're ready to dominate.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-2xl p-6 flex flex-col ${p.highlight ? "glass glow-border relative" : "glass"
              }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="text-sm text-muted-foreground mb-1">{p.name}</div>
            <div className="text-3xl font-bold text-foreground mb-1">
              {p.price}
              <span className="text-sm font-normal text-muted-foreground">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/signup"
              className={`mt-6 block text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${p.highlight
                  ? "bg-primary text-primary-foreground glow-primary hover:opacity-90"
                  : "glass hover:bg-muted/50 text-foreground glow-border"
                }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
