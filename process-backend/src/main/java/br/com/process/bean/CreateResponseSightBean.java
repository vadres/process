package br.com.process.bean;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CreateResponseSightBean {
    @NotEmpty
	private String description;
	
    @NotNull
    private Integer process;
	
	@NotNull
	private Integer user;
	
}
