package com.example.yoga.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.yoga.exception.InvalidCertificationException;
import com.example.yoga.model.Instructor;
import com.example.yoga.service.InstructorService;


@RestController
public class InstructorController {

    @Autowired
    private InstructorService service;

    @PostMapping("/addInstructor")
    public ResponseEntity<Instructor> addInstructor(@RequestBody Instructor instructor) {
        // ✅ Validate inside Controller (as per the question)
        if (instructor.getCertification() == null || instructor.getCertification().trim().isEmpty()) {
            throw new InvalidCertificationException("Certification cannot be empty.");
        }
        Instructor savedInstructor = service.addInstructor(instructor);
        return new ResponseEntity<>(savedInstructor, HttpStatus.OK);
    }

    @GetMapping("/getAllInstructors")
    public ResponseEntity<List<Instructor>> getAllInstructors() {
        List<Instructor> instructors = service.getAllInstructors();
        return new ResponseEntity<>(instructors, HttpStatus.OK);
    }

    // ✅ Exception Handler inside Controller
    @ExceptionHandler(InvalidCertificationException.class)
    public ResponseEntity<String> handleInvalidCertification(InvalidCertificationException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}