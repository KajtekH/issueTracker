package com.kajtekH.issueTracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.kajtekH.issueTracker.model.User;
import com.kajtekH.issueTracker.repository.UserRepository;

public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
}
