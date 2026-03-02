export type Gender = "Male" | "Female";
export type Goal = "Lose Fat" | "Gain Muscle" | "Maintain";
export type ActivityLevel = "Sedentary" | "Moderate" | "Active";

export interface UserProfile {
    age: number;
    gender: Gender;
    height: number;
    weight: number;
    goal: Goal;
    activityLevel: ActivityLevel;
}

export interface FitnessTargets {
    calories: number;
    protein: number;
    water: number;
    steps: number;
    recoveryScore: number;
}

export const calculateBMR = (weight: number, height: number, age: number, gender: Gender): number => {
    if (gender === "Male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
};

export const calculateTDEE = (bmr: number, activityLevel: ActivityLevel): number => {
    switch (activityLevel) {
        case "Sedentary":
            return bmr * 1.2;
        case "Moderate":
            return bmr * 1.55;
        case "Active":
            return bmr * 1.75;
        default:
            return bmr * 1.2;
    }
};

export const calculateTargets = (profile: UserProfile): FitnessTargets => {
    const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
    const tdee = calculateTDEE(bmr, profile.activityLevel);

    let targetCalories = tdee;
    if (profile.goal === "Lose Fat") {
        targetCalories -= 300;
    } else if (profile.goal === "Gain Muscle") {
        targetCalories += 300;
    }

    const protein = Math.round(1.8 * profile.weight);
    const water = Number((0.035 * profile.weight).toFixed(1)); // in Liters

    let steps = 6000;
    let recoveryScore = 80; // Base mock score
    if (profile.activityLevel === "Moderate") {
        steps = 8000;
        recoveryScore = 85;
    } else if (profile.activityLevel === "Active") {
        steps = 10000;
        recoveryScore = 90;
    }

    return {
        calories: Math.round(targetCalories),
        protein,
        water,
        steps,
        recoveryScore,
    };
};
