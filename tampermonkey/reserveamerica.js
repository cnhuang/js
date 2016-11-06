(function() {
    
    let getId = (id) => {
        return getElem(`#${id}`);
    };
    
    let getElem = (selector) {
        return $(selector).length == 0 ? null : $(selector)[0];
    }
    
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
    
    let purchase = () => {
        if (getElem('div.msg.topofpage.erro')) {
            return;
        }
        console.log(`set CARD_TYPE = ${CARD_TYPE}`);
        getId('cardTypeId_1').value = CARD_TYPE;
        console.log(`set CARD_NUMBER = ${CARD_NUMBER}`);
        getId('cardnum_1').value = CARD_NUMBER;
        console.log(`set CARD_EXP_MONTH = ${CARD_EXP_MONTH}`);
        getId('expmonth_1').value = CARD_EXP_MONTH;
        console.log(`set CARD_EXP_YEAR = ${CARD_EXP_YEAR}`);
        getId('expyear_1').value = CARD_EXP_YEAR;
        console.log(`set FIRST_NAME = ${FIRST_NAME}`);
        getId('fname_1').value = FIRST_NAME;
        console.log(`set LAST_NAME = ${LAST_NAME}`);
        getId('lname_1').value = LAST_NAME;
        console.log(`set Acknowlegdement = true`);
        getId('ackacc').checked = true;
        console.log(`check out`);
        getId('chkout').click();
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
        } else if (getId('numoccupants')) {
            fillReservationForm();
        } else if (getId('removeitem')) {
            console.log('check out');
            getId('chkout').click();
        } else if (getId('cardnum_1')) {
            purchase();
        }
    };
    main();
})();
