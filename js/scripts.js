$(function(){
  $("form").submit(function(event){
    event.preventDefault();
//Create Variables
    var userWarnings = [];
    var userHealth = [];
    var userCoping = [];

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      userWarnings.push(warningSigns);
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      userHealth.push(healthSymptoms);
    });

    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      userCoping.push(copingMethods);
    });

    if(userWarnings.length >= userCoping.length && health.length <= "3") {

    }
    else if (userWarnings.length < userCoping.length && health.length <= "3") {

    }
    else if (health.length > "3") {

    }
  });
});
