package br.com.process.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.process.bean.CreateProcessBean;
import br.com.process.model.Process;
import br.com.process.repository.ProcessRepository;

@Service
public class ProcessService {
    @Autowired
    private ProcessRepository repository;
    
    public void create(CreateProcessBean bean) {
		var process = new Process();
		process.setDescription(bean.getDescription());
		
		repository.save(process);
	}
    
    public List<Process> list() {
    	return repository.findAll();
    }
}