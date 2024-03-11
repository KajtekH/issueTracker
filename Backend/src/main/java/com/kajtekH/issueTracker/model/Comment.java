package com.kajtekH.issueTracker.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "comments")
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name ="user_id")
	private int userId;
	
	@Column(name ="issue_id")
	private int issueId;
	
	@Column(name ="content")
	private String content;
	
	@Column(name ="created_at")
	private LocalDateTime creationTime;
	
	@Column(name ="updated_at")
	private LocalDateTime updatetime;

	public Comment() {
		
	}
	
	public Comment(int userId, int issueId, String content, LocalDateTime creationTime, LocalDateTime updatetime) {
		super();
		this.userId = userId;
		this.issueId = issueId;
		this.content = content;
		this.creationTime = creationTime;
		this.updatetime = updatetime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getIssueId() {
		return issueId;
	}

	public void setIssueId(int issueId) {
		this.issueId = issueId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getCreationTime() {
		return creationTime;
	}

	public void setCreationTime(LocalDateTime creationTime) {
		this.creationTime = creationTime;
	}

	public LocalDateTime getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(LocalDateTime updatetime) {
		this.updatetime = updatetime;
	}
	
	
}
