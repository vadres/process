package br.com.process.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_role")
public class Role implements GrantedAuthority {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id_role")	
    private Integer id;
	
	@Column(name = "vl_description")	
    private String description;

	@Override
	public String getAuthority() {
		return description;
	}	
	
}
