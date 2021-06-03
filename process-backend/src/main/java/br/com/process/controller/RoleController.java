package br.com.process.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.repository.RoleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/role")
public class RoleController {
    @Autowired
    private RoleRepository repo;
	
	@GetMapping
	public ResponseEntity<?> searchRoles(@RequestParam(name = "id", required = false) Integer id) {
		
		return ResponseEntity.ok(repo.findAll());
	}
	
}
