package br.com.process.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.process.bean.JwtBean;
import br.com.process.bean.LoginBean;
import br.com.process.bean.UserDetailsBean;
import br.com.process.security.jwt.JwtGen;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtGen jwtGen;
    
	@PostMapping(path = "/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginBean loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtGen.createToken(authentication);
		
		UserDetailsBean userDetails = (UserDetailsBean) authentication.getPrincipal();		
		
		return ResponseEntity.ok(new JwtBean(jwt, userDetails));
	}
	
}