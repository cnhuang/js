(function() {
    
    let goToSignInPage = () => {
      window.location.href = 'https://www.reserveamerica.com/memberSignInSignUp.do';
    };
    
    let login = () => {
        if ($('progresspopup') && ($('progresspopup').length == 0 || $('progresspopup').style.display == 'none')) {
            $('#combinedFlowSignInKit_emailGroup_attrs input')[0].value = 'cnhuang@gmail.com';
            $('#passwrdGroup input')[0].value = 'g3sj61u3';
            $('#submitForm_submitForm').click();
        } else if ($('#Search')) {
            window.location.href = 'http://www.reserveamerica.com/switchBookingAction.do?contractCode=CA&parkId=120063&siteId=390&camparea=52762255&selStatus=null&matrixHasError=true&dateToday=03%2F30%2F2017%C2%A4tMaximumWindow=12&dateMinWindow=11%2F04%2F2016&dateMaxWindow=11%2F02%2F2017&arvdate=03%2F30%2F2017&arrivaldate=Thu+Mar+30+2017&lengthOfStay=1&dateChosen=true';
        }
    };
    
    let loadJquery = (callback) => {
        // Adding the script tag to the head as suggested before
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://code.jquery.com/jquery-latest.js?' + (new Date()).toISOString();

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
    };
    
    let main = () => {
        const url = window.location.href;
        console.log(url);
        if (url.indexOf('memberSignInSignUp.do') >= 0) {
          console.log('memberSignInSignUp');
          setTimeout(login, 2000);
        } else if (url.indexOf('welcome.do') >= 0) {
          console.log('welcome');
          goToSignInPage();
        }
    };
 
    //loadJquery(main);
    main();
})();
