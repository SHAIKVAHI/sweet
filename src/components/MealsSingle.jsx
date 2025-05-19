import { Button } from "./Button";

export default function MealsSingle({ meal }) {
    console.log('Meal data being passed to Button:', meal);
    
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h1>{meal.name}</h1>
                    <p className="meal-item-price">${meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                    <Button item={meal}>Add to cart</Button>
                    <Button item={meal} >save for later</Button>
                </div>
            </article>
        </li>
    );
}
