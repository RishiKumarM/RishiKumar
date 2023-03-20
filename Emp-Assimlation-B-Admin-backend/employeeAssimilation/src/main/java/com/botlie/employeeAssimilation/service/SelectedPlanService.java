package com.botlie.employeeAssimilation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.entity.SelectedPlan;
import com.botlie.employeeAssimilation.repository.SelectedPlanRepository;

@Service
public class SelectedPlanService {
	
	@Autowired
	SelectedPlanRepository selectedPlanRepository;
	
	public List<SelectedPlan> getPlanData(){
		return selectedPlanRepository.findAll();
	}
		
		//4. delete AdminDetails by id
		public void deleteSelectedPlanById(Integer id) {
			this.selectedPlanRepository.deleteById(id);
		}
		
		//5. update
			public SelectedPlan updatSelectedPlan (int id, SelectedPlan selectedPlan){
			SelectedPlan planDetails = this.selectedPlanRepository.findById(id);
			planDetails.setAmount(selectedPlan.getAmount());
			planDetails.setOption(selectedPlan.getOption());
			planDetails.setId(selectedPlan.getId());
			return this.selectedPlanRepository.save(selectedPlan);
		}
}
