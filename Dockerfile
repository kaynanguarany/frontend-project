FROM node:alpine
ENV REACT_APP_URL_API=http://shortenedurlapi-env.eba-hmyteghu.sa-east-1.elasticbeanstalk.com
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html