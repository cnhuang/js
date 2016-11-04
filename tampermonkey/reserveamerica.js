(function() {
    
    let goToSignInPage = () => {
      window.location.href = 'https://www.reserveamerica.com/memberSignInSignUp.do';
    };
    
    let login = () => {
        if ($('#myaccountlink').length != 0) {
            console.log('Redirect to camp session url: ' + CAMP_URL);
            window.location.href = CAMP_URL;
        } else if ($('#submitForm_submitForm').length != 0) {
            console.log('Start to login...');
            $('#combinedFlowSignInKit_emailGroup_attrs input')[0].value = USER_NAME;
            $('#passwrdGroup input')[0].value = PASSWORD;
            $('#submitForm_submitForm').click();
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
          setTimeout(login, 2000);
        } else if (url.indexOf('welcome.do') >= 0 || url.endsWith('/')) {
          goToSignInPage();
        }
    };
 
    //loadJquery(main);
    main();
})();
