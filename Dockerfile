FROM node
RUN mkdir /home/project
COPY . /home/project
WORKDIR  /home/project
# The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime
EXPOSE 8080

# The CMD instruction provides default execution command for an container
# Start Nginx and keep it from running background
CMD  node /home/project/bin/www
