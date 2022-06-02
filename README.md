# Meli Frontend Challenge

## Instalación

Dentro del directorio principal ejecutar el siguiente comando:

`npm install`

## Ejecución

Para levantar la aplicación es necesario ejecutar los siguientes comandos:

`npm start`

`npm run server`

## Tests

Se corren ejecutando el comando:

`npm test`

# Overview

Para realizar la aplicación utilicé el stack de tecnologías pedido en la consigna.
El Frontend está desarrollado con React y Sass para los estilos.
El Backend consiste en un sencillo servidor en Node utilizando Express.

## Backend

El Backend se encuentra dividido en tres módulos:

1. Cliente
2. Servicios
3. Servidor

El Cliente tiene la responsabilidad de conectarse con la API de MercadoLibre para obtener los recursos necesarios.
Los Servicios tienen la responsabilidad de consumir esos recursos para exponer la información que requiere Frontend.
El Servidor tiene la responsabilidad de proveer esta información por medio de los endpoints acordados en el Contrato.

## Frontend

El Frontend consiste en el Header que contiene la barra de búsqueda y dos vistas:

1. Search
2. Detail

La vista de Search muestra los resultados de la búsqueda.
La vista de Detail muestra el detalle de un item.
