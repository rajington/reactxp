"use strict";
/**
* Text.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform Text abstraction.
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
var React = require("react");
var RN = require("react-native");
var AccessibilityUtil_1 = require("./AccessibilityUtil");
var Styles_1 = require("./Styles");
var _styles = {
    defaultText: Styles_1.default.createTextStyle({
        overflow: 'hidden'
    })
};
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // To be able to use Text inside TouchableHighlight/TouchableOpacity
    Text.prototype.setNativeProps = function (nativeProps) {
        this.refs['nativeText'].setNativeProps(nativeProps);
    };
    Text.prototype.render = function () {
        var importantForAccessibility = AccessibilityUtil_1.default.importantForAccessibilityToString(this.props.importantForAccessibility);
        return (React.createElement(RN.Text, { style: this._getStyles(), ref: 'nativeText', importantForAccessibility: importantForAccessibility, numberOfLines: this.props.numberOfLines, allowFontScaling: this.props.allowFontScaling, maxContentSizeMultiplier: this.props.maxContentSizeMultiplier, onPress: this.props.onPress, selectable: this.props.selectable, textBreakStrategy: 'simple', ellipsizeMode: this.props.ellipsizeMode, elevation: this.props.elevation }, this.props.children));
    };
    Text.prototype._getStyles = function () {
        return Styles_1.default.combine([_styles.defaultText, this.props.style]);
    };
    Text.prototype.focus = function () {
        AccessibilityUtil_1.default.setAccessibilityFocus(this);
    };
    Text.prototype.blur = function () {
        // No-op
    };
    return Text;
}(React.Component));
exports.Text = Text;
exports.default = Text;