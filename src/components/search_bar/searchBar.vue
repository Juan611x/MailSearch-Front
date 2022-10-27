<template>
  <div class="search">
    <div class="max-div">
      <button id="decrement" @click="stepper('decrement')">-</button>
      <input
        id="input_Max"
        type="number"
        min="50"
        max="300"
        step="50"
        value="50"
        readonly
      />
      <button id="increment" @click="stepper('increment')">+</button>
    </div>

    <div class="serach-div">
      <div class="input">
        <input
          id="input_Search"
          type="text"
          name="search"
          v-model="textoBusqueda"
        />
      </div>
      <button @click="Buscar()" class="boton">
        <ion-icon name="search"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import axios from "axios";
import {setCorreos} from '../../helpers/helper'
export default {
  setup() {
    let textoBusqueda;
    let maxResultados;
    // let correos = ref([]);
    function stepper(id) {
      let maxInput = document.getElementById("input_Max");
      let min = maxInput.min;
      let max = maxInput.max;
      let step = maxInput.step;
      let val = maxInput.value;
      let calcStep = id == "increment" ? step * 1 : step * -1;
      let newValue = parseInt(val) + calcStep;

      if (newValue >= min && newValue <= max) {
        maxInput.value = newValue;
      }
    }

    async function Buscar(){
      textoBusqueda = document.getElementById("input_Search").value;
      maxResultados = document.getElementById("input_Max").value;

      let phat = `http://localhost:5000/api/indexer/${textoBusqueda}-${maxResultados}`

      axios
        .get(phat)
        .then((response) => {
          console.log(response);
          
          let {hits:{hits}} = response.data
          // console.log(hits)
          setCorreos(hits)
          // console.table(getCorreos())
          // console.table(hits)
          // console.log(hits[0]._source.body)

        })
        .catch((error) => console.log(error));
        
    }

    return {
      Buscar,
      stepper,
    };
  },
};
</script>

<style>
.search {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.serach-div {
  width: 60%;
  height: 70%;
  overflow: hidden;
  border-radius: 15px;
}
.max-div {
  height: 70%;
  overflow: hidden;
  margin: 0;
  display: flex;
  margin: 0 40px;
  border-radius: 45px;
}

.max-div input {
  /* height: 100%;
  width: 80px;
  border-radius:15px ;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  background-color: #85D560;
  color: #283324  ; */
  -moz-appearance: textfield;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  border: none;
  background-color: #85d560;
  color: #202030;
}

input[type="number"]:focus {
  outline: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#decrement,
#increment {
  color: #a2f983;
  border: none;
  background-color: #85d560;
  font-size: 40px;
  cursor: pointer;
}

#decrement {
  padding-left: 15px;
}

#increment {
  padding-right: 15px;
}

.input {
  background-color: white;
  width: 90%;
  height: 100%;
  float: left;
}

.input input {
  height: 100%;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  font-size: 20px;
  border: none;
}

.input input:focus {
  border: none;
  outline: none;
}

.boton {
  background-color: #444949;
  width: 10%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.boton:hover {
  box-shadow: 0 0 5px black;
}

ion-icon {
  scale: 2;
  color: #373636;
}
</style>
