package br.com.process.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_role")
public class Role {
	@Id
	@Column(name = "id_role")	
    private Integer id;
	
	@Column(name = "vl_description")	
    private String description;	
	
}
