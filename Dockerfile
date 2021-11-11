## build environment
#FROM node:14-alpine as react-build
#WORKDIR /app
#COPY . ./
#RUN yarn
#RUN yarn build
#
## server environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/configfile.template
#
#COPY --from=react-build /app/build /usr/share/nginx/html
#
#ENV PORT 8080
#ENV HOST 0.0.0.0
#EXPOSE 8080
#CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"




# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
