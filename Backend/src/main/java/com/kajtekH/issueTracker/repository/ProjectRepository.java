package com.kajtekH.issueTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kajtekH.issueTracker.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{

}
