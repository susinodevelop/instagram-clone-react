FROM node:20

# Install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /workspace

# Install global npm packages if needed
RUN npm install -g npm@latest

# Create a non-root user and set as the default
RUN useradd -ms /bin/bash nodeuser
USER nodeuser

# Expose the port Next.js will run on
EXPOSE 3000

# Default command to run when starting the container
CMD ["npm", "run", "dev"]
