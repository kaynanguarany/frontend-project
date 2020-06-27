FROM node:alpine
ENV REACT_APP_URL_API=http://shortenedurlapi-env.eba-hmyteghu.sa-east-1.elasticbeanstalk.com
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]