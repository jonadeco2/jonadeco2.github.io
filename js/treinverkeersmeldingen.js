;(function() {

  function ParkingApp(id, parentContainer) {
    this.API_URL = 'https://datatank.stad.gent/4/mobiliteit/verkeersmeldingenhistoriek.json';
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
            for(i=0; i < 10; i++){
            var payload = data[i].payload;
            var message = payload.message;
            var platform = payload.arrival_platform;
            var from = payload.from;
            var to = payload.to;
            
            /*
            tempStr += '<div class="row row_custom">';
            tempStr += '<div class="col-xs-12 white"><p><i class="fa fa-exclamation-triangle icon-custom fa-1x" aria-hidden="true"></i> &nbsp' + message + '</p></div>';
            tempStr += '</div>';//end row
            //end row*/

            tempStr +=  '<div class="col-lg-6 col-xs-12 row_custom">';
            tempStr +=      '<div class="col-xs-2 white triangle">';
            tempStr +=          '<i class="fa fa-exclamation-triangle icon-custom fa-3x" aria-hidden="true"></i>';
            tempStr +=      '</div>';
            tempStr +=      '<div class="col-xs-10 white">';

            tempStr +=          '<h5 class="font-reg">' + message + '</h5>';
            tempStr +=          '<div class="row">';
            tempStr +=          '<div class="col-xs-8 whiteSeeThrough">';
            tempStr +=              '<h6 class="font"><i class="fa fa-map-marker whiteSeeThrough" aria-hidden="true"></i> &nbsp' + "from &nbsp" + from + "&nbsp to &nbsp" + to + '</h5>';
            tempStr +=          '</div>';
            tempStr +=          '<div class="col-xs-4 whiteSeeThrough">';
            tempStr +=              '<h6 class="font"><i class="fa fa-train whiteSeeThrough" aria-hidden="true"></i> &nbsp' + "Spoor: &nbsp" + platform + '</h5>';
            tempStr +=          '</div>';
            tempStr +=          '</div>';
            tempStr +=      '</div>';
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
    return `ParkingApp with id: ${this.id}`;
    };

};

    var ww1 = new ParkingApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());          

})();