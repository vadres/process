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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Data
@Entity
@Table(name = "tb_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_user")	
    private Integer id;
	
	@Column(name = "vl_description")	
    private String name;	
	
	@Column(name = "vl_login")	
    private String login;
	
	@Column(name = "vl_email")	
    private String email;
	
	@Column(name = "vl_password")	
    private String password;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name="tb_user_role",
         joinColumns={@JoinColumn(name="id_user")},
         inverseJoinColumns={@JoinColumn(name="id_role")})
	private List<Role> roles;
	
	@CreationTimestamp
	@Column(name="dt_created_at", updatable = false)
	private LocalDateTime createdAt;
	
	@UpdateTimestamp
	@Column(name="dt_updated_at")
	private LocalDateTime updatedAt;
}
