package com.botlie.employeeAssimilation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.entity.ResponseMessage;
import com.botlie.employeeAssimilation.service.EmailMessageService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/otpsend")
public class EmailMessageController {

	@Autowired
	private EmailMessageService emailMessageSErvice;
	
	@PostMapping("/post")
	public ResponseEntity<ResponseMessage> sendOtp(@RequestBody AdminDetail adminDetail)
	{
		return emailMessageSErvice.sendOTP(adminDetail);
	}
	
	@PostMapping("/verifyEmail")
	public ResponseEntity<ResponseMessage> verifyOtp(@RequestBody AdminDetail adminDetail) throws Exception
	{
		return this.emailMessageSErvice.verifyOtp(adminDetail);
	}
	
}