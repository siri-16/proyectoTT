DOCKER INSTALL

$  sudo apt-get update

$  sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    
    
$  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

$ echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
  
$ sudo apt-get update

$  sudo apt-get install docker-ce docker-ce-cli containerd.io

$  sudo docker run hello-world

USAR DOCKER SIN SER ROOT

$ sudo groupadd docker

$ sudo usermod -aG docker $USER 

$ newgrp docker 

$ docker run hello-world


______________________________________

CREAR IMAGEN 

$ docker build -t mysql_tokenizer .

CONSULTAR IMAGENES

$ docker images

INICIAR IMAGEN

$ docker run --rm -v ~/Documentos/DataBaseTokenizer/mysql:/var/lib/mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=true -p 3306:3306 -d mysql_tokenizer

ACCEDER A CONTENEDOR A TRAVÉS DEL SOCKET

$ mysql -u root -p -h 127.0.0.1 -P 3306
