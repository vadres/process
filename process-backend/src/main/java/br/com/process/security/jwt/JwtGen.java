package br.com.process.security.jwt;

import java.time.ZonedDateTime;
import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import br.com.process.bean.UserDetailsBean;

@Component
public class JwtGen {
    public String createToken(Authentication auth) {
    	UserDetailsBean userDetails = (UserDetailsBean) auth.getPrincipal();
    	
    	Date expirationDate = Date.from(ZonedDateTime.now().plusMinutes(50).toInstant());
        
    	Algorithm algotithm = Algorithm.HMAC512("SECRET");
    	
    	return JWT.create()
    			  .withExpiresAt(expirationDate)
    			  .withClaim("user", userDetails.getUsername())
    			  .withClaim("id", userDetails.getId())
    			  .sign(algotithm);
    }
	
    public boolean verifyToken(String token) {
    	
    	try {
	    	Algorithm algotithm = Algorithm.HMAC512("SECRET");
	    	JWTVerifier verifier = JWT.require(algotithm).build();
	    	
	    	@SuppressWarnings("unused")
			DecodedJWT decoded = verifier.verify(token);
	    	return true;
    	} catch (Exception e) {
			return false;
		}
    	
    }
    
	public String getUsername(String token) {
	    	
	    	try {
		    	Algorithm algotithm = Algorithm.HMAC512("SECRET");
		    	JWTVerifier verifier = JWT.require(algotithm).build();
		    	
		    	DecodedJWT decoded = verifier.verify(token);
		    	return decoded.getClaims().get("user").asString();
	    	} catch (Exception e) {
				return null;
			}
	    	
	    }
}
