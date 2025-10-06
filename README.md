# EA_SEMINARIO_5 - API

Este proyecto es una API desarrollada en  Node.js + TypeScript  que utiliza  MongoDB  como base de datos.  
Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu entorno local.
---

# Apuntado
Relaciona usuarios con eventos.  
Cada documento representa que un usuario se ha apuntado a un evento.  
Campos:
- `userId` → referencia al modelo `User`
- `eventoId` → referencia al modelo `Evento`
- `createdAt` → fecha de creación automática

---

# Funcionalidades implementadas: API de Apuntados
-  POST /noted  → Añade un usuario apuntado a un evento  
-  DELETE /noted  → Quita a un usuario de un evento
-  GET /noted → Lista todos los apuntados
-  GET /noted/evento/:eventoId  → Lista los usuarios apuntados a un evento 
-  GET /noted/user/:userId  → Lista los eventos a los que un usuario está apuntado  


## REFERENCIAS 
-ChatGPT, Github Copilot.
