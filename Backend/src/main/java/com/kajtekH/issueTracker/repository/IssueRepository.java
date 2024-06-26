package com.kajtekH.issueTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kajtekH.issueTracker.model.Issue;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer>{

}
