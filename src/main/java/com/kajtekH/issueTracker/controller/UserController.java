package com.kajtekH.issueTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.kajtekH.issueTracker.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String viewUserList(Model model) {
		model.addAttribute("listUsers", userService.getAllUsers());
		return "index";
	}
}
