CREATE TABLE tb_process (
	id_process SERIAL PRIMARY KEY,
	vl_description CHARACTER VARYING(100) NOT NULL,
	
	id_status INTEGER NOT NULL, 
	dt_created_at timestamp WITHOUT time ZONE,
	dt_updated_at timestamp WITHOUT time ZONE
);

CREATE TABLE tb_process_status (
    id_process_status SERIAL PRIMARY KEY,
    vl_description CHARACTER VARYING(100) NOT NULL
);

ALTER TABLE tb_process ADD CONSTRAINT process_status_fk 
FOREIGN KEY (id_status) REFERENCES tb_process_status;

CREATE TABLE tb_process_sight (
	id_process_sight SERIAL PRIMARY KEY,
	id_process INTEGER NOT NULL
);

ALTER TABLE tb_process_sight ADD CONSTRAINT process_sight_fk 
FOREIGN KEY (id_process) REFERENCES tb_process;
