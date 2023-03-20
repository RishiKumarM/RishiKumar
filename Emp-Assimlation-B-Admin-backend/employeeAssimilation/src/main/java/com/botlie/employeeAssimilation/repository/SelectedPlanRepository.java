package com.botlie.employeeAssimilation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.botlie.employeeAssimilation.entity.SelectedPlan;

@Repository
public interface SelectedPlanRepository extends JpaRepository<SelectedPlan, Integer>{

	public SelectedPlan findById(int id);
}
