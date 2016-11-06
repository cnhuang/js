(function() {
    
    let goToSignInPage = () => {
      window.location.href = 'https://www.reserveamerica.com/memberSignInSignUp.do';
    };
    
    let login = () => {
        console.log(`Start to login with ${USER_NAME}/${PASSWORD}`);
        $('#combinedFlowSignInKit_emailGroup_attrs input')[0].value = USER_NAME;
        $('#passwrdGroup input')[0].value = PASSWORD;
        $('#submitForm_submitForm').click();
    };
    
    let fillReservationForm = () => {
        console.log(`Fill form with ${NUM_OCCUPANTS} occupants and ${NUM_VEHICLES} vehicles`);
        $('#numoccupants')[0].value = NUM_OCCUPANTS;
        $('#numvehicles')[0].value = NUM_VEHICLES;
        $('#agreement')[0].checked = true;
        $('#continueshop')[0].click();
    };
    
    let main = () => {
        const url = window.location.href;
        
        if ($('#myAccount').length != 0 || url.indexOf('welcome.do') >= 0 || url.endsWith('/')) {
            console.log('Redirect to camp session url: ' + CAMP_URL);
            window.location.href = CAMP_URL;
        } else if ($('#submitForm_submitForm').length != 0) {
            login();
        } else if (true) {
        }
        
        
        /*
        if (url.indexOf('memberSignInSignUp.do') >= 0) {
            setTimeout(login, 2000);
        } else if (url.indexOf('welcome.do') >= 0 || url.endsWith('/')) {
            window.location.href = CAMP_URL;
            //goToSignInPage();
        } else if (url == CAMP_URL) {
            console.log('select date');
            //setTimeout(() => {$('#btnbookdates')[0].click();}, 2000);
        } else if (url.indexOf('reservationDetails.do')) {
            setTimeout(fillReservationForm, 2000);
        }
        */
        
    };
    main();
})();
