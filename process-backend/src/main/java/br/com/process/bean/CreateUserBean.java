package br.com.process.bean;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import br.com.process.model.User;
import lombok.Data;

@Data
public class CreateUserBean {
	@NotBlank
	@Size(max = 100, min = 3)
	private String username;

	@NotBlank
	@Size(max = 100, min = 3)
	private String name;

	@NotBlank
	@Email
	private String email;

	@NotBlank
	private String password;
	
	@NotBlank
	private String role;

	public User toUser() {
		User user = new User();
		user.setName(this.name);
		user.setLogin(this.username);
		user.setEmail(this.email);
		user.setPassword(this.password);

		return user;
	}
}
