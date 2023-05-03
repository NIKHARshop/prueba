document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573197660129";

  const nombre = document.querySelector("#cliente").value;
  const celular = document.querySelector("#celular").value;
  const correo = document.querySelector("#email").value;
  const departamento = document.querySelector("#departamento").value;
  const ciudad = document.querySelector("#ciudad").value;
  const municipio = document.querySelector("#municipio").value;
  const localidad = document.querySelector("#localidad").value;
  const barrio = document.querySelector("#barrio").value;
  const dirección = document.querySelector("#dirección").value;
  const código = document.querySelector("#código").value;

  const resp = document.querySelector("#respuesta");
  
  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*PEDIDO*%0A
		*Reservas*%0A%0A
		*NOMBRE*%0A
		${cliente}%0A
    *¿CELULAR*%0A
		${celular}%0A
    *CORREO*%0A
		${correo}%0A
    *DEPARTAMENTO*%0A
		${departamento}%0A
    *CIUDAD*%0A
		${ciudad}%0A
    *MUNICIPIO*%0A
		${municipio}%0A
    *LOCALIDAD*%0A
		${localidad}%0A
    *BARRIO*%0A
		${barrio}%0A
    *DIRECCIÓN*%0A
		${dirección}%0A
    *CÓDIGO*%0A
		${código}`;
		

  if (nombre === "" || celular === "" || correo === "" ){
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `SE A ENVIADO TU PEDIDO, ${nombre}`;

  window.open(url);
});
