# Utilizar una imagen de Node.js LTS (Long-Term Support)
FROM node:lts

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo el archivo package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar las dependencias utilizando npm ci
RUN npm ci

# Copiar todo el contenido del proyecto (excepto node_modules, ya que ya está instalado)
COPY . .

# Exponer el puerto 5173 (el puerto especificado en tu vite.config.js)
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]