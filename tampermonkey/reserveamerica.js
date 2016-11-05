(function() {
    
    let goToSignInPage = () => {
      window.location.href = 'https://www.reserveamerica.com/memberSignInSignUp.do';
    };
    
    let login = () => {
        if ($('#myaccountlink').length != 0) {
            console.log('Redirect to camp session url: ' + CAMP_URL);
            window.location.href = CAMP_URL;
        } else if ($('#submitForm_submitForm').length != 0) {
            console.log(`Start to login with ${USER_NAME}/${PASSWORD}`);
            $('#combinedFlowSignInKit_emailGroup_attrs input')[0].value = USER_NAME;
            $('#passwrdGroup input')[0].value = PASSWORD;
            $('#submitForm_submitForm').click();
        }
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
        console.log(url);
        if (url.indexOf('memberSignInSignUp.do') >= 0) {
            setTimeout(login, 2000);
        } else if (url.indexOf('welcome.do') >= 0 || url.endsWith('/')) {
            goToSignInPage();
        } else if (url.indexOf(CAMP_URL)) {
            $('#btnbookdates')[0].click();
        } else if (url.indexOf('reservationDetails.do')) {
            fillReservationForm();
        }
        
    };
    main();
})();
