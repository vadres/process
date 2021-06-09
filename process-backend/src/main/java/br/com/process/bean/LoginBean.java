package br.com.process.bean;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class LoginBean {
	@NotBlank
	@Size(max = 100, min = 4)
	private String username;

	@NotBlank
	private String password;
}
