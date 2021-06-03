package br.com.process.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.process.bean.CreateProcessSightBean;
import br.com.process.exception.NotFoundException;
import br.com.process.model.ProcessSight;
import br.com.process.model.User;
import br.com.process.model.enums.ProcessStatusEnum;
import br.com.process.repository.ProcessRepository;
import br.com.process.repository.ProcessSightRepository;
import br.com.process.repository.UserRepository;

@Service
public class ProcessSightService {
    @Autowired
    private ProcessSightRepository repo;

    @Autowired
    private ProcessRepository processRepo;
    
    @Autowired
    private UserRepository userRepo;
   
	public void create(CreateProcessSightBean bean) {
		processRepo.findById(bean.getProcess())
		           .orElseThrow(() -> new NotFoundException("Process not found"));
		
		User user = userRepo.findById(bean.getUser())
				        .orElseThrow(() -> new NotFoundException("User not found"));
		
		var processSight = new ProcessSight();
		processSight.setProcess(bean.getProcess());
		processSight.setUser(user);
		processSight.setStatus(ProcessStatusEnum.PENDENTE.ordinal());
		
		repo.save(processSight);
	}
}
