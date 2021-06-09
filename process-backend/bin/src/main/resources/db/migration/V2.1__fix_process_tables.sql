ALTER TABLE tb_process DROP COLUMN id_status;

ALTER TABLE tb_process_sight ADD COLUMN id_user INTEGER NOT NULL;
ALTER TABLE tb_process_sight ADD COLUMN vl_description CHARACTER VARYING(250);
ALTER TABLE tb_process_sight ADD COLUMN id_status INTEGER NOT NULL;

ALTER TABLE tb_process_sight ADD CONSTRAINT process_sight_user_fk 
FOREIGN KEY (id_user) REFERENCES tb_user;

ALTER TABLE tb_process_sight ADD CONSTRAINT process_sight_status_fk 
FOREIGN KEY (id_status) REFERENCES tb_process_status;