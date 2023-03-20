package com.botlie.employeeAssimilation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.botlie.employeeAssimilation.entity.PackageUpdate;
import com.botlie.employeeAssimilation.service.PackageUpdateService;

@RestController
@RequestMapping(value = "/updatePackage")
@CrossOrigin(origins = "*")
public class PackageUpdateController {

	@Autowired
	private PackageUpdateService packageUpdateService;
	
	@GetMapping("/get")
	public List<PackageUpdate> getAllPackageUpdate(){
		return this.packageUpdateService.getAllPackageUpdate();
	}

	//1.save AdminDetail
	@PostMapping("/post")
	public PackageUpdate postPackageUpdate(@RequestBody PackageUpdate packageUpdate){
		return this.packageUpdateService.postPackageUpdate(packageUpdate);
	}
	
	@PutMapping("/update/{id}")
	public PackageUpdate updatePackageUpdate(@PathVariable("id") int id, @RequestBody PackageUpdate packageUpdate) {
		return this.packageUpdateService.updataPackageUpdate(id, packageUpdate);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deletePackageUpdateById(@PathVariable("id") int id) {
		this.packageUpdateService.deletePackageUpdateById(id);
	}
}
