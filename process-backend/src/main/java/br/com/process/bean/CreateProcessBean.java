package br.com.process.bean;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class CreateProcessBean {
	private Integer id;
	
	@NotEmpty
    private String description;
}
