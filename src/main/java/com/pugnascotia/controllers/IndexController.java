package com.pugnascotia.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexController {

	@GetMapping("/greeting")
	public String greeting(@RequestParam(value="toggle[]") String[] toggles,  Model model) {
		//String[] toggles = {"feature1", "feature2"};
		model.addAttribute("toggles", toggles);
		return "greeting";
	}

}



