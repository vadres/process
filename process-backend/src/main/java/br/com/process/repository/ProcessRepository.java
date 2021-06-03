package br.com.process.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.process.model.Process;

@Repository
public interface ProcessRepository extends JpaRepository<Process, Integer> {
	Optional<Process> findById(Integer id);
}
