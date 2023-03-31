import { useMemo } from "react"
import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({publisher}) => {
    //en este caso publisher va a ser nuestro detector de diferencias
    const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher])
    return (
        <div className="row rows-cols-1 row-cols-md-3 g3">
            {
               heroes.map( (hero) => (
                    <HeroCard key= {hero.id} {...hero}/>
               )) 
            }
        </div>
    )
}
