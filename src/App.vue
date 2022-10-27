<template>
  <div>
    <navBar></navBar>
    <searchBar></searchBar>
    <div class="div-cuerpo">
      <div class="div-izquierda">
        <!-- :f_Actualizar="actualizar" -->
        <boardR ></boardR>
      </div>
      <div class="div-dercha">
        <p id="from_laber">FROM:</p>
        <HR></HR>
        <p id="to_laber">TO:</p>
        <HR></HR>
        <p id="date_laber">DATE:</p>
        <HR></HR>
        <p id="subject_laber">SUBJECT:</p>
        <HR></HR>
        <p id="body_laber">BODY:</p>
        <HR></HR>
      </div>
    </div>
  </div>
</template>

<script>


import navBar from "./components/nav_bar/navBar.vue";
import searchBar from "./components/search_bar/searchBar.vue";
import boardR from "./components/resultados/boardR.vue";


export default {
  name: "App",
  components: {
    navBar,
    searchBar,
    boardR,
  },

  setup(){
    
    return{
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #5a6161;
  /* #444949 */
}

.div-dercha {
  height: 100%;
  width: 40%;
  /* background-color: aqua; */
  float: left;
  padding: 20px 0;
  color:aliceblue;
  text-align: left;
  position: sticky;
  top:20px;
  overflow: auto;
}

.div-dercha p {
  margin: 7px;
  width: 90%;
  font-size:medium ;
  text-align: justify;
}

.div-dercha HR{
  background-color: aliceblue;
  width: 90%;
}

.div-izquierda {
  height: 100%;
  width: 60%;
  /* background-color: rgb(247, 0, 255); */
  float: left;
  display: flex;
  
}

.div-cuerpo{
  display: flex;
  
}


* {
  margin: 0;
  padding: 0;
  user-select: none;
}

::-webkit-scrollbar{
    width: 10px;
    position: absolute;
    z-index: 9999;
  }

  ::-webkit-scrollbar-track{
    background: none;
  }

  ::-webkit-scrollbar-thumb{
    background: none;
    border-radius: 10px;;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: #2D2D2D ;
  }
</style>
