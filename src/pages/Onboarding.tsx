import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight, Activity, Target, User, Ruler, Weight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Onboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        age: "",
        gender: "Male" as "Male" | "Female",
        height: "",
        weight: "",
        goal: "Maintain" as "Lose Fat" | "Maintain" | "Gain Muscle",
        activityLevel: "Moderate" as "Sedentary" | "Moderate" | "Active",
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save to local storage
        const profile = {
            age: Number(formData.age),
            gender: formData.gender,
            height: Number(formData.height),
            weight: Number(formData.weight),
            goal: formData.goal,
            activityLevel: formData.activityLevel,
        };

        localStorage.setItem("userProfile", JSON.stringify(profile));
        navigate("/dashboard");
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-foreground mb-3 block">Gender</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {(["Male", "Female"] as const).map((g) => (
                                        <button
                                            key={g}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, gender: g })}
                                            className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 ${formData.gender === g
                                                    ? "bg-brand-primary/20 border-brand-primary text-brand-primary"
                                                    : "bg-background/50 border-white/10 text-muted-foreground hover:border-white/20"
                                                }`}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="relative pt-2">
                                <label className="text-sm font-medium text-foreground mb-3 block">Age</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="number"
                                        placeholder="e.g. 25"
                                        required
                                        min="16"
                                        max="120"
                                        className="pl-10 bg-background/50 border-white/10 text-foreground h-12"
                                        value={formData.age}
                                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button
                            type="button"
                            onClick={handleNext}
                            disabled={!formData.age || !formData.gender}
                            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-primary-foreground font-semibold h-12 rounded-xl mt-4"
                        >
                            Continue <MoveRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-foreground mb-2 block">Height (cm)</label>
                                <div className="relative">
                                    <Ruler className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="number"
                                        placeholder="e.g. 175"
                                        required
                                        min="100"
                                        max="300"
                                        className="pl-10 bg-background/50 border-white/10 text-foreground h-12"
                                        value={formData.height}
                                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground mb-2 block">Weight (kg)</label>
                                <div className="relative">
                                    <Weight className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="number"
                                        placeholder="e.g. 70"
                                        required
                                        min="30"
                                        max="300"
                                        className="pl-10 bg-background/50 border-white/10 text-foreground h-12"
                                        value={formData.weight}
                                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <Button
                                type="button"
                                onClick={handleBack}
                                variant="outline"
                                className="w-1/3 border-white/10 text-foreground hover:bg-white/5 h-12 rounded-xl"
                            >
                                Back
                            </Button>
                            <Button
                                type="button"
                                onClick={handleNext}
                                disabled={!formData.height || !formData.weight}
                                className="w-2/3 bg-brand-primary hover:bg-brand-primary/90 text-primary-foreground font-semibold h-12 rounded-xl"
                            >
                                Continue <MoveRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-medium text-foreground mb-3 block flex items-center gap-2">
                                    <Target className="w-4 h-4 text-brand-primary" /> Your Goal
                                </label>
                                <div className="grid grid-cols-1 gap-3">
                                    {(["Lose Fat", "Maintain", "Gain Muscle"] as const).map((g) => (
                                        <button
                                            key={g}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, goal: g })}
                                            className={`p-3.5 rounded-xl border text-sm font-medium text-left transition-all duration-300 ${formData.goal === g
                                                    ? "bg-brand-primary/20 border-brand-primary text-brand-primary"
                                                    : "bg-background/50 border-white/10 text-muted-foreground hover:border-white/20"
                                                }`}
                                        >
                                            {g}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground mb-3 block flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-brand-secondary" /> Activity Level
                                </label>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { level: "Sedentary", desc: "Little to no exercise" },
                                        { level: "Moderate", desc: "Exercise 3-5 times/week" },
                                        { level: "Active", desc: "Intense exercise 6-7 times/week" },
                                    ].map((a) => (
                                        <button
                                            key={a.level}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, activityLevel: a.level as "Sedentary" | "Moderate" | "Active" })}
                                            className={`p-3.5 rounded-xl border text-sm text-left transition-all duration-300 flex flex-col gap-1 ${formData.activityLevel === a.level
                                                    ? "bg-brand-secondary/20 border-brand-secondary text-brand-secondary"
                                                    : "bg-background/50 border-white/10 text-muted-foreground hover:border-white/20"
                                                }`}
                                        >
                                            <span className="font-medium text-foreground">{a.level}</span>
                                            <span className="text-xs opacity-80">{a.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <Button
                                type="button"
                                onClick={handleBack}
                                variant="outline"
                                className="w-1/3 border-white/10 text-foreground hover:bg-white/5 h-12 rounded-xl"
                            >
                                Back
                            </Button>
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="w-2/3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-primary-foreground font-semibold h-12 rounded-xl border-0"
                            >
                                Complete Setup <MoveRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/10 blur-[120px]" />
            </div>

            <div className="w-full max-w-md z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Personalize Your Plan
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Step {step} of 3
                    </p>
                    <div className="flex gap-2 justify-center mt-6">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-500 ${i <= step ? "w-8 bg-brand-primary" : "w-4 bg-white/10"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden backdrop-blur-xl bg-background/40">
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
