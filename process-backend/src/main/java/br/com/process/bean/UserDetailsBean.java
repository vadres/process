package br.com.process.bean;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;

public class UserDetailsBean implements UserDetails {
    private static final long serialVersionUID = 1L;

	@Getter
    private Long id;

    @Getter
    private String username;

    @Getter
    private String email;

    @Getter
    private String name;

    @Getter
    @JsonIgnore
	private String password;

    @Getter 
    @JsonIgnore
    private Collection<? extends GrantedAuthority> authorities;
    
	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	@Override
	public boolean isEnabled() {
		return false;
	}

}
