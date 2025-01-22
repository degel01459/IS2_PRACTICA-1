# IS2_PRACTICA-1
## Ambiente de Trabajo: React.js, Next.js y PostgreSQL

Este proyecto está diseñado para trabajar en un entorno que utiliza **React.js** y **Next.js** para el frontend, y **PostgreSQL** como sistema de gestión de bases de datos. A continuación, se detallan los pasos para configurar el entorno de desarrollo en un sistema basado en Ubuntu (y WSL2 para Windows).

### Pasos para Configurar el Entorno

1. **Actualiza los paquetes del sistema:**
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```

2. **Instala Node.js y npm:**
    ```bash
    sudo apt install -y nodejs npm
    ```

3. **Instala el manejador de versiones de Node (NVM) - Opcional pero recomendado:**
    NVM (Node Version Manager) permite instalar y administrar múltiples versiones de Node.js en tu entorno de desarrollo. Es especialmente útil si necesitas cambiar entre diferentes versiones de Node.js.
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    ```

4. **Instala Yarn - Opcional pero recomendado:**
    Yarn es un administrador de paquetes alternativo a npm que es ampliamente utilizado en proyectos con React.js/Next.js. Permite una gestión más rápida y predecible de dependencias.
    ```bash
    npm install --global yarn
    ```

5. **Instala librerías adicionales necesarias para React/Next.js:**
    Estas bibliotecas ayudan a manejar las peticiones HTTP (axios) y el manejo de estado de datos (react-query), dos herramientas útiles para las aplicaciones basadas en React y Next.js.
    ```bash
    yarn add axios react-query
    ```

6. **Instala PostgreSQL en tu distribución de WSL2 (o Linux):**
    PostgreSQL es el sistema de gestión de bases de datos que utilizamos en este proyecto.
    ```bash
    sudo apt install -y postgresql postgresql-contrib
    ```

7. **Inicia el servicio de PostgreSQL:**
    ```bash
    sudo service postgresql start
    ```

8. **Accede al shell de PostgreSQL:**
    Desde aquí puedes interactuar con tu base de datos PostgreSQL.
    ```bash
    sudo -u postgres psql
    ```

---

## Flujo de trabajo de Git

Este proyecto sigue el flujo de trabajo de **Git Flow**, que es un enfoque estructurado para gestionar las ramas y versiones en proyectos de software.

### Ramas principales

1. **`main`**: 
   - **Objetivo**: Contiene la versión estable y lista para producción del código. Esta rama debe estar siempre en un estado funcional.
   - **Uso**: Solo se debe hacer merge a `main` desde `staging` cuando se esté listo para el despliegue.

2. **`develop`**: 
   - **Objetivo**: Es la rama de desarrollo donde se integran las nuevas funcionalidades y correcciones antes de pasar a producción.
   - **Uso**: Los desarrolladores deben hacer merge de sus ramas de características (`feature-frontend`, `feature-backend`) en `develop`.

3. **`feature-frontend`**:
   - **Objetivo**: Rama para el desarrollo de funcionalidades relacionadas con el frontend (interfaz de usuario).
   - **Uso**: Se crea a partir de `develop` para trabajar en nuevas características de la interfaz, como pantallas, componentes, y lógica de UI. Una vez completada, se fusiona nuevamente en `develop`.

4. **`feature-backend`**:
   - **Objetivo**: Rama para el desarrollo de funcionalidades relacionadas con el backend (lógica de negocio, API, etc.).
   - **Uso**: Similar a `feature-frontend`, pero para trabajar en la parte del servidor y la base de datos. Esta rama también se fusiona en `develop` cuando se completa.

5. **`staging`**: 
   - **Objetivo**: Entorno de pre-producción donde se prueban todas las nuevas funcionalidades antes de ser lanzadas en producción.
   - **Uso**: Se crea una rama `staging` desde `develop` cuando se tienen cambios listos para ser probados en un entorno más cercano a la producción. Si las pruebas son satisfactorias, se hace merge a `main`.

---

### Flujo de trabajo

1. **Desarrollo de nuevas funcionalidades**:
   - Las nuevas características deben desarrollarse en ramas separadas, como `feature-frontend` o `feature-backend`, según el área del proyecto que se esté trabajando.
   - Al terminar, estas ramas se deben fusionar en `develop`.

2. **Integración continua en `develop`**:
   - La rama `develop` debe ser la base para todas las pruebas continuas de integración. Cada vez que se haga merge de una rama de características, se ejecutarán los tests para asegurarse de que el código sigue funcionando correctamente.

3. **Pruebas en `staging`**:
   - Una vez que el código de `develop` esté listo para la pre-producción, se crea un Pull Request a la rama `staging`.
   - En esta rama se realizan las pruebas finales, asegurándose de que todo funcione correctamente en un entorno cercano a producción.

4. **Despliegue a producción desde `main`**:
   - Cuando las pruebas en `staging` son satisfactorias, se hace el merge a `main`.
   - `main` debe estar siempre en estado estable, listo para ser desplegado a producción.

---

### Resumen

```markdown
## Flujo de trabajo de Git

Este proyecto sigue el flujo de trabajo basado en Git Flow para una gestión eficiente de ramas y versiones.

### Ramas principales

1. **`main`**: Contiene la versión estable y lista para producción.
2. **`develop`**: Rama de desarrollo donde se integran todas las funcionalidades antes de ser lanzadas a producción.
3. **`feature-frontend`**: Rama para el desarrollo de funcionalidades en el frontend.
4. **`feature-backend`**: Rama para el desarrollo de funcionalidades en el backend.
5. **`staging`**: Entorno de pre-producción para realizar pruebas finales antes del despliegue a producción.

### Flujo de trabajo

1. **Desarrollo**: Las nuevas características deben ser desarrolladas en ramas `feature-frontend` o `feature-backend` y luego fusionadas a `develop`.
2. **Pruebas**: Una vez que las funcionalidades estén completas, se fusionan a `staging` para realizar pruebas finales.
3. **Despliegue**: Una vez validadas las pruebas en `staging`, se fusiona a `main` y se despliega a producción.

Recuerda siempre seguir este flujo para mantener el código organizado y evitar problemas en producción.
