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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    cordova.plugins.iosrtc.registerGlobals();

        const client = new DyteClient({ clientId: "orgId|clientId" });
        const meeting = client.Meeting({
            roomName: "vxujdm-oewvkc",
            authToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlMjJmOWMyLTNkNjItNDljZi04NmE5LTQ0MTA5NmU2MjcyMyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2MzE5NzE3OTMsImV4cCI6MTYzMjA1ODE5M30.PrcQLszUU-JNkp0dynzlObu6zcY5eA9-dB6u5ih99lvWxDGnn-HBh5G9BiDLjcoVVniyryNGuq6nLvoFB6Qdrf7GcyBKhLldMKO_4JsBvRr8BGmvQ2_Pp6HTp8raKCitkgg0NNAtGS0CkCt-yDF6VmW1dMjm_TOpqp0O5rbIl6VsMNGnzNT8mQwnjTYtg6wud5SAt8D51BVtVHaN19dAXVnZJh1r9K9Hy41hCz2A-VDUi0w2ZKF3rkhzbXhzXjNjOV7_pOTvwhq5xvYmNwOjglv5xrL_7ViE8zej6hzCnDijjVou2MeX5uF26DcdOaHTHGImypsomnxZGWviIq9yFA"
        });

        meeting.init("root");
}
