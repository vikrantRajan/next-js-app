interface Params {
  params: {
    [name: string]: string
  }
}
export default function MealRecipePage({ params }: Params) {
  console.log(params)
    return (
      <div>
        <h1>Meals Recipe</h1>
        <p>{params.slug}</p>
      </div>
    )
  }
  