# Bemelly (En desarrollo)

En este repositorio se encuentra la parte del backend de la app

## Estas son las rutas que se deben usar:

### API USERS

| Route                   | HTTP Verb | Description                |
| :---------------------- | :-------: | :------------------------- |
| `/api/users/getUsers`   |   `GET`   | Muestra todos los usuarios |
| `/api/users/newUser`    |  `POST`   | Crea un usuario            |
| `/api/users/modifyUser` |   `PUT`   | Modificar a un usuario     |

`getUsers` No es necesario nada mas que la ruta y el verbo

`newUser` Se necesita enviar en este formato :

```JSON
{
    "name": "Juan",
    "CC": 12345,
    "email": "example@email.com",
    "password": "myPassword",
    "role": "client"        // Opcional
}
```

`modifyUser` Los datos que se pueden actualizar son :

```JSON
{
    "name": "Juan",
    "email": "example@email.com",
    "role": "client"
}
```
