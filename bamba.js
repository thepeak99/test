- trigger: github.push
  actions:
    - build: Dockerfile.test
      volumes:
        - /pito: /pito
        - /tmp: /code

    - image: bamba/npmbuild

    - image: testo
      build: Dockerfile.testo
      volumes:
        - data: /data
        - pito: /root/pito

    - image: docker_push
      params: 
        repo: pito


