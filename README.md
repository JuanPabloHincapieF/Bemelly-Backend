# Bemelly (En desarrollo)

En este repositorio se encuentra la parte del backend de la app

## Estas son las rutas que se deben usar:

### API USERS

| Route                   | HTTP Verb | Description                |
| :---------------------- | :-------: | :------------------------- |
| `/api/users/getUsers`   |   `GET`   | Muestra todos los usuarios |
| `/api/users/newUser`    |  `POST`   | Crea un usuario            |
| `/api/users/modifyUser` |   `PUT`   | Modificar a un usuario     |
| `/api/users/deleteUser` | `DELETE`  | Eliminar a un usuario      |

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

`deleteUser` El dato que se necesita para eliminar un usuario es el CC :

```JSON
{
    "CC": 1234
}
```

### AUTH USERS

| Route             | HTTP Verb | Description |
| :---------------- | :-------: | :---------- |
| `/api/auth/login` |  `POST`   | login       |

`Login` Los datos que se necesitan para un login son:

```JSON
{
  "email":"prueba@correo.com",
  "password":"1234"
}
```

### PUBLICATION USERS

| Route                             | HTTP Verb | Description                |
| :-------------------------------- | :-------: | :------------------------- |
| `/api/publication/newPublication` |  `POST`   | Crear una publicacion      |
| `/api/users/deleteUser`           | `DELETE`  | Eliminar a una publicacion |

`newPublication` Se necesita enviar en este formato :

```JSON
{
  {
  "ownerCC":123456789,
  "serviceName":"prueba@correo.com",
  "description":"1233",
  "price":123
}
}
```

`deleteUser` El dato que se necesita para eliminar una publication es el id y CC del creador:

```JSON
{
    "id": 1,
    "ownerCC":123456789
}
```
