package br.com.process.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.process.model.Process;

@Repository
public interface ProcessRepository extends JpaRepository<Process, Integer> {
	public Optional<Process> findById(Integer id);
	
	@Override
	@Query(value = "select p from Process p left join fetch p.sights s left join fetch s.user")
	public List<Process> findAll();
}
