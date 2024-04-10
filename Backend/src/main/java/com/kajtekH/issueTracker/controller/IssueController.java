package com.kajtekH.issueTracker.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kajtekH.issueTracker.exception.ResourceNotFoundException;
import com.kajtekH.issueTracker.model.Issue;
import com.kajtekH.issueTracker.repository.IssueRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class IssueController {

	@Autowired
	private IssueRepository issueRepository;
	
	@GetMapping("/issues")
	public List<Issue> getIssueList(){
		return issueRepository.findAll();
	}
	
	@PostMapping("/issues")
	public Issue createIssue(@RequestBody Issue issue) {
		return issueRepository.save(issue);
	}
	
	@GetMapping("/issues/{id}")
	public  ResponseEntity<Issue> getIssueById(@PathVariable int id){
		Issue issue = issueRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Issue does not exist with id:" + id));
		return ResponseEntity.ok(issue);
	}
	
	@GetMapping("/projects/{projectId}/issues")
	public List<Issue> getIssuesByProjectId(@PathVariable Integer projectId){
		return issueRepository.findByProject_Id(projectId);
	}
	
	@PutMapping("/issues/{id}")
	public ResponseEntity<Issue> updateIssue(@PathVariable int id, @RequestBody Issue issueDetails){
		Issue issue = issueRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Issue does not exist with id:" + id));
		issue.setDeadline(issueDetails.getDeadline());
		issue.setDescription(issueDetails.getDescription());
		issue.setIssueName(issueDetails.getIssueName());
		issue.setProject(issueDetails.getProjectId());
		Issue updatedIssue = issueRepository.save(issue);
		return ResponseEntity.ok(updatedIssue);
	}
	
	@DeleteMapping("/issues/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteIssue(@PathVariable int id){
		Issue issue = issueRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Issue does not exist with id:" + id));
		issueRepository.delete(issue);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
