
CREATE TABLE Cliente (
                rfc VARCHAR(18) NOT NULL,
                descripcion VARCHAR(500) NOT NULL,
                fechaCreacion DATETIME NOT NULL,
                habilitado BOOLEAN NOT NULL,
                fechaActualizacion DATETIME NOT NULL,
                PRIMARY KEY (rfc)
);


CREATE TABLE Token_PAN (
                rfc VARCHAR(18) NOT NULL,
                pan VARCHAR(16) NOT NULL,
                token VARCHAR(16) NOT NULL,
                vigencia BOOLEAN NOT NULL,
                fechaActualizacion DATETIME NOT NULL,
                fechaCreacion DATETIME NOT NULL,
                PRIMARY KEY (rfc, pan)
);


CREATE TABLE Usuario (
                rfc VARCHAR(18) NOT NULL,
                nombreUsuario VARCHAR(50) NOT NULL,
                contrasenia VARCHAR(15) NOT NULL,
                email VARCHAR(50) NOT NULL,
                PRIMARY KEY (rfc, nombreUsuario)
);


CREATE TABLE Direccion (
                rfc VARCHAR(18) NOT NULL,
                idDireccion VARCHAR(10) NOT NULL,
                estado VARCHAR(100) NOT NULL,
                delegacionMunicipio VARCHAR(100) NOT NULL,
                codigoPostal VARCHAR(5) NOT NULL,
                numero VARCHAR(10) NOT NULL,
                calle VARCHAR(100) NOT NULL,
                PRIMARY KEY (rfc, idDireccion)
);


CREATE TABLE Persona (
                rfc VARCHAR(18) NOT NULL,
                primerNombre VARCHAR(100) NOT NULL,
                segundoNombre VARCHAR(100),
                apellidoPaterno VARCHAR(100) NOT NULL,
                apellidoMaterno VARCHAR(100) NOT NULL,
                PRIMARY KEY (rfc)
);


CREATE TABLE Servicio (
                rfc VARCHAR(18) NOT NULL,
                numeroContrato VARCHAR(10) NOT NULL,
                descripcion VARCHAR(500) NOT NULL,
                tipoServicio VARCHAR(100) NOT NULL,
                fechaActualizacion DATETIME NOT NULL,
                fechaCreacion DATETIME NOT NULL,
                habilitado BOOLEAN NOT NULL,
                algoritmo VARCHAR(100) NOT NULL,
                cifrado VARCHAR(100) NOT NULL,
                contrato BINARY NOT NULL,
                costoServicioAnual DOUBLE PRECISION NOT NULL,
                PRIMARY KEY (rfc, numeroContrato)
);


CREATE TABLE Comercio (
                rfc VARCHAR(18) NOT NULL,
                regimen VARCHAR(100) NOT NULL,
                razonSocial VARCHAR(100) NOT NULL,
                nombreComercio VARCHAR(500) NOT NULL,
                sucursal VARCHAR(100) NOT NULL,
                PRIMARY KEY (rfc)
);


ALTER TABLE Persona ADD CONSTRAINT cliente_persona_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Comercio ADD CONSTRAINT cliente_comercio_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Direccion ADD CONSTRAINT cliente_direccion_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Usuario ADD CONSTRAINT cliente_usuario_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Token_PAN ADD CONSTRAINT cliente_token_pan_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Servicio ADD CONSTRAINT cliente_servicio_fk
FOREIGN KEY (rfc)
REFERENCES Cliente (rfc)
ON DELETE CASCADE
ON UPDATE CASCADE;
