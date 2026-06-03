# Use Nginx on lightweight Alpine Linux
FROM nginx:1.25-alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy website files to the default Nginx html serving directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY config.js /usr/share/nginx/html/

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (HTTP)
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
