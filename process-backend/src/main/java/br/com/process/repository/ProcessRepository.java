package br.com.process.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.process.model.Process;

@Repository
public interface ProcessRepository extends JpaRepository<Process, Integer> {
	@Query(value = "select p from Process p left join fetch p.sights s left join fetch s.user where p.id = ?1")
	public Optional<Process> findById(Integer id);
	
	@Query(value = "select p from Process p inner join fetch p.sights s inner join fetch s.user u where p.id = ?1 and u.id = ?2")
	public Optional<Process> findByIdAndUser(Integer id, Integer user);
	
	@Override
	@Query(value = "select p from Process p left join fetch p.sights s left join fetch s.user")
	public List<Process> findAll();
}
