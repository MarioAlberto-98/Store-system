class Product{
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
        }
}


class UI{  //clase que va a interactuar con HTML

    addProduct(product){ //se añade los datos a la interfaz
     const productList=document.getElementById('product-list'); //se guardan los datos en una variable del form (formulario)
     const element=document.createElement('div'); //se crea una variable que hara que se remplacen los valores que estan en el DIV (product-list)
    element.innerHTML=`  
    <div class="card bg-light text-left  mb-4 " style="max-width: 70rem; ">
        <div class="card-body">
        <div  class="row">
            <div  class="col-md-3">
            
                ${product.name} 
            </div>
            <div  class="col-md-2">
                ${product.price} 
            </div>
            <div  class="col-md-2">
                 ${product.year} 
            </div>
            <div  class="col-md-2">
               <span class="badge badge-pill badge-success">Disponible</span>
            </div>
            <div  class="col-md-3">

         <a href="#" class="btn btn-outline-danger" name="delete"> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
           Borrar</a>
           </div>
           </div>
           
        </div>
    </div>
    `;
    productList.appendChild(element); //Añade los datos nuevos a productList mediante appenChild()
    }

    resentForm(){
        document.getElementById('product-form').reset();

    }


    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Borrado satisfactoriamente','danger')
        }
    }

    
    showMessage(message,cssClass){
     const div=document.createElement("div");
     div.className=`alert alert-${cssClass} mt-2`;
     div.appendChild(document.createTextNode(message));
        //mostrando en el DOOM
        const container=document.querySelector(".container");
        const app= document.querySelector("#App");
        container.insertBefore(div, app);

        // Remove the Message after 3 seconds
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);



    }

    
}

//HTML DOM, Obteniendo los valores
document.getElementById('product-form').addEventListener('submit', function(e){ //form (boton submit)
 const name = document.getElementById('name').value; //de guarda en una variable los datos de los cuadros de texto
 const price = document.getElementById('price').value;
 const year = document.getElementById('year').value;
 console.log(name);

 

 const product= new Product(name, price, year);

 const ui=new UI(); //SE INSTANCIA LA CLASEE UI Para que reciba los datos

if(name==='' || price==='' || year===''){
  return  ui.showMessage('Completa los campos requeridos', 'warning')
}



 ui.addProduct(product); //Muestra en la interfaz los datos
 ui.resentForm();   
 ui.showMessage('Product Added Successfully', 'success ');
    e.preventDefault(); //para evitar que se carge la pagina, y al momento de mandar submit no restablece los valores del las cajas de texto
});


document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();

});