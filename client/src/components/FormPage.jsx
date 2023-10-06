import React, { useEffect, useState } from "react";
import "../css/FormStyle.css";
import bolbasur from "../image/bolbasur.jpg";
import Charmander from "../image/Charmander.png";
import pikachu from "../image/pikachu-laending.png";
import squitle from "../image/squitle.png";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes, getpokemon } from "../redux/action";
import validate from "../asset/validate";
import successfulvalidation from "../asset/successfulvalidation";
// import axios from 'axios'

function FormPage() {
  // const pedir =async()=>{
  //   const {data} = await axios.get('http://localhost:3001/type')
  //   return data
  // }
  // const llamar =  pedir()
  // console.log(llamar)
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const dispatch = useDispatch();
  const Types = useSelector((state) => state.types);

  console.log(Types);
  const thevalues = {
    name: "",
    image: "",
    attack: "",
    defense: "",
    life: "",
    speed: "",
    weight: "",
    height: "",
    types: 0,
  };
  const [datos, setdatos] = useState(thevalues);
  console.log(datos);
  const [error, seterror] = useState({});
  const [access,setaccess]=useState({})
  console.log(error);

  const SubmitHandler = (event, datos) => {
    if (Object.keys(error).length === 0) {
      alert("el pokemon se a creado");
      event.preventDefault();

      dispatch(createPokemon({ ...datos }));
      dispatch(getpokemon());
      setdatos(thevalues);
    } else {
      event.preventDefault();
      alert("algo a fallado en el formulario revisalo por favor");
    }
  };

  const HandlesChange = (e) => {
    const { name, value } = e.target;

    seterror(
      validate({
        ...datos,
        [name]: value,
      })
    );
    setaccess(
      successfulvalidation({
        ...datos,
        [name]: value,
      })
    );
    setdatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <div className="toda_page">
      <div className="accesorio">
        <div class="container">
          <div className="card_B card">
            <img src={bolbasur} alt="bolbasur" className="img_pokemon" />
          </div>
          <div className="card_Ch card">
            <img src={Charmander} alt="charmander" className="img_pokemon" />
          </div>
          <div className="card_P card">
            <img src={pikachu} alt="pikachu" className="img_pokemonP" />
          </div>
          <div className="card_S card">
            <img src={squitle} alt="squitle" className="img_pokemon" />
          </div>
        </div>
        <div className="requisitos">
          <h2 className="text_req">requirements to create your pokemon</h2>
            <br />
          {error.name && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.name}
            </span>
          )}
          {access.name && (<span style={{color:'blue', fontSize: "15px" }}>{access.name}</span>) }
          <br />
          {error.image && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.image}
            </span>
          )} {access.image && (<span style={{color:'blue', fontSize: "15px" }}>{access.image}</span>) }
          <br />
          {error.life && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.life}
            </span>
          )}{access.life && (<span style={{color:'blue', fontSize: "15px" }}>{access.life}</span>) }
          <br />
          {error.attack && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.attack}
            </span>
          )} {access.attack && (<span style={{color:'blue', fontSize: "15px" }}>{access.attack}</span>) }
          <br />{" "}
          {error.defense && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.defense}
            </span>
          )} {access.defense && (<span style={{color:'blue', fontSize: "15px" }}>{access.defense}</span>) }
          <br />
          {error.speed && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.speed}
            </span>
          )}{access.speed && (<span style={{color:'blue', fontSize: "15px" }}>{access.speed}</span>) } 
          <br />{" "}
          {error.height && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.height}
            </span>
          )}{access.height && (<span style={{color:'blue', fontSize: "15px" }}>{access.height}</span>) }
          <br />
          {error.weight && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.weight}
            </span>
          )}{access.weight && (<span style={{color:'blue', fontSize: "15px" }}>{access.weight}</span>) } 
          <br />
          {error.types && (
            <span
              className="errores"
              style={{ color: "red", fontSize: "15px" }}
            >
              {error.types}
            </span>
          )}
        </div>
        <div style={{display:'flex',alignItems:'center'}} >
            <h3>You Image:</h3>
          <img src={datos.image} alt="" className="img_user"/>
            </div>
      </div>
      <div className="div_formulario">
        <form className="form">
          <h1 className="elH1">Create Pokemon</h1>
          <br />
          <label className="labels">Name:</label>

          <input
            type="text"
            className="inputs"
            value={datos.name}
            onChange={HandlesChange}
            name="name"
          />

          <br />
          <label for="tipo" className="labels">
            Image:
          </label>

          <input
            type="text"
            className="inputs"
            value={datos.image}
            onChange={HandlesChange}
            name="image"
          />

          <br />
          <div className="inputsDeNumeros">
            <div className="fila">
              <label for="habilidades" className="labels">
                Life:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.life}
                onChange={HandlesChange}
                name="life"
              />
            </div>

            <br />

            <div className="fila">
              <label htmlFor="" className="labels">
                Attack:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.attack}
                onChange={HandlesChange}
                name="attack"
              />
            </div>

            <br />

            <div className="fila">
              <label htmlFor="" className="labels">
                Defense:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.defense}
                onChange={HandlesChange}
                name="defense"
              />
            </div>

            <br />

            <div className="fila">
              <label htmlFor="" className="labels">
                Speed:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.speed}
                onChange={HandlesChange}
                name="speed"
              />
            </div>

            <br />

            <div className="fila">
              <label htmlFor="" className="labels">
                Height:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.height}
                onChange={HandlesChange}
                name="height"
              />
            </div>

            <br />

            <div className="fila">
              <label htmlFor="" className="labels">
                Weight:
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="inputs inputs_number"
                value={datos.weight}
                onChange={HandlesChange}
                name="weight"
              />
            </div>
            
          </div>
          <br />
          <div>
            {console.log(Types.map((tipos) => tipos))}
            <select className="tipos" name="types" value={datos.types} onChange={HandlesChange}>
              <option disabled selected value="">
                Types
              </option>
              {Types.map((tipo) => (
                <option value={tipo.id} key={tipo.id}>
                  {tipo.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <button type="sibmit" className="btn"  onClick={(event) => SubmitHandler(event, datos)}>
            <span className="btntxt">
              Create
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
