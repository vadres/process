package br.com.process.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.process.model.ProcessSight;

@Repository
public interface ProcessSightRepository extends JpaRepository<ProcessSight, Integer> {
	@Query(value = "select ps from ProcessSight ps join fetch ps.user join fetch ps.process where user.id = $1 and status = 1 ")
	public List<ProcessSight> findOpenSight(Integer idUser);
	
	Optional<ProcessSight> findById(Integer id);
}
