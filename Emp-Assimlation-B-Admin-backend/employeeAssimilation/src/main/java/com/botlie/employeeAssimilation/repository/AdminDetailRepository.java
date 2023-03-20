package com.botlie.employeeAssimilation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.botlie.employeeAssimilation.entity.AdminDetail;

@Repository
public interface AdminDetailRepository extends JpaRepository<AdminDetail, Integer> {

	public AdminDetail findById(int id);

	public AdminDetail findByBusinessEmail(String businessEmail);
	
	
	
}
