FROM node:20

# Set the working directory
WORKDIR /workspace

# Install global npm packages if needed
RUN npm install -g npm@latest

# Create a non-root user and set as the default
RUN useradd -ms /bin/bash nodeuser
USER nodeuser

# Ensure the user has the necessary permissions
RUN mkdir -p /workspace && chown -R nodeuser:nodeuser /workspace

# Expose the port Next.js will run on
EXPOSE 3000

# Default command to run when starting the container
CMD ["npm", "run", "dev"]
