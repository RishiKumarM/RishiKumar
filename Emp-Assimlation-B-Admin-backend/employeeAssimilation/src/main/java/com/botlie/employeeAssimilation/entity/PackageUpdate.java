package com.botlie.employeeAssimilation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Client_Package_Table")
public class PackageUpdate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int adminId;
	private String generateTime;
	private String selectedAmount;	
	private String selectedPlan;
	private String businessEmail;
	
}
