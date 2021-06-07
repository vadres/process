package br.com.process.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.bean.CreateProcessBean;
import br.com.process.service.ProcessService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/process")
@PreAuthorize("hasAuthority('ADMIN')")
public class ProcessController {
	@Autowired
	private ProcessService service;

	@GetMapping
	public ResponseEntity<?> searchProcess() {
		return ResponseEntity.ok(service.list());
	}

	@PostMapping
	public ResponseEntity<?> createProcess(@Valid @RequestBody CreateProcessBean bean) {
		service.create(bean);
		return ResponseEntity.ok().build();
	}
}
