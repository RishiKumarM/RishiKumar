package com.botlie.employeeAssimilation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.botlie.employeeAssimilation.entity.EmailMessage;

public interface EmailMessageRepository  extends JpaRepository<EmailMessage, Long>{
	@Query(value = "select * from Verification_Table where email = ? order by id DESC limit 1", nativeQuery = true)
	public EmailMessage findByEmail(String email);
}
