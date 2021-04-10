FROM gitpod/workspace-full

USER gitpod

 RUN sudo apt-get -q update && \
     sudo npm install -g vercel && \
     sudo rm -rf /var/lib/apt/lists/*