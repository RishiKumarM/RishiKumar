package com.botlie.employeeAssimilation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.repository.AdminDetailRepository;

@Service
public class AdminDetailService {
	
	@Autowired
	private AdminDetailRepository adminDetailRepository;

	//1. save AdminDetails 
	//Integer saveAdminDetail(AdminDetail adm);
	
	//2. get all adminDetails
	public List<AdminDetail> getAllAdminDetail(){
		return this.adminDetailRepository.findAll();
	}
	public AdminDetail postAdminDetail(AdminDetail adminDetail) {
		return this.adminDetailRepository.save(adminDetail);
	}
	
	//3. get AdminDetails by id
	public AdminDetail getAdminDetailById(int id) {
	  return this.adminDetailRepository.findById(id);
	}
	
	//4. delete AdminDetails by id
	public void deleteAdminDetailById(Integer id) {
		this.adminDetailRepository.deleteById(id);
	}
	
	//5. update
	public AdminDetail updataAdminDetail (int id, AdminDetail adminDetail){
		AdminDetail adminDetails = this.adminDetailRepository.findById(id);
		adminDetails.setBusinessName(adminDetail.getBusinessName());
		adminDetails.setBusinessEmail(adminDetail.getBusinessEmail());
		adminDetails.setClientName(adminDetail.getClientName());
		adminDetails.setClientNumber(adminDetail.getClientNumber());
		adminDetails.setClientAddress(adminDetail.getClientAddress());
		adminDetails.setClientCity(adminDetail.getClientCity());
		adminDetails.setClientState(adminDetail.getClientState());
		adminDetails.setClientCountry(adminDetail.getClientCountry());
		adminDetails.setZipCode(adminDetail.getZipCode());
		adminDetails.setGstin(adminDetail.getGstin());
		adminDetails.setOtp(adminDetail.getOtp());
		adminDetails.setPassword(adminDetail.getPassword());
		adminDetails.setSelectedPlan(adminDetail.getSelectedPlan());
		adminDetails.setSelectedAmount(adminDetail.getSelectedAmount());
		adminDetails.setPaymentStatus(adminDetail.isPaymentStatus());
		return this.adminDetailRepository.save(adminDetails);
	}
}
