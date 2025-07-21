package com.example.yoga.service;

import com.example.yoga.model.Instructor;
import com.example.yoga.repository.InstructorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepo instructorRepo;

    public Instructor addInstructor(Instructor instructor) {
        return instructorRepo.save(instructor);
    }

    public List<Instructor> getAllInstructors() {
        return instructorRepo.findAll();
    }
}
