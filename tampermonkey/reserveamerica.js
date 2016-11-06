(function() {
    
    let getId = (id) => {
        return $(`#${id}`).length == 0 ? null : $(`#${id}`)[0];
    };
    
    let goToSignInPage = () => {
      window.location.href = 'https://www.reserveamerica.com/memberSignInSignUp.do';
    };
    
    let login = () => {
        console.log(`Start to login with ${USER_NAME}/${PASSWORD}`);
        getId('combinedFlowSignInKit_emailGroup_attrs input').value = USER_NAME;
        getId('passwrdGroup input').value = PASSWORD;
        getId('submitForm_submitForm').click();
    };
    
    let fillReservationForm = () => {
        console.log(`Fill form with ${NUM_OCCUPANTS} occupants and ${NUM_VEHICLES} vehicles`);
        getId('numoccupants').value = NUM_OCCUPANTS;
        getId('numvehicles').value = NUM_VEHICLES;
        getId('agreement').checked = true;
        getId('continueshop').click();
    };
    
    let main = () => {
        const url = window.location.href;
        
        if (getId('myAccount') || url.indexOf('welcome.do') >= 0 || url.endsWith('/')) {
            console.log('Redirect to camp session url: ' + CAMP_URL);
            window.location.href = CAMP_URL;
        } else if (getId('submitForm_submitForm')) {
            setTimeout(login, 2000);
        } else if (getId('btnbookdates')) {
            console.log('book date');
            getId('btnbookdates').click();
        } else if (getId('continueshop')) {
            fillReservationForm();
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
