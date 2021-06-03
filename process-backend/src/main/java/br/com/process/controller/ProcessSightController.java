package br.com.process.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.service.UserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/process-sight")
public class ProcessSightController {
    @Autowired
    private UserDetailsServiceImpl userService;
	
	@GetMapping
	public ResponseEntity<?> searchUsers() {
		return ResponseEntity.ok(userService.listFinalizadores());
	}
	
}
