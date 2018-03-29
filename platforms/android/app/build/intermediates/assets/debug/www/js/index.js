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
    },
    onBatteryStatus: function(status){
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
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
