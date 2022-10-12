Ram Guitar Store es una pagina de e-comerce de instrumentos musicales, donde se puede simular la compra de todos los articulos de principio a fin, generando una orden de compra a Firebase, las compras se encuentran limitadas por el stock de la base de datos, que se modifica en cada una de las compras realizadas.

Se utilizaron como herramientas para el proyecto, React JS, React Boostrap, React-Icons,Firebase.

Se utilizan tecnicas de renderizado condicional para evitar que el usuario duplique articulos de compra, asi como tambien para realizar el renderizado de distintos componentes que se refieren a las especificaciones de los productos en el ItemDetail.

La aplicacion web cuenta con filtrado por categorias asi como una seccion de TopSellers que redirecciona a los detalles de los productos correspondientes, este componente renderiza solo los items de la base de datos que tienen dentro de ellos como valor "TRUE" a isTopSeller.