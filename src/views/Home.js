import React, { useState, useEffect } from 'react';

/* SIEMPRE IMPORTAR DE ESTA FORMA, ALWAYS. 
State es el "alma de la wea", puede definir diferentes valores para el elemento, sean variables o funciones.
Se usa const para definir estas variables o funciones.
const ["nombre de la variable", segunda funcionalidad] = useState("bienvenido a app")  las funciones siempre se escriben así f(x)
setA: significa que define A  


otra cosa randome, siempre debe haber, aunque sea una etiqueta vacia, que contenga a toda la otra wea, no pueden haber dos a la misma jerarquía padre
        ([
            { name: "bolbasor", type: "hoja" },
            { name: "charmaleon", type: "fuego" },
            { name: "pikachu", type: "trueno" },
        ])

        pokemon.length > 0 && pokemon.map((item, i) =>  <div key={i} className="test"> {item.name} </div>)          

        const GETImagenPoke = async () => {
        const request = await fetch(``)
        const data = await request.json
        setPokemon(data)
        console.log(data)

         { 
                                        id !== 0 &&
                                        <img src={""}>
                                        </img>
                                }
    }
        */

const Home = props => {

    const [value, setValue] = useState(true)
    const [pokemon, setPokemon] = useState([])
    const [id, setId] = useState(0)
    const [position, setPosition] = useState()

    const GETAllPoke = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        const data = await request.json()
        setPokemon(data.results)
        console.log(data)
    }

    const GETimg = (img) => {

        return (<img className="imagen" src={`https://pokeres.bastionbot.org/images/pokemon/${img}.png`} />)

    }
    /*         const getId = img.replace('https://pokeres.bastionbot.org/images/pokemon/10.png')
     */



    useEffect(() => {
        GETAllPoke()
    }, [])


    return (
        <div className="container">

            <div className="row">

                <div id="one" className="col-5 bg-danger rounded-lg">

                    <div className="row unos">


                        <div className="col-3 ">
                            <button id="boti" type="button" className="btn rounded-circle "></button>
                        </div>
                        <div className="col-9" >
                            <div className="  btn rounded-circle chiquiti"></div>
                            <div className="  btn rounded-circle chiquitu"></div>
                            <div className="  btn rounded-circle chiquito"></div>
                        </div>
    
                    </div>
                    <hr></hr>
                    <div className="row screen doss">
                        <div className="col-1"> </div>
                        <div className="col-10">
                            <div className="borde ">
                                <button id="rojito_uno" className="btn rounded-circle "></button>
                                <button id="rojito_dos"  className=" btn rounded-circle "></button>
                                <div className="pantalla">
                                    {
                                        GETimg(position)
                                    }

                                </div>
                                <button id="rojito_tres" type="button" className="btn rounded-circle" onClick={() => {
                                    setValue(!value)
                                }}>

                                </button>
                            </div>
                        </div>
                        <div className="col-1"> </div>
                    </div>
                    <div className="row buttons tress">
                        <div className="col-2">
                            <button id="boton_negro" type="button" className="btn rounded-circle"></button>
                        </div>
                        <div className="col-3" >
                            <button type="button" className="btn pill_uno"></button>
                            <div className="pantalla_verde">



                            </div>
                        </div>
                        <div className="col-7">
                            <button id="pill_dos" type="button" className="btn  "></button>
                            <div className="cruz"></div>
                        </div>
                    </div>
                </div>

                <div id="two" className="col-1 bg-danger rounded">
                    <div className="mitad1"></div>
                    <div className="mitad2"></div>

                </div>


                <div id="three" className="col-5 bg-danger rounded-lg">

                    <div className="row onee">

                        <div className="col-12"></div>

                    </div>

                    <div className="row twoo">

                        <div className="col-1"></div>

                        <div className="col-10">

                            <div className="black_screen rounded-lg" >
                            {
                                pokemon.length > 0 && pokemon.map((item, i) => <div onClick={() => { setPosition(i + 1) }} key={i} className="test"> {item.name} </div>)
                            }


                            </div>
                            


{/*                             <button type="button" class="btn btn-info waa1"></button>
                            <button type="button" class="btn btn-info waa1"></button>
                            <button type="button" class="btn btn-info waa1"></button>
                            <button type="button" class="btn btn-info waa1"></button>
                            <button type="button" class="btn btn-info waa1"></button>

                            <button type="button" class="btn btn-info waa2"></button>
                            <button type="button" class="btn btn-info waa2"></button>
                            <button type="button" class="btn btn-info waa2"></button>
                            <button type="button" class="btn btn-info waa2"></button>
                            <button type="button" class="btn btn-info waa2"></button> */}
                        </div>


                        <div className="col-1"></div>

                    </div>


                    <div className="row three">
                        <div className="col-1">

                        </div>

                        <div className="col-5">
                            <button type="button" className="btn gris1 "></button>
                            <button type="button" className="btn gris2"></button>
                            <div className="parlante1 rounded"></div>

                        </div>

                        <div className="col-5">

                            <button type="button" className="btn pill_unos"></button>
                            <button type="button" className="btn pill_unoss"></button>
                            <button id="boton_amarillo" type="button" className="btn rounded-circle"></button>
                            <div className="parlante2 rounded"></div>


                        </div>
                        <div className="col-1">

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;