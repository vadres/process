package br.com.process.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_process")
public class Process {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_process")	
    private Integer id;
	
	@Column(name = "vl_description")	
    private String description;	
	
	@OneToMany(mappedBy = "process", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<ProcessSight> sights;
	
	@JsonIgnore
	@CreationTimestamp
	@Column(name="dt_created_at", updatable = false)
	private LocalDateTime createdAt;
	
	@JsonIgnore
	@UpdateTimestamp
	@Column(name="dt_updated_at")
	private LocalDateTime updatedAt;

}
