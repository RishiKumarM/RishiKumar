package com.botlie.employeeAssimilation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.botlie.employeeAssimilation.entity.PlanFeature;

@Repository
public interface PlanFeatureRepository extends JpaRepository<PlanFeature, Integer>{

	public PlanFeature findById(int id);
}
