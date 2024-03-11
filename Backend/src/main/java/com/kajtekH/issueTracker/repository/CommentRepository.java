package com.kajtekH.issueTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kajtekH.issueTracker.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer>{

}
