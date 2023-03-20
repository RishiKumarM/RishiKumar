package com.botlie.employeeAssimilation.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.service.AdminDetailService;

@RestController
@RequestMapping("/adminDetails")
@CrossOrigin(origins = "*")
public class AdminDetailsController {
	
	@Autowired
	private AdminDetailService service;
	
	@GetMapping("/get")
	public List<AdminDetail> getAllAdminDetail(){
		return this.service.getAllAdminDetail();
	}
	
	//1.save AdminDetail
	@PostMapping("/post")
	public AdminDetail postAdminDetail(@RequestBody AdminDetail adminDetail){
		return this.service.postAdminDetail(adminDetail);
	}
	
	@PutMapping("/update/{id}")
	public AdminDetail updateAdminDtail(@PathVariable("id") int id, @RequestBody AdminDetail adminDetail) {
		return this.service.updataAdminDetail(id, adminDetail);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteAdminDetailById(@PathVariable("id") int id) {
		this.service.deleteAdminDetailById(id);
	}
	
	@GetMapping("/get/{id}")
	public AdminDetail getAdminDetailById(@PathVariable("id") int id) {
		return this.service.getAdminDetailById(id);
	}
}
