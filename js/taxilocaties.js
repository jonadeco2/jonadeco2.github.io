;(function() {

  function TaxilocatiesApp(id, parentContainer) {
    this.API_URL = "../../data/taxilocaties.json";
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
        var that = this;

        var xhr = new XMLHttpRequest();
        xhr.open('get', this.API_URL, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
        if(xhr.status == 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            var tempStr = '';
            var id = 0;
            for(i=0; i < data.length; i++){
            var naam = data[i].naam;
            var straat = data[i].straat;
            var huisnr = data[i].huisnr;
            var postcode = data[i].postcode;
            var deelgemeente = data[i].deelgemeente;
            var land = data[i].land;

            /*
            tempStr += '<div class="row row_custom">';
            tempStr += '<div class="col-xs-4 white">' + naam + '</div>';
            tempStr += '<div class="col-xs-4 white">' + straat + '&nbsp' + huisnr + '&nbsp' + postcode + '</div>';
            tempStr += '<div class="col-xs-4 white text-right">' + deelgemeente + '&nbsp' + land + '&nbsp' + '</div>';
            tempStr += '</div>';//end row*/


             tempStr +=  '<div class="col-lg-6 col-xs-12 row_custom">';
            tempStr +=      '<div class="col-xs-6 white ">';
            tempStr +=          '<h4 class="font-reg">' + naam + '</h4>';
            tempStr +=          '<h5 class="font whiteSeeThrough"><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp' + straat + '&nbsp' + huisnr + '&nbsp' + postcode + '</h5>';
            tempStr +=      '</div>';
            tempStr +=      '<div class="col-xs-6 white text-right">';
            tempStr +=          '<h5 class="font-reg">' + deelgemeente + '&nbsp' + land + '</h5>';
            tempStr +=      '</div>';
            tempStr +=    '<hr>';
            tempStr +=  '</div>';
            tempStr += '</div>';//end row
            
            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error');
            }
        }
        xhr.onerror = function() {
        console.log('Error');
        }
        xhr.send();
        };

    this.updateUI = function() {

    };

    this.toString = function() {
    return `TaxilocatiesApp with id: ${this.id}`;
    };

};

    var ww1 = new TaxilocatiesApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());          

})();
