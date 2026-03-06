import { useEffect, useState } from "react"
import { fench } from "../services/fench";
import { useParams } from "react-router-dom";

export default function Person() {
    const [person, setPerson] = useState(null);
    const {id} = useParams();

    async function loadPerson() {
        const { data } = await fench.get(`/person/${id}`);
        setPerson(data);
        console.log(data)
    }

    useEffect(() => {
        loadPerson();
    },[id])
  return (
    <div>{person ? (
        <div>
            <h2>{person.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w780/${person.profile_path}`} alt={person.name} />
        </div>
    ) : (
        <p>Loadin</p>
    )}</div>
  )
}
