/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var contador =0;
var aux = true;   


function funcGuay(){
      contador+=1;
      
       if(contador==1){
           document.getElementById("img1").style.width="100%";
       
        
       }else if(contador>=2){
           
            document.getElementById("img1").style.width="30%";  
           
       }
      
};

function sacarFoto(){ 
    
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI });



};
    function onSuccess(imageURI) {
    
    var image = document.getElementById('img1');
    //imageURI = "/Users/mbs/Desktop/Phonegap/hello/platforms";
    image.style.display = 'block';
    navigator.vibrate(1000);
    alert("Foto guardada");
    image.src = imageURI;
    
       
    
};
       function onFail(message) {
    alert('Failed because: ' + message);
}; 
    

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
   
        onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var td1 = document.getElementById('device');
        var td2 = document.getElementById('platform');
        var dev = device.model;
        var plat =device.platform;
        td1.innerHTML =dev;
        td2.innerHTML=plat;
       
        
    },
    onBatteryStatus: function(status){
    var td1 = document.getElementById('percent');
    var td2 = document.getElementById('conection');
        var porcentaje = status.level+"%";
        td1.innerHTML=porcentaje;    
    if(status.level==100){    
        navigator.vibrate(1000);
        alert('Carga Completada');
    }
    
    var si = "SI";
    var no = "NO";    
    
    var enchufado = status.isPlugged;
    if (enchufado == true){
    
    td2.innerHTML = si; 
    navigator.vibrate(1000);
    }else{
    td2.innerHTML = no;    
    }
       
},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        window.addEventListener("batterystatus",this.onBatteryStatus,false);
        
        
    
        
    }
};
