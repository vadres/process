package br.com.process.bean;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtBean {
    private String token;
    private UserDetails userDetails;
}
