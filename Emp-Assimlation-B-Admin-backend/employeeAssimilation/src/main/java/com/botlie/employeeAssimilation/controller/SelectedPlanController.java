package com.botlie.employeeAssimilation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.botlie.employeeAssimilation.entity.SelectedPlan;
import com.botlie.employeeAssimilation.service.SelectedPlanService;

@CrossOrigin("*")
@RestController
@RequestMapping("/selectedPlan")
public class SelectedPlanController {
	
	@Autowired
	SelectedPlanService selectedPalnService;
	
	@GetMapping("/get")
	public List<SelectedPlan> getSelectedPlans(){
		List<SelectedPlan> PlanTypes = selectedPalnService.getPlanData();
		return PlanTypes;
	}
	
	@PutMapping("/update/{id}")
	public SelectedPlan updateSelectedPlan(@PathVariable("id") int id, @RequestBody SelectedPlan selectedPlan) {
		return this.selectedPalnService.updatSelectedPlan(id, selectedPlan);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteSelectedPalnById(@PathVariable("id") int id) {
		this.selectedPalnService.deleteSelectedPlanById(id);
	}

}
