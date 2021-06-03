package br.com.process.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.bean.CreateUserBean;
import br.com.process.service.UserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/user")
@PreAuthorize("hasAuthority('ADMIN')")
public class UserController {
    @Autowired
    private UserDetailsServiceImpl service;
	
	@GetMapping
	public ResponseEntity<?> searchUsers(@RequestParam(name = "id", required = false) Integer id) {
		if (id != null) 
			return ResponseEntity.ok(service.get(id));
		
		return ResponseEntity.ok(service.list());
	}
	
	@PostMapping
	public ResponseEntity<?> createUser(@Valid @RequestBody CreateUserBean bean) {
		return ResponseEntity.ok(service.create(bean));
	}
	
	@PutMapping
	public ResponseEntity<?> updateUser(@Valid @RequestBody CreateUserBean bean) {
		return ResponseEntity.ok(service.update(bean));
	}
	
	@DeleteMapping
	public ResponseEntity<?> removeUser(@RequestParam(name = "id", required = true) Integer id) {
		return ResponseEntity.ok(service.remove(id));
	}
}
