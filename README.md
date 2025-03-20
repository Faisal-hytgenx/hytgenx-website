# Hytgenx Official Website

This is the official website for **Hytgenx**, built using **Next.js** and deployed on an **AWS EC2 instance**. The website is accessible via the configured domain, with reverse proxy managed by **Nginx**. The FastAPI backend server runs on port `8000`.

---

## Deployment Details

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Backend Framework**: [FastAPI](https://fastapi.tiangolo.com/)
- **Hosting**: AWS EC2 instance with public IP `16.171.142.199`
- **Frontend Domain**: Configured to the instance via Nginx reverse proxy.
- **FastAPI Server**: Runs on `localhost:8000` and is proxied by Nginx.
- **Static File Deployment**: `server.py` serves the static files from the `out` directory.

---

## Prerequisites
- **tmux**: Installed for session management.
- **Node.js**: Required to build and run the Next.js application.
- **Python**: Required to run the `server.py` script.
- **Nginx**: Configured to proxy traffic to the FastAPI and frontend services.

---

## Commands and Workflow

### 1. Start or Attach tmux Session
Use the `website` tmux session to manage the application processes.

- **Create or Attach to the Session**:
  ```bash
  tmux new -s website
  ```
  If the session already exists:
  ```bash
  tmux attach -t website
  ```

---

### 2. Run Development Server
To test the application locally, run the development server.

- **Command**:
  ```bash
  npm run dev
  ```

- **Access**:
  Visit `http://localhost:3000` in your browser.

---

### 3. Build for Production
Generate the static build for deployment.

- **Command**:
  ```bash
  npm run build
  ```

- **Output**:
  The static files will be generated in the `out` folder.

---

### 4. Deploy with `npm serve`
The static files from the `out` folder are served using the `server.py` script.

- **Command**:
  ```bash
  npm install -g serve
  serve out
  ```

- **Steps**:
  1. Ensure the `out` folder exists by running `npm run build`.
  2. Use the `website` tmux session to run `server.py`.

- **Tmux Workflow**:
  - Start or attach to the tmux session:
    ```bash
    tmux new -s website
    ```
  - Run the server in the `out` directory:
    ```bash
    serve out
    ```
  - Detach from the session:
    Press `CTRL + B`, then `D`.

  - Reattach later:
    ```bash
    tmux attach -t website
    ```

---

### 5. Nginx Reverse Proxy
The domain is configured with an Nginx reverse proxy to route traffic:

- **Frontend**: Requests to the domain (e.g., `https://test.hytgenx.co`) are proxied to the Next.js static files served by `npm serve`.
- **Backend**: Requests to the FastAPI server are proxied to `localhost:3000`.

---

## Additional Commands

### Check tmux Sessions
To list active tmux sessions:
```bash
tmux list-sessions
```

### Kill tmux Session
To stop the `website` session:
```bash
tmux kill-session -t website
```
