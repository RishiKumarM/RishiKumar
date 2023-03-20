package com.botlie.employeeAssimilation.service;																																	
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.botlie.employeeAssimilation.entity.PackageUpdate;
import com.botlie.employeeAssimilation.repository.PackageUpdateRepository;

@Service
public class PackageUpdateService {
	
	@Autowired
	private PackageUpdateRepository packageUpdateRepository;
	long time = 1 * 60 *100000;
	SimpleDateFormat format = new SimpleDateFormat("yy/MM/dd hh:mm;;ss");
	public List<PackageUpdate> getAllPackageUpdate(){
		return this.packageUpdateRepository.findAll();
	}
	public PackageUpdate postPackageUpdate(PackageUpdate packageUpdate) {
		String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").format(new Date());
		packageUpdate.setGenerateTime(timeStamp);
		packageUpdateRepository.save(packageUpdate);
		return this.packageUpdateRepository.save(packageUpdate);
	}
	
	public PackageUpdate getPackageUpdateById(int id) {
	  return this.packageUpdateRepository.findById(id);
	}
	
	public void deletePackageUpdateById(Integer id) {
		this.packageUpdateRepository.deleteById(id);
	}
	
	public PackageUpdate updataPackageUpdate(int id, PackageUpdate packageUpdate){
		PackageUpdate adminDetails = this.packageUpdateRepository.findById(id);
		adminDetails.setAdminId(packageUpdate.getAdminId());
		adminDetails.setSelectedPlan(packageUpdate.getSelectedPlan());
		adminDetails.setSelectedAmount(packageUpdate.getSelectedAmount());
		adminDetails.setBusinessEmail(adminDetails.getBusinessEmail());
		return this.packageUpdateRepository.save(packageUpdate);
	}
}
