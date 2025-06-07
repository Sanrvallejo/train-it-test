# My Teams App

Este proyecto está dividido en dos partes:

- **`/server`**: Contiene la API creada con [NestJS](https://nestjs.com/) y [Prisma](https://www.prisma.io/).
- **`/client`**: Contiene la aplicación web desarrollada con [Angular](https://angular.io/) que consume la API.

---

## 📁 Estructura del Proyecto

my-teams-app/
├── client/ # Aplicación Angular (frontend)
└── server/ # API NestJS con Prisma (backend)


---

## 🚀 Backend (`/server`)

### Tecnologías utilizadas:
- NestJS
- Prisma ORM
- PostgreSQL

### ⚙️ Configuración inicial

1. Accede a la carpeta del servidor:

   ```bash
   cd server
   ```
   
2. Instala dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo .env en la raíz de la carpeta /server y define la variable DATABASE_URL con tu conexión a PostgreSQL.

   ```bash
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/mi_base_de_datos"
   ```

4. Genera el cliente:

   ```bash
   npx prisma generate
   ```
   ```bash
   npx prisma migrate dev --name init
   ```

 5. Levanta el servidor
   ```bash
   npm run start:dev 
   ```


💻 Frontend (/client)

1. Accede a la carpeta de client
   ```bash
   cd client
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Levanta la app 
   ```bash
   ng serve -o
   ```


✅ Requisitos

- Node.js y npm
- PostgreSQL corriendo localmente o en un servidor
- Angular CLI (para el cliente)
- NestJS CLI (opcionalmente, para desarrollo del backend)

📌 Notas

Asegúrate de que la URL de la API del backend esté correctamente configurada en tu cliente Angular para permitir la comunicación.
Si necesitas habilitar CORS en NestJS, puedes hacerlo en el main.ts:

  ```bash
  app.enableCors();
  ```

