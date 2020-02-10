'use strict';
let DeviceInfo = require('react-native-device-info');

let deviceInfo = {
    getUniqueID: getUniqueID,
    getManufacturer: getManufacturer,
    getBrand: getBrand,
    getModel: getModel,
    getDeviceId: getDeviceId,
    getSystemName: getSystemName,
    getSystemVersion: getSystemVersion,
    getBundleId: getBundleId,
    getBuildNumber: getBuildNumber,
    getVersion: getVersion,
    getReadableVersion: getReadableVersion,
    getDeviceName: getDeviceName,
    getUserAgent: getUserAgent,
    getDeviceLocale: getDeviceLocale,
    getDeviceCountry: getDeviceCountry,
    getTimezone: getTimezone,
    isEmulator: isEmulator,
    isTablet: isTablet,
    isPinOrFingerprintSet: isPinOrFingerprintSet,
    getAPILevel: getAPILevel,
    getInstanceID: getInstanceID,
    getPhoneNumber: getPhoneNumber,
    getFirstInstallTime: getFirstInstallTime,
    getLastUpdateTime: getLastUpdateTime,
    getSerialNumber: getSerialNumber,
    getIPAddress: getIPAddress,
    getMACAddress: getMACAddress,
    getCarrier: getCarrier,
    getTotalMemory: getTotalMemory,
    getMaxMemory: getMaxMemory
}

export default deviceInfo;


/**
 * Get Device Unique ID
 * string e.g. "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
 * This is IDFV on iOS so it will change if all apps from
 * the current apps vendor have been previously uninstalled.
 */
function getUniqueID() {
    return DeviceInfo.getUniqueID();
}

/**
 * Get Device Manufacturer
 * string e.g. "Apple"
 */
function getManufacturer() {
    return DeviceInfo.getManufacturer();
}

/**
 * Get Device Brand
 * string e.g. "Apple / htc / Xiaomi"
 */
function getBrand() {
    return DeviceInfo.getBrand();
}

/**
 * Get Device Model
 * string e.g. "iPhone 6"
 */
function getModel() {
    return DeviceInfo.getModel();
}

/**
 * Get Device ID
 * string e.g. "iPhone7,2"	Or the board on Android e.g. goldfish
 */
function getDeviceId() {
    return DeviceInfo.getDeviceId();
}

/**
 * Get System Name
 * string e.g. "iPhone OS"
 */
function getSystemName() {
    return DeviceInfo.getSystemName();
}

/**
 * Get System Version
 * string e.g. "9.0"
 */
function getSystemVersion() {
    return DeviceInfo.getSystemVersion();
}

/**
 * Get Bundle ID
 * string e.g. "com.learnium.mobile"
 */
function getBundleId() {
    return DeviceInfo.getBundleId();
}

/**
 * Get Build Number
 * string e.g. "89"
 */
function getBuildNumber() {
    return DeviceInfo.getBuildNumber();
}

/**
 * Get App Version
 * string e.g. "1.1.0"
 */
function getVersion() {
    return DeviceInfo.getVersion();
}

/**
 * Get App Version (Readable)
 * string e.g. "1.1.0.89"
 */
function getReadableVersion() {
    return DeviceInfo.getReadableVersion();
}

/**
 * Get Device Name
 * string e.g. "Becca's iPhone 6"
 */
function getDeviceName() {
    return DeviceInfo.getDeviceName();
}

/**
 * Get User Agent
 * string e.g. "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.009; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.98 Mobile Safari/537.36"
 */
function getUserAgent() {
    return DeviceInfo.getUserAgent();
}


/**
 * Get Device Locale
 * string e.g. "en-US"
 */
function getDeviceLocale() {
    return DeviceInfo.getDeviceLocale();
}

/**
 * Get Device Country
 * string e.g. "US"
 */
function getDeviceCountry() {
    return DeviceInfo.getDeviceCountry();
}

/**
 * Get Timezone
 * string e.g. "America/Mexico_City"
 */
function getTimezone() {
    return DeviceInfo.getTimezone();
}

/**
 * Get App is running in emulator
 * boolean e.g. true	if app is running in emulator return true
 */
function isEmulator() {
    return DeviceInfo.isEmulator();
}

/**
 * Get App is running on a tablet
 * boolean e.g. true	if app is running on a tablet return true
 */
function isTablet() {
    return DeviceInfo.isTablet();
}

/**
 * Get PIN or fingerprint set
 * (callback: (isPinOrFingerprintSet: boolean) => void) => void	Only supported in Android and iOS 9.0 and above
 */
function isPinOrFingerprintSet() {
    return DeviceInfo.isPinOrFingerprintSet();
}

/**
 * Get API Level
 * number e.g. 25	ANDROID ONLY - see API Levels
 */
function getAPILevel() {
    return DeviceInfo.getAPILevel();
}

/**
 * Get App Instance ID
 * string	ANDROID ONLY - see https://developers.google.com/instance-id/
 */
function getInstanceID() {
    return DeviceInfo.getInstanceID();
}

/**
 * Get Phone Number
 * ?string e.g. "2348675309" or ""	Only supported in Android
 */
function getPhoneNumber() {
    return DeviceInfo.getPhoneNumber();
}

/**
 * Get First Install Time
 * number e.g. 1505607068808	Only supported in Android
 */
function getFirstInstallTime() {
    return DeviceInfo.getFirstInstallTime();
}

/**
 * Get Last Install Time
 * number e.g. 1505607068808	Only supported in Android
 */
function getLastUpdateTime() {
    return DeviceInfo.getLastUpdateTime();
}

/**
 * Get Serial Number
 * string	Only supported in Android
 */
function getSerialNumber() {
    return DeviceInfo.getSerialNumber();
}

/**
 * Get IP Address
 * Promise<string>	Only supported in Android
 */
function getIPAddress() {
    return DeviceInfo.getIPAddress();
}

/**
 * Get MAC Address
 * Promise<string>	Only supported in Android
 */
function getMACAddress() {
    return DeviceInfo.getMACAddress();
}

/**
 * Get Carrier
 * string e.g. "SOFTBANK"	
 */
function getCarrier() {
    return DeviceInfo.getCarrier();
}

/**
 * Get Total Memory
 * number e.g. 1995018240	Total amount of memory on the device
 */
function getTotalMemory() {
    return DeviceInfo.getTotalMemory();
}

/**
 * Get Max Memory
 * number e.g. 268435456	ANDROID ONLY - see https://developer.android.com/reference/java/lang/Runtime.html#maxMemory();
 */
function getMaxMemory() {
    return DeviceInfo.getMaxMemory();
}