FROM nginx:latest

# Remove default Nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy custom index.html to Nginx web root
COPY index.html /usr/share/nginx/html/index.html
