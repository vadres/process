package br.com.process.service;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.process.repository.ProcessSightRepository;

public class ProcessSightService {
    @Autowired
    private ProcessSightRepository repository;
}
