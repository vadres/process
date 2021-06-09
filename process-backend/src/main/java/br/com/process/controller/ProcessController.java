package br.com.process.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.bean.CreateProcessBean;
import br.com.process.service.ProcessService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/process")
public class ProcessController {
	@Autowired
	private ProcessService service;

	@GetMapping
	@PreAuthorize("hasAuthority('TRIADOR')")
	public ResponseEntity<?> searchProcess(@RequestParam(name = "id", required = false) Integer id) {
		if (id != null) 
			return ResponseEntity.ok(service.get(id));
		
		return ResponseEntity.ok(service.list());
	}
	
	@GetMapping("/sights/open")
	@PreAuthorize("hasAuthority('FINALIZADOR')")
	public ResponseEntity<?> searchProcessSightOpen(@RequestParam(name = "id", required = true) Integer id) {
		return ResponseEntity.ok(service.listSightsOpen(id));
	}

	@PostMapping
	@PreAuthorize("hasAuthority('TRIADOR')")
	public ResponseEntity<?> createProcess(@Valid @RequestBody CreateProcessBean bean) {
		service.create(bean);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping
	@PreAuthorize("hasAuthority('TRIADOR')")
	public ResponseEntity<?> updateProcess(@Valid @RequestBody CreateProcessBean bean, @RequestParam(name = "id", required = false) Integer id) {
		bean.setId(id);
		service.update(bean);
		return ResponseEntity.ok().build();
	}
}
