package br.com.process.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.bean.CreateProcessSightBean;
import br.com.process.service.ProcessSightService;
import br.com.process.service.UserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/process-sight")
public class ProcessSightController {
    @Autowired
    private UserDetailsServiceImpl userService;
    
    @Autowired
    private ProcessSightService psService;
	
	@GetMapping("/finalizadores")
	public ResponseEntity<?> searchSights() {
		return ResponseEntity.ok(userService.listFinalizadores());
	}
	
	@PostMapping
	public ResponseEntity<?> createSight(@Valid @RequestBody CreateProcessSightBean bean) {
		psService.create(bean);
		return ResponseEntity.ok().build();
	}
}
