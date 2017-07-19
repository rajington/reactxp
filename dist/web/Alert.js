"use strict";
/**
* Alert.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web Alert dialog boxes.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RX = require("../common/Interfaces");
// Web/HTML implementation for alert dialog boxes
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.show = function (title, message, buttons, icon) {
        if ('Notification' in window) {
            // There is no <button> and <type> support for Web/HTML notifications!
            var options_1 = { body: message, icon: icon };
            // Permission check / request is needed to support browsers with an opt-in notificiaton permission model
            if (Notification.permission === 'granted') {
                /* tslint:disable:no-unused-variable */
                // new instance of Notification needs to be created but not used
                var htmlNotification = new Notification(title, options_1);
                /* tslint:enable:no-unused-variable */
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === 'granted') {
                        /* tslint:disable:no-unused-variable */
                        // new instance of Notification needs to be created but not used
                        var htmlNotification = new Notification(title, options_1);
                        /* tslint:enable:no-unused-variable */
                    }
                });
            }
        }
        else {
            // Fallback to traditional js alert() if Notification isn't supported
            alert("" + title + (message !== undefined && message !== null && message.length > 0 ? ": " + message : ''));
        }
    };
    return Alert;
}(RX.Alert));
exports.Alert = Alert;
exports.default = new Alert();