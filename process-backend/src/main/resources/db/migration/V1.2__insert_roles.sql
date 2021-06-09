insert into tb_role(vl_description) values ('ADMIN');

insert into tb_role(vl_description) values ('TRIADOR');

insert into tb_role(vl_description) values ('FINALIZADOR');
            
--ADMIN
insert into tb_user_role(id_user, id_role) values (1, 1);
--TRIADOR
insert into tb_user_role(id_user, id_role) values (2, 2);
--FINALIZADORES
insert into tb_user_role(id_user, id_role) values (3, 3);
insert into tb_user_role(id_user, id_role) values (4, 3);    
insert into tb_user_role(id_user, id_role) values (5, 3);    
            