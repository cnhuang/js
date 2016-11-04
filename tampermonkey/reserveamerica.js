(function() {
    let goToSignInPage = () => {
      $('signIn').click();
    };
    let login = () => {
        if ($('progresspopup') && $('progresspopup').style.display == 'none') {
            $('AemailGroup_1733152645').value = 'cnhuang@gmail.com';
            $('ApasswrdGroup_704558654').value = 'g3sj61u3';
            $('submitForm_submitForm').click();
        } else if ($('Search')) {
            window.location.replace('http://www.reserveamerica.com/switchBookingAction.do?contractCode=CA&parkId=120063&siteId=390&camparea=52762255&selStatus=null&matrixHasError=true&dateToday=03%2F30%2F2017%C2%A4tMaximumWindow=12&dateMinWindow=11%2F04%2F2016&dateMaxWindow=11%2F02%2F2017&arvdate=03%2F30%2F2017&arrivaldate=Thu+Mar+30+2017&lengthOfStay=1&dateChosen=true');
        }
    };
    
    const url = window.location.href;
    if (url.endWith('memberSignInSignUp.do') {
      setTimeout(f, login);
    } else if (url.endWith('welcome.do')) {
      goToSignInPage();
    }
})();
