# API_REST

Proyecto hecho para la segunda prueba de Malaga y Barcelona.

## Aclaraciones:
Después de demasiado tiempo durante la prueba intentando hacer que funcione como una API rest  no lo consigo. Me quedan 20 minutos pero no pierdo la esperanza.

## Uso en (MacOX):

### Pre-requisitos 📋
Tienes que tener una API creada en la intranet.
IMPORTANTE: La REDIRECT URL tendrá que ser del formato -> http://localhost:3000/index
- Necesitas tener docker instalado en el equipo (probado con versión 1.28.5 de docker-compose 1.28.5.

### Instalación 🔧
1. En la intranet asegurarnos que la REDIRECT_URL es del formato -> http://localhost:3000/index

2. Rellenar el .env.SAMPLE con tu IP, CLIENT ID y SECRET. Luego modificarle el nombre a .env.

3. Realizar make en la raíz del repositorio

4. Solo queda entrar en localhost:3000 con tu navegador (testado en brave, chrome y safari de momento).

### Tienes las siguientes funciones en el Makefile:
- make (build) -> Crea la imagen y corre el servidor dejandolo foreground. (Tiene versión background con make build_back)
- make init -> No actualiza la imagen si hemos cambiado algo en el Dockerfile e inicia el server foreground. (Tiene versión background con make init_back)
- make stop -> Para parar el docker-compose activo
