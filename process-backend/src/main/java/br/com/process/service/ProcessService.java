package br.com.process.service;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.process.repository.ProcessRepository;

public class ProcessService {
    @Autowired
    private ProcessRepository repository;
}
