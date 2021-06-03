package br.com.process.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.process.bean.CreateUserBean;
import br.com.process.bean.UserDetailsBean;
import br.com.process.exception.NotFoundException;
import br.com.process.model.Role;
import br.com.process.model.User;
import br.com.process.repository.RoleRepository;
import br.com.process.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements  org.springframework.security.core.userdetails.UserDetailsService {
	@Autowired
    UserRepository userRepo;
	
	@Autowired
    RoleRepository roleRepo;
    
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findByLogin(username).orElseThrow();
		
		return UserDetailsBean.build(user);
	}	
	
	public List<UserDetailsBean> list() {
		return userRepo.findAll()
				   .stream()
				   .map(u -> UserDetailsBean.build(u))
				   .collect(Collectors.toList());
	}
	
	public List<UserDetailsBean> listFinalizadores() {
		return userRepo.findFinalizadores()
				   .stream()
				   .map(u -> UserDetailsBean.build(u))
				   .collect(Collectors.toList());
	}
	
	public UserDetailsBean get(Integer id) {
		User user = userRepo.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
		
		return UserDetailsBean.build(user);
	}
	
	public Integer remove(Integer id) {
		userRepo.delete(
			userRepo.findById(id).orElseThrow(() -> new NotFoundException("User not found"))
		);
		
		return id;
	}
		
	public UserDetails create(CreateUserBean bean) {
		String password = passwordEncoder.encode(bean.getPassword());
		bean.setPassword(password);
		
		return save(bean.toUser(), bean.getRole());
	}
	
	public UserDetails update(CreateUserBean bean) {
		String password = passwordEncoder.encode(bean.getPassword());
		bean.setPassword(password);
		
		User user = userRepo.findByLogin(bean.getUsername())
				        .orElseThrow(() -> new NotFoundException("User not found"));
		
		user.setName(bean.getName());
		user.setEmail(bean.getEmail());
		user.setPassword(passwordEncoder.encode(bean.getPassword()));
		user.setLogin(bean.getUsername());
		
		return save(user, bean.getRole());
	}
	
	private UserDetails save(User bean, String roleStr) {
		Role role = roleRepo.findByDescription(roleStr)
				        .orElseThrow(() -> new NotFoundException("Role not found"));
		
		var roles = new ArrayList<Role>();
		roles.add(role);
		
		bean.setRoles(roles);
		
		User user = userRepo.save(bean);
		return UserDetailsBean.build(user);
	}
	
	
}
