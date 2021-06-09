package br.com.process.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.process.bean.CreateProcessBean;
import br.com.process.exception.NotFoundException;
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
    
    public List<Process> listSightsOpen(Integer id) {
    	return repository.findSightsOpen(id);
    }
    
    public Process get(Integer id) {
    	Process process = repository.findById(id)
    			                    .orElseThrow(() -> new NotFoundException("Process not found"));
    			                    
        return process;
    }

	public void update(@Valid CreateProcessBean bean) {
		Process process = repository.findById(bean.getId())
                .orElseThrow(() -> new NotFoundException("Process not found"));
		
		process.setDescription(bean.getDescription());
		
		repository.save(process);
	}
}