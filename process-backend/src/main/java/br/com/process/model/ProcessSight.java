package br.com.process.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_process_sight")
public class ProcessSight {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_process_sight")	
    private Integer id;
	
	@Column(name = "vl_description")	
    private String description;	
	
	@Column(name = "id_process")
	private Integer process;

	@ManyToOne
	@JoinColumn(name = "id_user")
	private User user;
	
	@Column(name = "id_status")
	private Integer status;
}
