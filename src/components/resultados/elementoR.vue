<template>
  <div class="elemento">
    <div class="div-from">
      <p>{{ from }}</p>
    </div>
    <!-- <div class="div-to">
      <p>{{ to }}</p>
    </div> -->
    <div class="div-date">
      <p>{{ date }}</p>
    </div>
    <div class="div-subject">
      <p>{{ subject }}</p>
    </div>
    <div class="div-mark">
      <div class="circle" @click="seleccionar">
        <ion-icon name="caret-forward-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    to: {
      type: String,
      default: "N/A",
    },
    from: {
      type: String,
      default: "N/A",
    },
    subject: {
      type: String,
      default: "N/A",
    },
    date: {
      type: String,
      default: "N/A",
    },
    body: {
      type: String,
      default: "N/A",
    },

  },

  setup(props) {
    
    
    const seleccionar = () =>{

      document.getElementById("from_laber").innerHTML = 'FROM: '+ props.from
      document.getElementById("to_laber").innerHTML = 'TO: '+ props.to
      document.getElementById("date_laber").innerHTML = 'DATE: '+ props.date
      document.getElementById("subject_laber").innerHTML = 'SUBJECT: '+ props.subject
      document.getElementById("body_laber").innerHTML = 'BODY: <br>'+ props.body
      
    }

    
    return {seleccionar};
  },
};
</script>

<style>
.elemento {
  width: 100%;
  border-radius: 7px;
  height: 50px;
  background-color: aliceblue;
  margin: 10px 0;
  box-sizing: border-box;
  overflow: hidden;
  font-size: small;
}

.elemento > div:nth-child(-n + 3) {
  height: 100%;
  float: left;
  /* width: 23%; */
  width: 31%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}


.div-mark {
  width: 7%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle{
  background-color: #7a7979;
  width: 40px;
  height: 40px;
  border-radius:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2px;
  box-sizing: border-box;
}

.circle:hover{
  box-shadow: 0 0 5px black;
}

</style>
