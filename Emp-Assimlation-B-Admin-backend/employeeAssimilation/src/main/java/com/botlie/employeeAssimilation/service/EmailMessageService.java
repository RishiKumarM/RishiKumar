package com.botlie.employeeAssimilation.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.Random;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.botlie.employeeAssimilation.entity.AdminDetail;
import com.botlie.employeeAssimilation.entity.EmailMessage;
import com.botlie.employeeAssimilation.entity.ResponseMessage;
import com.botlie.employeeAssimilation.repository.AdminDetailRepository;
import com.botlie.employeeAssimilation.repository.EmailMessageRepository;

import lombok.extern.slf4j.Slf4j;

@Service

public class EmailMessageService {

	@Autowired
	private EmailMessageRepository emailMessageRepository;
	@Autowired
	private AdminDetailRepository adminDetailRepository;
	int min = 100000;
	int max = 999999;
	long time = 1 * 60 *100000;
	SimpleDateFormat format = new SimpleDateFormat("yy/MM/dd hh:mm;;ss");
	
	public  ResponseEntity<ResponseMessage> sendOTP(AdminDetail adminDetail){
		EmailMessage emailMessage = new EmailMessage();
		emailMessage.setEmail(adminDetail.getBusinessEmail());
//		emailMessage.setame(adminDetail.getBusinessName());
		emailMessage.setPassword(adminDetail.getPassword());
		ResponseMessage responseMessage = validateClientDetail(adminDetail);
		
		if(responseMessage.getStatusCode().equals("0")){
			sendOTP(adminDetail, emailMessage);
		}
		return new ResponseEntity<ResponseMessage>(responseMessage, HttpStatus.OK);
	}
	
	private void sendOTP(AdminDetail adminDetail, EmailMessage emailMessage) {
		String host = "smtp.gmail.com";
		String from = "noreply@botlie.com";
		Properties properties = System.getProperties();
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port","465");
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth","true");
		
		Session session = Session.getInstance(properties, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication(){
				return new PasswordAuthentication(from, "zjpdkoxbvthapufo");
			}
		});
		session.setDebug(true);
		
		MimeMessage ms = new MimeMessage(session);
		try {
			ms.setFrom(from);
			ms.setRecipients(Message.RecipientType.TO, InternetAddress.parse(adminDetail.getBusinessEmail()));
			ms.setSubject("Verification Code");
//			String randomPass = passwordEncoder.encode(alphaNumericString(10))
			int otp = (int) (Math.random() * (max - min + 1) + min);
			String businessEmail = adminDetail.getBusinessEmail();
			ms.setText(" Hi! Welcome To Employee Assimilation "
					+ " \n\n Your Email: " + businessEmail + " "  
					+ " \n\n And Enter this following OTP: " + otp + " " 
					+ "\n\n Regards,");
			String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").format(new Date());
			emailMessage.setOtp(otp);
			emailMessage.setGenerateTime(timeStamp);
			Transport.send(ms);
		} catch (Exception e){
			e.printStackTrace();
		}
		emailMessageRepository.save(emailMessage);
	}
	
	private ResponseMessage validateClientDetail(AdminDetail uiAdminDetail) {
		ResponseMessage message;
		AdminDetail dbAdminDetail = adminDetailRepository.findByBusinessEmail(uiAdminDetail.getBusinessEmail());
		System.out.println("Details from database: " + dbAdminDetail);
		
		if(dbAdminDetail != null) {
			if (dbAdminDetail.getBusinessEmail().trim().equalsIgnoreCase(uiAdminDetail.getBusinessEmail().trim())) {
				message = new ResponseMessage("Already exists user with provided email id", "1");
			} else {
				message = new ResponseMessage("Already exists user. But email id is not registered.", "2");
			}
		}
		else {
			message = new ResponseMessage("New user for registration", "0");
		}
			return message;
		}
		
		public List<EmailMessage> getAllData(){
			return this.emailMessageRepository.findAll();
		}
		
		public EmailMessage getSingleData(String email) {
			return this.emailMessageRepository.findByEmail(email);
		}
		
		public ResponseEntity<ResponseMessage> verifyOtp(AdminDetail adminDetail)throws Exception {
			ResponseMessage message;
			String email = adminDetail.getBusinessEmail().trim();
			System.out.println(email);
//			String phone = adminDetail.getClientNumber().trim();
			
			
			EmailMessage emailData = this.emailMessageRepository.findByEmail(email);
			if (email.equalsIgnoreCase(emailData.getEmail().trim()) && adminDetail.getOtp()== emailData.getOtp()
					) {
				Date d1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").parse(emailData.getGenerateTime());
				Date d2 = new Date();
				try {
					long diff = d2.getTime() - d1.getTime();
					System.out.println(diff);
					long diffMin = diff / (60 * 1000);
					if (diffMin > 1) {
						message = new ResponseMessage("Otp expired", "2");
			 			return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				message = new ResponseMessage("OTP is correct", "0");
				return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
				
			} else {
				message = new ResponseMessage("OTP is incorrect", "1");
				return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
			}
		}
}