import { createApp } from 'vue'
import App from './App.vue'


let myGlobalVariable = {
    data() {

        let seleccion = {
            _from: "1 ",
            _to: "2 ",
            _date: "3 ",
            _subject: "4 ",
            _body: "5 "
        }
        return {
            seleccion,
            ap : "Holaaaaaaaaa"
        }
    }
}

const app = createApp(App)
app.mixin(myGlobalVariable)
app.mount('#app')
