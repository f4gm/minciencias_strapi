# SCVIG

El Sistema de captura y visualización de información geográfica **(SCVIG)** para el monitoreo continuo del catastro mediante métodos declarativos y colaborativos, es una propuesta aprobada y financiada por la convocatoria 1047 de Minciencias.

Busca un cambio de enfoque en el cual los propietarios de los predios tomen un rol activo en la actualización de información catastral con enfoque multipropósito.

# Repositorios asociados

- [API + Aplicación web](https://github.com/f4gm/minciencias_strapi)
- [Aplicación Móvil](https://github.com/santicusi/micasahoy)

# API + Aplicación web

Para desvincular los datos del cliente que los va a consumir, se emplea el concepto de API con arquitectura REST. Para facilitar el desarrollo se emplea la tecnología [Strapi](https://strapi.io/) en su versión 4. Esta nos provee de la API-REST mediante los esquemas creados y un panel de administración o Aplicación web, que será empleado para la gestión de la información por el gestor catastral que emplee el sistema SCVIG. Para facilitar la realización de algunas tareas, se están desarrollando los plugins "asignacion" para asignar predios a los reconocedores prediales y "revision" para la revisión de la información por parte de los reconocedores prediales enviada por los propietarios.

## Despliegue

De forma temporal, el despliegue se crea automáticamente en el siguiente [enlace](https://minciencias-strapi.onrender.com/), este se genera a partir del último commit del presente repositorio.

Para realizar un despliegue ejecutar los siguientes comandos:

```
npm run build
npm run start
```