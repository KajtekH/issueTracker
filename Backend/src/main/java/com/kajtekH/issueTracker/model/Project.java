package com.kajtekH.issueTracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "description")
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "manager_id")
	private User manager;

	public Project() {
		
	}
	
	public Project(String projectName, String description, User manager) {
		super();
		this.projectName = projectName;
		this.description = description;
		this.manager = manager;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectName() {	
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getManager() {
		return manager;
	}

	public void setManager(User manager) {				
		this.manager = manager;				
	}
	
	
	
}
