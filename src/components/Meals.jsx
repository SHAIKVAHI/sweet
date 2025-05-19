import { useEffect, useState } from "react";
import MealsSingle from "./MealsSingle";


export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch('http://localhost:3000/meals');
        
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        
        const data = await response.json();
        console.log('Meal data structure:', data[0]);
        setMeals(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
        setLoading(false);
      }
    }

    fetchMeals();
  }, []);

  if (loading) {
    return <p className="loading">Loading meals...</p>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
       <MealsSingle key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}