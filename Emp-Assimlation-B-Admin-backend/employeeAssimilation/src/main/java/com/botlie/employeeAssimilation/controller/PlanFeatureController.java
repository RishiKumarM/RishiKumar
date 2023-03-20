package com.botlie.employeeAssimilation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.botlie.employeeAssimilation.entity.PlanFeature;
import com.botlie.employeeAssimilation.service.PlanFeatureService;

@CrossOrigin
@RestController
@RequestMapping("/planFeature")
public class PlanFeatureController {

	@Autowired
	PlanFeatureService planFeatureService;
	
	@GetMapping("/get")
	public List<PlanFeature> getPlanFeatures(){
		List<PlanFeature> PlanFeatures = planFeatureService.getAllFeaturePlan();
		return PlanFeatures;
	}
}
