# IS2_PRACTICA-1
Ambiente de Trabajo: React.js, Next.js, y PostgreSQL.

Actualiza los paquetes:
sudo apt update && sudo apt upgrade -y

Instala Node.js y npm:
sudo apt install -y nodejs npm

Instala el manejador de versiones de Node (opcional pero recomendado):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install --lts

Instala Yarn (opcional pero recomendado para trabajar con React/Next.js):
npm install --global yarn

Instala librerías adicionales necesarias para React/Next.js:
yarn add axios react-query

Instala PostgreSQL en tu distribución de WSL2:
sudo apt install -y postgresql postgresql-contrib

Inicia el servicio de PostgreSQL:
sudo service postgresql start

Accede al shell de PostgreSQL:
sudo -u postgres psql