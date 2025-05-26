# Sistema-de-autenticacion
AUTENTICACIÓN CON JWT EN NODE.JS EXPRESS
Este proyecto es una API de autenticación creada con Node.js y Express, que permite:

- Registrar nuevos usuarios
- Iniciar sesión y recibir un token JWT
- Acceder a rutas protegidas (como /me) solo si el usuario tiene un token válido

Está conectado a una base de datos MongoDB y protege las contraseñas usando bcrypt.

¿QUÉ ES UN JWT Y PARA QUÉ SIRVE?

JWT significa JSON Web Token. Es un tipo de "llave" que se entrega al usuario al hacer login.
Esa llave se usa para acceder a rutas privadas. El servidor no necesita guardar sesiones.
El token tiene una fecha de expiración y puede ser verificado automáticamente.

FUNCIONES Y TIPOS USADOS

- bcrypt.hash()         → Encripta la contraseña antes de guardarla
- bcrypt.compare()      → Compara una contraseña normal con una encriptada
- jwt.sign()            → Crea un token con información del usuario
- jwt.verify()          → Comprueba si el token es válido
- Strings               → Para nombres, contraseñas, tokens
- Objetos JSON          → Para enviar y recibir datos entre cliente y servidor

-----
----------------------------
