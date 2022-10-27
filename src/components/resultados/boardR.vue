<template>
  <div class="board">
    <elementoR
      v-for="c in _Correos"
      :key="c._source.id"
      :to="c._source.to"
      :from="c._source.from"
      :body="c._source.body"
      :date="c._source.date"
      :subject="c._source.subject"
    ></elementoR>
    <!-- <button @click="Cargar()"></button> -->
  </div>
</template>

<script>
import elementoR from "./elementoR.vue";
import { getCorreos } from "../../helpers/helper";
import { ref } from "vue";
export default {
  components: { elementoR },

  setup() {
    let _Correos = ref([]);

    setInterval(Cargar, 100)

    function Cargar() {
      _Correos.value = getCorreos();
    }
    
    return {
      Cargar,
      _Correos,
    };
  },
};
</script>

<style>
.board {
  background-color: #404040;
  border-radius: 15px;
  margin: 20px auto;
  height: 100%;
  width: 95%;
  box-sizing: border-box;
  padding: 0 10px;
  min-height: 30px;
}
</style>
