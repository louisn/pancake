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
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
        document.addEventListener("menuButton", app.onMenuPress, false);
        app.setMenuHandlers();
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);
    }
    onMenuPress: function(){
    	alert("onMenuPress");
    	// TODO add the menu display and hide code here
    }
    setMenuHandlers: function {
      $('#exit').on("touchstart", function() {
        navigator.app.exitApp();
      });
      $('#hello').on("touchend", function() {
        alert('Hello!');
      });
      $('#closeMenu').on("touchend", function() {
        onMenuPress();
      });
      $('#menuToggle').on("touchend", function() {
        onMenuPress();
      });
    }
}
};
