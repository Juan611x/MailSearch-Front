# MailSearch-Front



## Tabla de Contenido

* Tecnologías usadas 
* Clonar repositorio GitHub
* Comandos para iniciar la App
* Funcionamiento

---

### Tecnologías usadas en el proyecto
* Vue.js **Framework front**
* Axios
* Yarn **Controlador de paquetes**

---

### Clonar Repositorio

```
git clone https://github.com/Juan611x/MailSearch-Back.git
```

```
yarn install
```

---

### Comandos para iniciar la Api

```
yarn serve
```
---

## Funcionamiento

![image](https://user-images.githubusercontent.com/85857453/198083368-35aae076-75f7-4ae8-8cbb-ebe71e567bc7.png)

En primer lugar, tenemos la barra de búsqueda que consta de dos inputs, un text-Input que permite ingresar lo que deseamos buscar, y adicionalmente tenemos un number-Input para dar la opción al usuario de escoger el máximo de resultados.

Al darle en el icono de la lupa se genera una petición al api, en esa petición manda las dos valores de los inputs.


```javaScript
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
```



Una vez que se manda la solicitud, el resultado se guarda en un arreglo para luego ser mapeada con un v-For y poder mostrar toda la lista de resultados en pantalla.
Y al darle al icono con una flecha la información de ese elemento se despliega en la plantilla de la derecha.


![image](https://user-images.githubusercontent.com/85857453/198086350-01e41d06-9376-41c1-891e-492487aaabc4.png)
