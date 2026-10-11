alias dev := run

# Run the development server
run *args:
    npm run dev -- {{args}}

# Start the dev server in the background
start *args:
    npx astro dev --background {{args}}

# Stop the background dev server
stop:
    npx astro dev stop

# Check background dev server status
status:
    npx astro dev status

# View background dev server logs
logs *args:
    npx astro dev logs {{args}}

# Build the project for production
build *args:
    npm run build -- {{args}}

# Preview the production build locally
preview *args:
    npm run preview -- {{args}}
