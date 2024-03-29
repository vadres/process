package br.com.process.bean;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.process.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class UserDetailsBean implements UserDetails {
    private static final long serialVersionUID = 1L;

	@Getter
    private Long id;

    @Getter
    private String username;

    @Getter
    private String name;
    
    @Getter
    private String email;

    @Getter
    @JsonIgnore
	private String password;

    @Getter 
    private Collection<? extends GrantedAuthority> authorities;
        
	@Override
	@JsonIgnore
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isEnabled() {
		return true;
	}
	
	public static UserDetailsBean build(User user) {
		return new UserDetailsBean(
			Long.valueOf(user.getId()),
			user.getLogin(),
			user.getName(),
			user.getEmail(),
			user.getPassword(),
			user.getRoles()
		);
	}

}
