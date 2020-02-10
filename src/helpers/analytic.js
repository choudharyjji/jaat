import firebase from "react-native-firebase";

import deviceInfo from "./device-info";

let analytic = {
    logEvent: logEvent,
    setAnalyticsCollectionEnabled: setAnalyticsCollectionEnabled,
    setCurrentScreen: setCurrentScreen,
    setMinimumSessionDuration: setMinimumSessionDuration,
    setSessionTimeoutDuration: setSessionTimeoutDuration,
    setUserId: setUserId,
    setUserProperty: setUserProperty
};

/**
 * Log a custom event with optional params.
 * event: string
 * params: object
 */
function logEvent(event, params) {
    params['device'] = {
        name: deviceInfo.getDeviceName(),
        country: deviceInfo.getDeviceCountry(),
        locale: deviceInfo.getDeviceLocale(),
        uuid: deviceInfo.getUniqueID(),
        deviceId: deviceInfo.getDeviceId()
    };
    firebase.analytics().logEvent(event, params);
};

/**
 * If true, allows the device to collect analytical data and send it to Firebase.
 * enabled: boolean
 */
function setAnalyticsCollectionEnabled(enabled) {
    firebase.analytics().setAnalyticsCollectionEnabled(enabled);
}

/**
 * Sets the current screen name.
 * Take Care
 *  Whilst screenClassOverride is optional,
 *  it is recommended it is always sent as your current class name,
 *  for example on Android it will always show as 'MainActivity' if not specified.
 * screenName: string
 * screenClassOverride: string (optional)
 */
function setCurrentScreen(screenName, screenClassOverride) {
    firebase.analytics().setCurrentScreen(screenName, screenClassOverride);
}

/**
 * Sets the minimum engagement time required before starting a session.
 * The default value is 10000 (10 seconds).
 * miliseconds: number
 */
function setMinimumSessionDuration(miliseconds) {
    firebase.analytics().setMinimumSessionDuration(miliseconds);
}

/**
 * Sets the duration of inactivity that terminates the current session.
 * The default value is 1800000 (30 minutes).
 * miliseconds: number
*/
function setSessionTimeoutDuration(miliseconds) {
    firebase.analytics().setSessionTimeoutDuration(miliseconds);
}

/**
 * Gives a user a unique identification.
 * id: string
*/
function setUserId(id) {
    firebase.analytics().setUserId(id);
}

/**
 * Sets a key/value pair of data on the current user.
 * name: string
 * value: string
*/
function setUserProperty(name, value) {
    firebase.analytics().setUserProperty(name, value);
}

export default analytic;