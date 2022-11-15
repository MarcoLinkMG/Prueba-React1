import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"

const Leerapi = () => {

const [infoApi, setInfoApi] = useState([])
const [buscarPersonaje, setBuscarPersonaje] = useState('')
const [listaFiltrada, setListaFiltrada] = useState([])

useEffect(() => {
    consultarApi()
    
}, [])

//Función que lee API
const consultarApi = async () => {

    const url = 'https://dragon-ball-super-api.herokuapp.com/api/characters';
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    setInfoApi(data)
}

//Función para buscar personaje
const buscar = (e) => {

    setBuscarPersonaje(e.target.value)
    const nuevoListado = infoApi
    const buscado = nuevoListado.filter(personaje => personaje.name === buscarPersonaje)
    setListaFiltrada(buscado)
}

return (
    
    <div className='principal'>
        <div className='buscador'>
            <strong>Escribe el Nombre del Personaje que buscas: </strong><input type='text' onChange={buscar} value={buscarPersonaje} />
        </div>
        <hr></hr>
        <div className='tarjetas'>
            {listaFiltrada.length === 0 ?
            infoApi.map(personaje =>
                <Card key={personaje.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={personaje.imageUrl} style={{ width: "286px", height: "380px"}}/>
                <Card.Body>
                <Card.Title><strong>{personaje.name}</strong></Card.Title>
                <Card.Text>
                {personaje.role}
                </Card.Text>
                </Card.Body>
                </Card>
                ) : listaFiltrada.map(personaje =>
                <Card key={personaje.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={personaje.imageUrl} style={{ width: "286px", height: "380px"}}/>
                <Card.Body>
                <Card.Title><strong>{personaje.name}</strong></Card.Title>
                <Card.Text>
                {personaje.role}
                </Card.Text>
                </Card.Body>
                </Card>)}
        </div>
    </div>
)
}

export default Leerapi;