FROM archlinux:latest AS edit_builder

RUN pacman -Syu --noconfirm yarn

WORKDIR /build
# install dependencies
COPY ./package.json /build/
COPY ./yarn.lock /build/
RUN yarn install

# build app
COPY . /build/
RUN yarn build

FROM ubuntu

ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
#Lets install NGINX
RUN apt-get -y update && apt -y install nginx

#lets expose port 80
EXPOSE 80/tcp
CMD /usr/sbin/nginx && tail -f /dev/null

# let's copy the build
RUN mkdir /www
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=edit_builder /build/dist /www/
