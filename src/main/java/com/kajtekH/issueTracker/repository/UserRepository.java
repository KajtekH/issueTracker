package com.kajtekH.issueTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kajtekH.issueTracker.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
