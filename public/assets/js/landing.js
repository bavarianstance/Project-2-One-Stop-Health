$(document).ready(function(){
	

	//New account creation for patient 
	$(".patient-register").on("click", function(){
		// deprecated password validation logic
		// if ($("#password").val() !== $("#confirm-password").val()) {
		// 	alert("error. password mismatch, please re-enter");
		// 	return;
		// }

		var newPatient = {
			// captures values from registration form
			patient_name: $(".patient-first-name").val().trim() + " " + $(".patient-last-name").val().trim(),
			patient_primary_address1: $(".patient-address1").val().trim(),
			// patient_primary_address2: $(".patient-address2").val().trim(),
			email: $(".patient-email").val().trim(),
			patient_city: $(".patient-city").val().trim(),
			patient_zip: $(".patient-zip").val().trim(),
			patient_login_name: $(".patient-username").val().trim(),
			patient_login_password: $(".patient-password").val(),
			patient_medical_insurance_id: $(".patient-medical-insurance-id").val().trim(),
			patient_dental_insurance_id: $(".patient-dental-insurance-id").val().trim(),
			patient_medical_provider_id: $(".patient-medical-provider-id").val().trim(),
			patient_dental_provider_id: $(".patient-dental-provider-id").val().trim(),
		};
		console.log(newPatient);
		// ajax post request to api/patients route
		$.ajax("/api/patients", {
			type: "POST",
			data: newPatient
	}).then(
	function(response){
		// redirects to appropriate url after promise
		parent.window.location="/api/patient/"+ response.id;
		//	window.location.replace("/api/patient/"+ response.id);
	});
  });
// });

// $(document).ready(function(){
	//new account creation for doctor
	$(".doctor-register").on("click", function() {
				// deprecated password validation logic
		// if ($("#password").val() !== $("#confirm-password").val()) {
		// 	alert("error. password mismatch, please re-enter");
		// 	return;
		// }
		// capture appropriate values from registration form
		var insuranceAcceptedObj = $(".doctor-insurance-accepted").val()
		var insuranceAcceptedStr = insuranceAcceptedObj.toString()
		var newDoctor = {
			doctor_name: $(".doctor-first-name").val().trim() + " " + $(".doctor-last-name").val().trim(),
			doctor_primary_address1: $(".doctor-address1").val().trim(),
			// doctor_primary_address2: $(".doctor-address2").val().trim(),
			email: $(".doctor-email").val().trim(),
			doctor_city: $(".doctor-city").val().trim(),
			doctor_zip: $(".doctor-zip").val().trim(),
			doctor_specialization: $(".doctor-specialization").val().trim(),
			doctor_type: $(".doctor-type").val(),
			doctor_login_name: $(".doctor-login-name").val().trim(),
			doctor_login_password: $(".doctor-login-password").val().trim(),
			doctor_insurance_accepted: insuranceAcceptedStr
		};
		console.log(newDoctor);
		// ajax post request to api/doctors route
		$.ajax("api/doctors", {
			type: "POST",
			data: newDoctor
	}).then(
	function(response){
		// redirect url after promise
		parent.window.location="/api/doctors/"+ response.id;
	});
  });
});

