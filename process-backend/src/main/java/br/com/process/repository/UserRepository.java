package br.com.process.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.process.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByLogin(String login);
	Optional<User> findById(Integer id);
	
	@Query(value = "select u from User u join fetch u.roles r where r.id = 3 ")
	List<User> findFinalizadores();
}
