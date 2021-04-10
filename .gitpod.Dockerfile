FROM gitpod/workspace-full

USER gitpod

 RUN sudo apt-get -q update && \
     #sudo apt-get install -yq curl && \
     #curl -fsSL http://bit.ly/get-node-sh | sh && \
     #sudo npm install -g vercel && \
     sudo rm -rf /var/lib/apt/lists/*
