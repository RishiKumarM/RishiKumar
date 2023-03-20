package com.botlie.employeeAssimilation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.botlie.employeeAssimilation.entity.PlanFeature;
import com.botlie.employeeAssimilation.repository.PlanFeatureRepository;

@Service
public class PlanFeatureService {

	@Autowired
	PlanFeatureRepository planFeatureRepository;
	
	public List<PlanFeature> getAllFeaturePlan(){
		return planFeatureRepository.findAll();
	}
}
