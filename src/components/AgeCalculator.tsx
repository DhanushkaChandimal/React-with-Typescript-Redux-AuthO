import type React from "react";

const AgeCalculator: React.FC = () => {
    const myName: string = "Dhanushka";
    const birthYear: number = 2000;
    const currentYear: number = 2025;

    const calculateAge = (birthYear: number, currentYear: number) : number =>{
        return currentYear - birthYear
    }

    return (
        <div>
            Age: {calculateAge(birthYear, currentYear)}
        </div>
    )
}

export default AgeCalculator;