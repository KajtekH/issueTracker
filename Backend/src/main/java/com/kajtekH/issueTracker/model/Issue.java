package com.kajtekH.issueTracker.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "issues")
public class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "issue_name")
	private String issueName;

	@ManyToOne
	@JoinColumn(name = "project_id")
	private Project project;

	@Column(name = "deadline")
	private LocalDate deadline;
	
	@Column(name = "description")
	private String description;
	
	public Issue() {
		
	}
	
	public Issue(String issueName, Project project, LocalDate deadline, String description) {
		super();
		this.issueName = issueName;
		this.project = project;
		this.deadline = deadline;
		this.description = description;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getIssueName() {
		return issueName;
	}
	public void setIssueName(String issueName) {
		this.issueName = issueName;
	}
	public Project getProjectId() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public LocalDate getDeadline() {
		return deadline;
	}
	public void setDeadline(LocalDate deadline) {
		this.deadline = deadline;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
