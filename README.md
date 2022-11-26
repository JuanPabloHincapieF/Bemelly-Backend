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

### API AUTH

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

### API PUBLICATION

| Route                                      | HTTP Verb | Description                             |
| :----------------------------------------- | :-------: | :-------------------------------------- |
| `/api/publication/getPublications`         |   `GET`   | Muestra todas las publicaciones         |
| `/api/publication/getUserPublications/:CC` |   `GET`   | Muestra las publicaciones de un usuario |
| `/api/publication/newPublication`          |  `POST`   | Crear una publicacion                   |
| `/api/users/deletePublication`             | `DELETE`  | Eliminar una publicacion                |
| `/api/users/modifyPublication`             |   `PUT`   | Modificar una publicacion               |

`getPublications` No es necesario nada mas que la ruta y el verbo

`getUserPublications/:CC` se debe enviar un la url con el CC del dueño de las publicaciones que se quieren mostrar

`newPublication` Se necesita enviar en este formato :

```JSON
{
  "ownerCC":123456789,
  "serviceName":"our service",
  "description":"description of our service",
  "price":123,
  "tags": ["tag1", "tag2"]
}
```

`deletePublication` El dato que se necesita para eliminar una publicacion es el id y CC del creador:

```JSON
{
    "id": 1,
    "ownerCC":123456789
}
```

`modifyPublication` Se necesita enviar en este formato :

```JSON
{
  "id":23,
  "serviceName":"modified service", //opcional
  "description":"description of our modified service",  //opcional
  "price":456,   //opcional
  "tags": ["tag1", "tag2"]
}
```
