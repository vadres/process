package br.com.process.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.process.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByLogin(String login);
}
