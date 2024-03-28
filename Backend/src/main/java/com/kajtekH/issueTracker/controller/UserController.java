package com.kajtekH.issueTracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kajtekH.issueTracker.exception.ResourceNotFoundException;
import com.kajtekH.issueTracker.model.User;
import com.kajtekH.issueTracker.repository.UserRepository;
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id) {
		
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:" + id));
		return ResponseEntity.ok(user);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetails) {
		
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:" + id));
		user.setEmail(userDetails.getEmail());
		user.setUsername(userDetails.getUsername());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
}
