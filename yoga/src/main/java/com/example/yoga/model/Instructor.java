package com.example.yoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String certification;
    private String yogaSpecialty;
    private String classPreference;
    private String phoneNumber;

    // Constructors
    public Instructor() {}

    public Instructor(String name, String certification, String yogaSpecialty, String classPreference, String phoneNumber) {
        this.name = name;
        this.certification = certification;
        this.yogaSpecialty = yogaSpecialty;
        this.classPreference = classPreference;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public String getYogaSpecialty() {
        return yogaSpecialty;
    }

    public void setYogaSpecialty(String yogaSpecialty) {
        this.yogaSpecialty = yogaSpecialty;
    }

    public String getClassPreference() {
        return classPreference;
    }

    public void setClassPreference(String classPreference) {
        this.classPreference = classPreference;
    }

    public String getPhoneNumber() {
        return phoneNumber != null ? phoneNumber : ""; // null-safe
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
