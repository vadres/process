package br.com.process.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.process.bean.UserDetailsBean;
import br.com.process.exception.NotFoundException;
import br.com.process.model.User;
import br.com.process.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements  org.springframework.security.core.userdetails.UserDetailsService {
	@Autowired
    UserRepository repo;
    
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repo.findByLogin(username).orElseThrow();
		
		return UserDetailsBean.build(user);
	}	
	
	public List<UserDetailsBean> list() {
		return repo.findAll()
				   .stream()
				   .map(u -> UserDetailsBean.build(u))
				   .collect(Collectors.toList());
	}
	
	public UserDetailsBean get(Integer id) {
		User user = repo.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
		
		return UserDetailsBean.build(user);
	}
}
