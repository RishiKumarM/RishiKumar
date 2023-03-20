package com.botlie.employeeAssimilation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.entity.PackageUpdate;

public interface PackageUpdateRepository extends JpaRepository<PackageUpdate, Integer> {

	@Query(value = "select * from admin_detail where selectedPlan = ? order by id DESC limit 1", nativeQuery = true)
	public PackageUpdate findById(int id);
	public AdminDetail findByAdminId(int adminid);
	
}
