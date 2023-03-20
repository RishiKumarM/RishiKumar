package com.botlie.employeeAssimilation.service;
//package com.botlie.employeeAssimilation.service;
//
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.List;
//import java.util.Optional;
//import java.util.Properties;
//
//import javax.mail.Authenticator;
//import javax.mail.Message;
//import javax.mail.PasswordAuthentication;
//import javax.mail.Session;
//import javax.mail.Transport;
//import javax.mail.internet.InternetAddress;
//import javax.mail.internet.MimeMessage;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//
//import lombok.extern.slf4j.Slf4j;
//
//@Service
//@Slf4j
//public class EmailMsgService {
//
//	@Autowired
//	private OtpVerificationDetailsRepository otpVerificationDetailsRepository;
//	@Autowired
//	private CampaignerDetailsRepository campaignerDetailsRepository;
//	int min = 1000;
//	int max = 9999;
//	long time = 1 * 60 * 1000;
//	SimpleDateFormat format = new SimpleDateFormat("yy/MM/dd hh:mm:ss");
//
//	public void otpSendOnUpdatedEmail(String email) {
//		String host = "smtp.gmail.com";
//		String from = "noreply@botlie.com";
//		Properties properties = System.getProperties();
//		properties.put("mail.smtp.host", host);
//		properties.put("mail.smtp.port", "465");
//		properties.put("mail.smtp.ssl.enable", "true");
//		properties.put("mail.smtp.auth", "true");
//		
//		Session session = Session.getInstance(properties, new Authenticator() {
//			@Override
//			protected PasswordAuthentication getPasswordAuthentication() {
//				return new PasswordAuthentication(from, "zjpdkoxbvthapufo");
//			}
//		});
//		session.setDebug(true);
//		OtpVerificationDetails details= new OtpVerificationDetails();
//
//		MimeMessage m = new MimeMessage(session);
//		try {
//			m.setFrom(from);
//			m.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
//			m.setSubject("Verification Code");
//			int otp = (int) (Math.random() * (max - min + 1) + min);
//			m.setText("Your OTP for Updating EmailId is : " + otp);
//			String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").format(new Date());
//			details.setOtp(otp);
//			details.setGeneratedTime(timeStamp);
//
//			Transport.send(m);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		otpVerificationDetailsRepository.save(details);
//	}
//	

//import java.util.Random;
//
//public static String alphaNumericString(int len) {
//    String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//    Random rnd = new Random();
//
//    StringBuilder sb = new StringBuilder(len);
//    for (int i = 0; i < len; i++) {
//        sb.append(AB.charAt(rnd.nextInt(AB.length())));   
//    }
//    return sb.toString();	    
//}

//	public ResponseEntity<ResponseMessage> sendOTP(CampaignerDetails campaingnerDetail) {
//		OtpVerificationDetails otpVerificationDetails = new OtpVerificationDetails();
//		otpVerificationDetails.setEmail(campaingnerDetail.getCampaignerEmail());
//		otpVerificationDetails.setPhone(campaingnerDetail.getCampaignerNumber());
//		
//		ResponseMessage responseMessage = validateUserDetails(campaingnerDetail);
//		if (responseMessage.getStatusCode().equals("0") || responseMessage.getStatusCode().equals("1")) {
//			sendOTP(campaingnerDetail, otpVerificationDetails);
//		}
//		return new ResponseEntity<ResponseMessage>(responseMessage, HttpStatus.OK);
//	}
//
//	private void sendOTP(CampaignerDetails campaingnerDetail, OtpVerificationDetails otpVerificationDetails) {
//		String host = "smtp.gmail.com";
//		String from = "noreply@botlie.com";
//		Properties properties = System.getProperties();
//		properties.put("mail.smtp.host", host);
//		properties.put("mail.smtp.port", "465");
//		properties.put("mail.smtp.ssl.enable", "true");
//		properties.put("mail.smtp.auth", "true");
//
//		Session session = Session.getInstance(properties, new Authenticator() {
//			@Override
//			protected PasswordAuthentication getPasswordAuthentication() {
//				return new PasswordAuthentication(from, "zjpdkoxbvthapufo");
//			}
//		});
//		session.setDebug(true);
//
//		MimeMessage m = new MimeMessage(session);
//		try {
//			m.setFrom(from);
//			m.addRecipient(Message.RecipientType.TO, new InternetAddress(campaingnerDetail.getCampaignerEmail()));
//			m.setSubject("Verification Code");
//			int otp = (int) (Math.random() * (max - min + 1) + min);
//			m.setText("Your OTP is : " + otp);
//			String timeStamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").format(new Date());
//			otpVerificationDetails.setOtp(otp);
//			otpVerificationDetails.setGeneratedTime(timeStamp);
//
//			Transport.send(m);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		otpVerificationDetailsRepository.save(otpVerificationDetails);
//	}
//
//	private ResponseMessage validateUserDetails(CampaignerDetails uiCampaignerDetails) {
//		ResponseMessage message;
//		CampaignerDetails dbCampaignerDetail = campaignerDetailsRepository
//				.findByCampaignerNumberOrCampaignerEmail(uiCampaignerDetails.getCampaignerNumber(), uiCampaignerDetails.getCampaignerEmail());
//		System.out.println("Details from database: " + dbCampaignerDetail);
//		log.info("Details from database: " + dbCampaignerDetail);
//		if (dbCampaignerDetail != null) {
//			if (dbCampaignerDetail.getCampaignerEmail().trim().equalsIgnoreCase(uiCampaignerDetails.getCampaignerEmail().trim()) &&
//					dbCampaignerDetail.getCampaignerNumber().trim().equals(uiCampaignerDetails.getCampaignerNumber().trim())) {
//				message = new ResponseMessage("Already exists user with provided email id and phone number", "1");
//			} else {
//				message = new ResponseMessage("Already exists user. But email id is not registered.", "2");
//			}
//		}
//		else {
//			message = new ResponseMessage("New user for registration", "0");
//		}
//		return message;
//	}
//
//	public List<OtpVerificationDetails> getAllData() {
//		return this.otpVerificationDetailsRepository.findAll();
//	}
//
//	public Optional<OtpVerificationDetails> getSingleData(int id) {
//		return this.otpVerificationDetailsRepository.findById(id);
//	}
//
//	public ResponseEntity<ResponseMessage> verifyOtp(CampaignerDetails campaignerDetail) throws ParseException {
//		ResponseMessage message;
//        String email = campaignerDetail.getCampaignerEmail().trim();
//        System.out.println(email);
//        String phoneNumber = campaignerDetail.getCampaignerNumber().trim();
//        Integer otpFromRequest = Integer.parseInt(campaignerDetail.getOtp().trim());
//		OtpVerificationDetails emailData = 
//				this.otpVerificationDetailsRepository.findByEmailAndPhoneNo(email, phoneNumber);
//
//		if (email.equalsIgnoreCase(emailData.getEmail().trim()) && otpFromRequest.intValue() == emailData.getOtp()
//				&& phoneNumber.equalsIgnoreCase(emailData.getPhone().trim())) {
//			Date d1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss z").parse(emailData.getGeneratedTime());
//			Date d2 = new Date();
//			try {
//				long diff = d2.getTime() - d1.getTime();
//				System.out.println(diff);
//				long diffMin = diff / (60 * 1000);
//				if (diffMin > 1) {
//					message = new ResponseMessage("Otp expired", "2");
//					return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
//				}
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//			message = new ResponseMessage("OTP is correct", "0");
//			return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
//		} else {
//			message = new ResponseMessage("OTP is incorrect", "1");
//			return new ResponseEntity<ResponseMessage>(message, HttpStatus.OK);
//		}
//	}
//	
//	public ResponseMessage verifyOtpFromUpdatedEmailId(CampaignerDetails campaignerDetails) {
//		OtpVerificationDetails otpVerificationDetails = this.otpVerificationDetailsRepository.findByEmail(campaignerDetails.getCampaignerEmail());
//		
//		System.out.println(campaignerDetails.getCampaignerEmail());
//		System.out.println("checkout");
//		int otpFromUi= Integer.parseInt(campaignerDetails.getOtp());
//		
//		System.out.println(otpFromUi);
//		System.out.println(otpVerificationDetails.getOtp());
//		if(otpVerificationDetails.getOtp() ==otpFromUi) {
//			return new ResponseMessage("success", "1");
//		}else {
//			
//			return new ResponseMessage("failed", "0");
//		}
//	}
//}
