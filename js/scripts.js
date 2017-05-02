$(function(){
  $("form").submit(function(event){
    event.preventDefault();
//Create Variables
    var userWarnings = [];
    var userHealth = [];
    var userCoping = [];
//Create loop to populate each empty array
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
//Run if else to get outcomes
    if(userWarnings.length >= userCoping.length && userHealth.length <= 3) {
      $(".output").hide();
      $("#outputWarning").show();
    }
    else if (userWarnings.length < userCoping.length && userHealth.length <= 3) {
      $(".output").hide();
      $("#outputCoping").show();
    }
    else if (userHealth.length > 3) {
      $(".output").hide();
      $("#outputHealth").show();
    }
  });
});
