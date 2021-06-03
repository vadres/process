package br.com.process.bean;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CreateProcessSightBean {
    @NotNull
	private Integer user;
    
    @NotNull
    private Integer process;
}
