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

            
            tempStr += '<div class="row row_custom">';
            tempStr += '<div class="col-xs-12 white"><p><i class="fa fa-exclamation-triangle icon-custom fa-1x" aria-hidden="true"></i> &nbsp' + message + '</p></div>';
            tempStr += '</div>';//end row
            //end row
            
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