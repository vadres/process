---------------------- USUARIO -------------------------
CREATE TABLE tb_user (
	id_user SERIAL PRIMARY KEY,
	vl_description CHARACTER VARYING(100) NOT NULL,
	vl_login CHARACTER VARYING(50) NOT NULL,
	vl_email CHARACTER VARYING(100) NOT NULL,
	vl_password CHARACTER VARYING(255) NOT NULL,
	dt_created_at timestamp WITHOUT time ZONE,
	dt_updated_at timestamp WITHOUT time ZONE
	
);

---------------------- PERMISSAO ------------------------
CREATE TABLE tb_role (
	id_role SERIAL PRIMARY KEY,
	vl_description CHARACTER VARYING(80) NOT NULL
);

---------------------- USUARIO PERMISSAO ------------------------
CREATE TABLE tb_user_role (
	id_role INTEGER NOT NULL REFERENCES tb_role(id_role),
	id_user INTEGER NOT NULL REFERENCES tb_user(id_user)	
);

ALTER TABLE tb_user_role ADD PRIMARY KEY (id_user, id_role);


