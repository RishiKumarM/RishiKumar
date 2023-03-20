package com.botlie.employeeAssimilation.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "admin_detail")
@SequenceGenerator(name="seq", initialValue=100000, allocationSize=1)
public class AdminDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq")
	private int adminId;
	private String businessEmail ;
	
	private String selectedAmount;
	
	private String selectedPlan;
	
	private String businessName;
	
	private String clientName;
	
	private String clientNumber;
	
	private String clientAddress;
	
	private String clientCity;
	
	private String clientState;
	
	private String clientCountry;
	
	private String zipCode;
	
	private String gstin;
	
	private int otp;
	
	private String password;
	
	private boolean paymentStatus;
		
	
}
