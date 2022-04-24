interface AlarmManagerObject {
	/**  */
	alarm: AlarmManager;
}

interface AlarmManager {
	/** 
 Adds an alarm to the storage.
             */
	add(alarm: Alarm,applicationId: ApplicationId,appControl: ApplicationControl): void
	/** 
 Removes an alarm from the storage.
             */
	remove(id: AlarmId): void
	/** 
 Removes all alarms added by an application.
             */
	removeAll(): void
	/** 
 Returns an alarm as per the specified identifier.
             */
	get(id: AlarmId): Alarm
	/** 
 Retrieves all alarms in an application storage.
             */
	getAll(): void
}

interface Alarm {
	/** 
 The alarm identifier.
             */
	id: AlarmId;
}

interface AlarmRelative {
	/** 
 An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
             */
	delay: long;
	/** 
 An attribute to store the duration in seconds between each trigger of an alarm.
By default, this attribute is set to , indicating that this alarm does not repeat.
             */
	period: long;
	/** 
 Returns the duration in seconds before the next alarm is triggered.
             */
	getRemainingSeconds(): void
}

interface AlarmAbsolute {
	/** 
 An attribute to store the absolute date/time when the alarm is initially triggered.
             */
	date: Date;
	/** 
 An attribute to store the duration in seconds between each trigger of the alarm.
             */
	period: long;
	/** 
 An attribute to store the days of the week associated with the recurrence rule.
             */
	daysOfTheWeek: ByDayValue[];
	/** 
 Returns the date / time of the next alarm trigger.
             */
	getNextScheduledDate(): void
}

interface ApplicationManagerObject {
	/**  */
	application: ApplicationManager;
}

interface ApplicationManager {
	/** 
 Gets the object defining the current application.
             */
	getCurrentApplication(): Application
	/** 
 Kills an application with the specified application context ID.
             */
	kill(contextId: ApplicationContextId,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Launches an application with the given application ID.
             */
	launch(id: ApplicationId,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Launches an application with the specified application control.
             */
	launchAppControl(appControl: ApplicationControl,id: ApplicationId,successCallback: SuccessCallback,errorCallback: ErrorCallback,replyCallback: ApplicationControlDataArrayReplyCallback): void
	/** 
 Finds which applications can be launched with the given application control.
             */
	findAppControl(appControl: ApplicationControl,successCallback: FindAppControlSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets a list of application contexts for applications that are currently running on a device.
The information contained for each application corresponds to the application state at the time when the list had been generated.
             */
	getAppsContext(successCallback: ApplicationContextArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the application context for the specified application context ID.
If the ID is set to or is not set at all, the method returns the application context of the current application.
The list of running applications and their application IDs is obtained with .
             */
	getAppContext(contextId: ApplicationContextId): ApplicationContext
	/** 
 Gets the list of installed applications' information on a device.
The information contained on each application corresponds to the application state at the time when the list had been generated.
             */
	getAppsInfo(successCallback: ApplicationInformationArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets application information for a specified application ID.
             */
	getAppInfo(id: ApplicationId): ApplicationInformation
	/** 
 Gets application certificates for a specified application ID.
             */
	getAppCerts(id: ApplicationId): void
	/** 
 Gets the URI of the read-only shared directory of an application for a specified application ID.
             */
	getAppSharedURI(id: ApplicationId): void
	/** 
 Gets the application meta data array for a specified application ID.
             */
	getAppMetaData(id: ApplicationId): void
	/** 
 Adds a listener for receiving any notification for changes in the list of installed applications
on a device.
             */
	addAppInfoEventListener(eventCallback: ApplicationInformationEventCallback): void
	/** 
 Removes the listener to stop receiving notifications for changes on the list of installed
applications on a device.
             */
	removeAppInfoEventListener(watchId: long): void
}

interface Application {
	/** 
 An attribute to store the application information for the current application.
             */
	appInfo: ApplicationInformation;
	/** 
 An attribute to store the ID of a running application.
             */
	contextId: ApplicationContextId;
	/** 
 Exits the current application.
             */
	exit(): void
	/** 
 Hides the current application.
             */
	hide(): void
	/** 
 Gets the requested application control passed to the current application.
             */
	getRequestedAppControl(): RequestedApplicationControl
	/** 
 Adds a listener which will invoke a callback function when an event occurs.
             */
	addEventListener(event: EventInfo,callback: EventCallback): void
	/** 
 Removes an event listener with a specified listener identifier.
             */
	removeEventListener(watchId: long): void
	/** 
 Broadcasts a user defined event to all the listeners which are listening for this event.
             */
	broadcastEvent(event: EventInfo,data: UserEventData): void
	/** 
 Broadcasts a user defined event to all the trusted listeners which are listening for this event. Applications which have the same certificate as the sending application can receive the event.
             */
	broadcastTrustedEvent(event: EventInfo,data: UserEventData): void
}

interface ApplicationInformation {
	/** 
 An attribute to store the identifier of an application for application management.
             */
	id: ApplicationId;
	/** 
 An attribute to store the name of an application.
             */
	name: DOMString;
	/** 
 An attribute to store the icon path of an application.
             */
	iconPath: DOMString;
	/** 
 An attribute to store the version of an application.
             */
	version: DOMString;
	/** 
 An attribute that determines whether the application information should
be shown (such as in menus).
             */
	show: boolean;
	/** 
 An array of attributes to store the categories that the app belongs to.
             */
	categories: DOMString[];
	/** 
 An attribute to store the application install/update time.
             */
	installDate: Date;
	/** 
 An attribute to store the application size (installed space).
             */
	size: long;
	/** 
 An attribute to store the package ID of an application.
             */
	packageId: PackageId;
}

interface ApplicationContext {
	/** 
 An attribute to store the ID of a running application.
             */
	id: ApplicationContextId;
	/** 
 An attribute to store the ID of an installed application.
             */
	appId: ApplicationId;
}

interface ApplicationControlData {
	/** 
 An attribute to store the name of a key.
             */
	key: DOMString;
	/** 
 An attribute to store the value associated with a key.
             */
	value: DOMString[];
}

interface ApplicationControl {
	/** 
 An attribute to store the string that defines the action to be
performed by an application control.
             */
	operation: DOMString;
	/** 
 An attribute to store the URI needed by an application control.
             */
	uri: DOMString;
	/** 
 An attribute to store the MIME type of content.
             */
	mime: DOMString;
	/** 
 An attribute to store the category of the application to be launched.
             */
	category: DOMString;
	/** 
 An array of attributes to store the data needed for an application control.
             */
	data: ApplicationControlData[];
	/** 
 An attribute to specify launch mode. Default application launch mode is .
             */
	launchMode: ApplicationControlLaunchMode;
}

interface RequestedApplicationControl {
	/** 
 An attribute to store the application control object that describes the caller application's request.
It contains the information that the calling application passed to .
             */
	appControl: ApplicationControl;
	/** 
 An attribute to store the caller application's ID.
             */
	callerAppId: ApplicationId;
	/** 
 Sends the results to the caller application.
             */
	replyResult(data: ApplicationControlData[]): void
	/** 
 Notifies the calling application that the application failed
to perform the requested action.
             */
	replyFailure(): void
}

interface ApplicationCertificate {
	/** 
 An attribute to store the type of the application certificate
             */
	type: DOMString;
	/** 
 An attribute to store the value of the application certificate
             */
	value: DOMString;
}

interface ApplicationMetaData {
	/** 
 An attribute to store the key of the application meta data
             */
	key: DOMString;
	/** 
 An attribute to store the value of the application meta data
             */
	value: DOMString;
}

interface ApplicationInformationArraySuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(informationArray: ApplicationInformation[]): void
}

interface FindAppControlSuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(informationArray: ApplicationInformation[],appControl: ApplicationControl): void
}

interface ApplicationContextArraySuccessCallback {
	/** 
 Called when completes successfully.
             */
	onsuccess(contexts: ApplicationContext[]): void
}

interface ApplicationControlDataArrayReplyCallback {
	/** 
 Called when the callee application calls .
             */
	onsuccess(data: ApplicationControlData[]): void
	/** 
 Called when the callee application calls .
             */
	onfailure(): void
}

interface ApplicationInformationEventCallback {
	/** 
 Called when an application is installed.
             */
	oninstalled(info: ApplicationInformation): void
	/** 
 Called when an application is updated.
             */
	onupdated(info: ApplicationInformation): void
	/** 
 Called when an application is uninstalled.
             */
	onuninstalled(id: ApplicationId): void
}

interface SystemEventData {
	/**  */
	value: DOMString;
	/**  */
	type: DOMString;
}

interface EventCallback {
	/** 
 Called when the event occurs.
             */
	onevent(event: EventInfo,data: EventData): void
}

interface ArchiveManagerObject {
	/**  */
	archive: ArchiveManager;
}

interface ArchiveManager {
	/** 
 Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
             */
	open(file: FileReference,mode: FileMode,onsuccess: ArchiveFileSuccessCallback,onerror: ErrorCallback,options: ArchiveFileOptions): void
	/** 
 Cancels an operation with the given identifier.
             */
	abort(operationIdentifier: long): void
}

interface ArchiveFile {
	/** 
 attribute File mode when it is opened.
             */
	mode: FileMode;
	/** 
 Size of all the files included in the archive after decompression.
             */
	decompressedSize: number;
	/** 
 Adds a new member file to .
             */
	add(sourceFile: FileReference,onsuccess: SuccessCallback,onerror: ErrorCallback,onprogress: ArchiveFileProgressCallback,options: ArchiveFileEntryOptions): void
	/** 
 Extracts every file from this  to a given directory.
             */
	extractAll(destinationDirectory: FileReference,onsuccess: SuccessCallback,onerror: ErrorCallback,onprogress: ArchiveFileProgressCallback,overwrite: boolean): void
	/** 
 Retrieves information about the member files in .
             */
	getEntries(onsuccess: ArchiveFileEntryArraySuccessCallback,onerror: ErrorCallback): void
	/** 
 Retrieves information about  with the specified name in .
             */
	getEntryByName(name: DOMString,onsuccess: ArchiveFileEntrySuccessCallback,onerror: ErrorCallback): void
	/** 
 Closes the .
             */
	close(): void
}

interface ArchiveFileEntry {
	/** 
 Path identifying the member file of ArchiveFile. This is a full path with the directory and base name of the entry.
             */
	name: DOMString;
	/** 
 Original size of the member file [bytes].
             */
	size: number;
	/** 
 Amount of storage space used by the member file, which may be compressed, in ArchiveFile [bytes].
             */
	compressedSize: number;
	/** 
 Date and time stored with the member file.
This is usually the modification date of the file.
             */
	modified: Date;
	/** 
 Extracts ArchiveFileEntry to the given location.
             */
	extract(destinationDirectory: FileReference,onsuccess: SuccessCallback,onerror: ErrorCallback,onprogress: ArchiveFileProgressCallback,stripName: boolean,overwrite: boolean): void
}

interface ArchiveFileSuccessCallback {
	/** 
 Called when the archive file with the given name is ready to use.
             */
	onsuccess(archive: ArchiveFile): void
}

interface ArchiveFileEntrySuccessCallback {
	/** 
 Called when the file with the given name through getEntryByName() is found successfully.
             */
	onsuccess(entry: ArchiveFileEntry): void
}

interface ArchiveFileEntryArraySuccessCallback {
	/** 
 Called when all file entries in the archive file are retrieved successfully.
             */
	onsuccess(entries: ArchiveFileEntry[]): void
}

interface ArchiveFileProgressCallback {
	/** 
 Called to signal compressing or extracting operation progress.
             */
	onprogress(operationIdentifier: long,value: double,filename: DOMString): void
}

interface BadgeManagerObject {
	/**  */
	badge: BadgeManager;
}

interface BadgeManager {
	/** 
 Maximum length of a badge number.
             */
	maxBadgeCount: long;
	/** 
 Sets the badge count for the designated application. Only applications with the same author signature can have their badge count modified.
             */
	setBadgeCount(appId: ApplicationId,count: long): void
	/** 
 Gets the badge count for the designated application.
             */
	getBadgeCount(appId: ApplicationId): void
	/** 
 Adds a listener to receive a notification when the badge number for the designated application changes.
             */
	addChangeListener(appIdList: ApplicationId[],successCallback: BadgeChangeCallback): void
	/** 
 Unsubscribes from receiving notifications for badge number changes.
             */
	removeChangeListener(appIdList: ApplicationId[]): void
}

interface BadgeChangeCallback {
	/** 
 Called when the badge number of a specified application is updated.
             */
	onsuccess(appId: ApplicationId,count: long): void
}

interface BluetoothManagerObject {
	/**  */
	bluetooth: BluetoothManager;
}

interface BluetoothLEServiceData {
	/** 
 The 16 bit UUID of service data
             */
	uuid: BluetoothUUID;
	/** 
 The service data of the Bluetooth LE device
             */
	data: DOMString;
}

interface BluetoothLEManufacturerData {
	/** 
 The manufacturer assigned ID
             */
	id: DOMString;
	/** 
 The manufacturer data content
             */
	data: DOMString;
}

interface BluetoothLEAdvertiseData {
	/** 
 The flag indicating whether the device name should be included in advertise or scan response data.
If attribute is set to null, The default value is set to a false.
             */
	includeName: boolean;
	/** 
 The service UUID for advertise or scan response data.
             */
	uuids: BluetoothUUID[];
	/** 
 The service solicitation UUID for advertise or scan response data.
             */
	solicitationuuids: BluetoothLESolicitationUUID[];
	/** 
 The external appearance of this device for advertise or scan response data.
             */
	appearance: number;
	/** 
 The transmission power level should be included in advertise or scan response data.
If attribute is set to null, The default value is set to a false.
             */
	includeTxPowerLevel: boolean;
	/** 
 The service data for advertise or scan response data.
             */
	serviceData: BluetoothLEServiceData;
	/** 
 The manufacturer specific data for advertise or scan response data.
             */
	manufacturerData: BluetoothLEManufacturerData;
}

interface BluetoothManager {
	/** 
 The major device class identifier of Bluetooth class of device (CoD).
             */
	deviceMajor: BluetoothClassDeviceMajor;
	/** 
 The minor device class identifier of Bluetooth class of device (CoD).
             */
	deviceMinor: BluetoothClassDeviceMinor;
	/** 
 The major service class identifier of Bluetooth class of device (CoD).
             */
	deviceService: BluetoothClassDeviceService;
	/** 
 Gets the default local Bluetooth adapter.
             */
	getDefaultAdapter(): BluetoothAdapter
	/** 
 Gets the default Low Energy Bluetooth adapter.
             */
	getLEAdapter(): BluetoothLEAdapter
}

interface BluetoothAdapter {
	/** 
 The readable name of the Bluetooth adapter.
             */
	name: DOMString;
	/** 
 The unique hardware address of the Bluetooth adapter, also known as the MAC address.
             */
	address: BluetoothAddress;
	/** 
 The current state of the Bluetooth adapter.
             */
	powered: boolean;
	/** 
 The current visibility state of the Bluetooth adapter, that is, whether the local device is discoverable by remote devices.
             */
	visible: boolean;
	/** 
 Sets the local Bluetooth adapter name.
             */
	setName(name: DOMString,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Sets the state of a Bluetooth adapter to on or off by sending a request to Bluetooth hardware to change the power state.
For most Bluetooth actions, the Bluetooth adapter must be powered on.
             */
	setPowered(state: boolean,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Sets the listener to receive notifications about changes of Bluetooth adapter.
             */
	setChangeListener(listener: BluetoothAdapterChangeCallback): void
	/** 
 Unsets the listener, so stop receiving notifications about changes of Bluetooth adapter.
             */
	unsetChangeListener(): void
	/** 
 Discovers nearby Bluetooth devices if any, that is, devices within proximity to the local device.
             */
	discoverDevices(successCallback: BluetoothDiscoverDevicesSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Stops an active device discovery session.
             */
	stopDiscovery(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets all the known devices that have information stored in the local Bluetooth adapter.
             */
	getKnownDevices(successCallback: BluetoothDeviceArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the  object for a given device hardware address.
             */
	getDevice(address: BluetoothAddress,successCallback: BluetoothDeviceSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Creates a bond with a remote device by initiating the bonding process with peer device, using the given MAC address. The remote device must be bonded with the local device in order to connect to services of the remote device and then exchange data with each other.
             */
	createBonding(address: BluetoothAddress,successCallback: BluetoothDeviceSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Destroys the bond with a remote device.
             */
	destroyBonding(address: BluetoothAddress,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers a service record in the device service record database with the specified , .
             */
	registerRFCOMMServiceByUUID(uuid: BluetoothUUID,name: DOMString,successCallback: BluetoothServiceSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the profile handler for the given type.
             */
	getBluetoothProfileHandler(profileType: BluetoothProfileType): BluetoothProfileHandler
}

interface BluetoothLEAdapter {
	/** 
 Starts scanning for Low Energy advertisement.
             */
	startScan(successCallback: BluetoothLEScanCallback,errorCallback: ErrorCallback): void
	/** 
 Stops scanning for Low Energy advertisement.
             */
	stopScan(): void
	/** 
 Starts advertising for Low Energy Devices.
             */
	startAdvertise(advertiseData: BluetoothLEAdvertiseData,packetType: BluetoothAdvertisePacketType,successCallback: BluetoothLEAdvertiseCallback,errorCallback: ErrorCallback,mode: BluetoothAdvertisingMode,connectable: boolean): void
	/** 
 Stops advertising for Low Energy Devices.
             */
	stopAdvertise(): void
}

interface BluetoothGATTService {
	/** 
 UUID of the service.
             */
	uuid: BluetoothUUID;
	/** 
 A list of services included in this service.
             */
	services: BluetoothGATTService[];
	/** 
 A list of characteristics in this service.
             */
	characteristics: BluetoothGATTCharacteristic[];
}

interface BluetoothGATTCharacteristic {
	/** 
 A list of descriptors in this characteristic.
             */
	descriptors: BluetoothGATTDescriptor[];
	/** 
 Indicates if the characteristic is broadcastable.
             */
	isBroadcast: boolean;
	/** 
 Indicates if the characteristic has extended properties.
             */
	hasExtendedProperties: boolean;
	/** 
 Indicates if the characteristic supports notification.
             */
	isNotify: boolean;
	/** 
 Indicates if the characteristic supports indication.
             */
	isIndication: boolean;
	/** 
 Indicates if the characteristic is readable.
             */
	isReadable: boolean;
	/** 
 Indicates if the characteristic supports write with the signature.
             */
	isSignedWrite: boolean;
	/** 
 Indicates if the characteristic is writable.
             */
	isWritable: boolean;
	/** 
 Indicates if the characteristic supports writing without response.
             */
	isWriteNoResponse: boolean;
	/** 
 Reads the characteristic value from the remote device. Updates characteristic value attribute.
             */
	readValue(successCallback: ReadValueSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Writes the characteristic value to the remote device.
             */
	writeValue(value: byte[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers a callback to be called when characteristic value of the characteristic changes.
             */
	addValueChangeListener(callback: ReadValueSuccessCallback): void
	/** 
 Unregisters a characteristic value change listener
             */
	removeValueChangeListener(watchID: long): void
}

interface BluetoothGATTDescriptor {
	/** 
 Reads descriptor value from remote device. Updates descriptor value attribute.
             */
	readValue(successCallback: ReadValueSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Writes the descriptor value to the remote device.
             */
	writeValue(value: byte[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface BluetoothLEScanCallback {
	/** 
 Called when a new device is successfully discovered in the process of scanning.
             */
	onsuccess(device: BluetoothLEDevice): void
}

interface BluetoothLEAdvertiseCallback {
	/** 
 Called when the advertising state is changed.
             */
	onstate(state: BluetoothAdvertisingState): void
}

interface BluetoothLEConnectChangeCallback {
	/** 
 Called at the beginning of connect to a specific LE based service on a remote Bluetooth LE device.
             */
	onconnected(device: BluetoothLEDevice): void
	/** 
 Called at the beginning of disconnect to a specific LE based service on a remote Bluetooth LE device.
             */
	ondisconnected(device: BluetoothLEDevice): void
}

interface ReadValueSuccessCallback {
	/** 
 Called when a characteristic value has been read.
             */
	onread(value: byte[]): void
}

interface BluetoothDevice {
	/** 
 The readable name of this remote device.
             */
	name: DOMString;
	/** 
 The hardware address of this remote device.
             */
	address: BluetoothAddress;
	/** 
 The device class, which represents the type of the device and the services it provides.
             */
	deviceClass: BluetoothClass;
	/** 
 The bond state of this remote device with the local device.
             */
	isBonded: boolean;
	/** 
 The flag indicating whether the local device recognizes this remote device as a trusted device or not.
             */
	isTrusted: boolean;
	/** 
 The flag indicating whether the connection state of this remote device with the local device.
             */
	isConnected: boolean;
	/** 
 The list of 128 bit service UUIDs available on this remote device.
             */
	uuids: BluetoothUUID[];
	/** 
 Connects to a specified service identified by  on this remote device.
             */
	connectToServiceByUUID(uuid: BluetoothUUID,successCallback: BluetoothSocketSuccessCallback,errorCallback: ErrorCallback): void
}

interface BluetoothLEDevice {
	/** 
 The address of the Bluetooth LE device from the scan result information.
             */
	address: BluetoothAddress;
	/** 
 The name of the Bluetooth LE device from the scan result information.
             */
	name: DOMString;
	/** 
 The transmission power level of the Bluetooth LE device from the scan result information.
             */
	txpowerlevel: long;
	/** 
 The appearance of the Bluetooth LE device from the scan result information.
             */
	appearance: number;
	/** 
 The list of service UUIDs from scan result.
             */
	uuids: BluetoothUUID[];
	/** 
 The list of service solicitation UUIDs available on Bluetooth LE device from the scan result information.
             */
	solicitationuuids: BluetoothLESolicitationUUID[];
	/** 
 The list of service data available on Bluetooth LE device from the scan result information.
             */
	serviceData: BluetoothLEServiceData[];
	/** 
 The manufacturer data from the scan result information.
             */
	manufacturerData: BluetoothLEManufacturerData;
	/** 
 The received signal strength indicator in dBm (decibel-milliwatts) units.
             */
	rssi: long;
	/** 
 Establishes Low Energy connection to the device.
             */
	connect(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Disconnects from the device.
             */
	disconnect(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Retrieves a service from the device for the given UUID.
             */
	getService(uuid: BluetoothUUID): BluetoothGATTService
	/** 
 Retrieves list of all service UUIDs from connected GATT server.
             */
	getServiceAllUuids(): void
	/** 
 Registers a listener to be called when the device connects or disconnects.
             */
	addConnectStateChangeListener(listener: BluetoothLEConnectChangeCallback): void
	/** 
 Unregisters a Bluetooth device connection listener
             */
	removeConnectStateChangeListener(watchID: long): void
}

interface BluetoothSocket {
	/** 
 The service UUID to which this socket is connected.
             */
	uuid: BluetoothUUID;
	/** 
 The socket state.
             */
	state: BluetoothSocketState;
	/** 
 The peer device to which this socket is connected.
             */
	peer: BluetoothDevice;
	/** 
 Called when an incoming message is received successfully from the peer.
By default, this attribute is set to null.
             */
	onmessage: SuccessCallback;
	/** 
 Called when the socket is closed successfully.
By default, this attribute is set to null.
             */
	onclose: SuccessCallback;
	/** 
 Writes data as a sequence of bytes onto the socket and returns the number of bytes actually written.
             */
	writeData(data: byte[]): void
	/** 
 Reads data from the socket.
             */
	readData(): void
	/** 
 Closes the socket.
             */
	close(): void
}

interface BluetoothClass {
	/** 
 The major device class.
             */
	major: octet;
	/** 
 The minor device class.
             */
	minor: octet;
	/** 
 The services provided by this device and it refers to the  interface for the list of possible
values.
             */
	services: number[];
	/** 
 Checks whether the given service exists in the .
             */
	hasService(service: number): void
}

interface BluetoothClassDeviceMajor {
}

interface BluetoothClassDeviceMinor {
}

interface BluetoothClassDeviceService {
}

interface BluetoothServiceHandler {
	/** 
 The UUID of the service. See .
             */
	uuid: BluetoothUUID;
	/** 
 The name of the service. See .
             */
	name: DOMString;
	/** 
 The flag indicating whether any remote devices is using this service. See .
             */
	isConnected: boolean;
	/** 
 Called when a remote device is connected successfully to this service.
By default, this attribute is set to null.
             */
	onconnect: BluetoothSocketSuccessCallback;
	/** 
 Unregisters a service record from the Bluetooth services record database and stops listening for new connections to this service.
             */
	unregister(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface BluetoothProfileHandler {
	/** 
 The Bluetooth profile type.
             */
	profileType: BluetoothProfileType;
}

interface BluetoothHealthProfileHandler {
	/** 
 Registers an application for the Sink role.
             */
	registerSinkApplication(dataType: number,name: DOMString,successCallback: BluetoothHealthApplicationSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Connects to the health device which acts as the Source role.
             */
	connectToSource(peer: BluetoothDevice,application: BluetoothHealthApplication,successCallback: BluetoothHealthChannelSuccessCallback,errorCallback: ErrorCallback): void
}

interface BluetoothHealthApplication {
	/** 
 The MDEP data type used for communication, which is referenced in the ISO/IEEE 11073-20601 spec.
             */
	dataType: number;
	/** 
 The friendly name associated with sink application. See .
             */
	name: DOMString;
	/** 
 Called when a health device is connected successfully through this application.
             */
	onconnect: BluetoothHealthChannelSuccessCallback;
	/** 
 Unregisters this application.
             */
	unregister(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface BluetoothHealthChannel {
	/** 
 The remote device to which this channel is connected. See .
             */
	peer: BluetoothDevice;
	/** 
 The type of this channel. See .
             */
	channelType: BluetoothHealthChannelType;
	/** 
 The health application which is used to communicate with the remote device. See .
             */
	application: BluetoothHealthApplication;
	/** 
 The flag indicating whether any remote device is connected.
             */
	isConnected: boolean;
	/** 
 Closes the connected channel.
 is changed to  and  is invoked when this channel is closed successfully.
             */
	close(): void
	/** 
 Sends data and returns the number of bytes actually written.
             */
	sendData(data: byte[]): void
	/** 
 Sets the listener to receive notifications.
             */
	setListener(listener: BluetoothHealthChannelChangeCallback): void
	/** 
 Unsets the listener.
This stops receiving notifications.
             */
	unsetListener(): void
}

interface BluetoothAdapterChangeCallback {
	/** 
 Called when the power state is changed.
             */
	onstatechanged(powered: boolean): void
	/** 
 Called when the name is changed.
             */
	onnamechanged(name: DOMString): void
	/** 
 Called when the visibility is changed.
             */
	onvisibilitychanged(visible: boolean): void
}

interface BluetoothDeviceSuccessCallback {
	/** 
 Called on success.
             */
	onsuccess(device: BluetoothDevice): void
}

interface BluetoothDeviceArraySuccessCallback {
	/** 
 Called when device information is ready.
             */
	onsuccess(devices: BluetoothDevice[]): void
}

interface BluetoothDiscoverDevicesSuccessCallback {
	/** 
 Called at the beginning of a device discovery process for finding the nearby Bluetooth device.
             */
	onstarted(): void
	/** 
 Called when a new device is discovered in the process of inquiry/discovery.
             */
	ondevicefound(device: BluetoothDevice): void
	/** 
 Called when a device is lost from proximity.
After that, this device is no longer visible.
             */
	ondevicedisappeared(address: BluetoothAddress): void
	/** 
 Called when the device discovery process has finished.
             */
	onfinished(foundDevices: BluetoothDevice[]): void
}

interface BluetoothSocketSuccessCallback {
	/** 
 Called when the connection to a service is ready.
             */
	onsuccess(socket: BluetoothSocket): void
}

interface BluetoothServiceSuccessCallback {
	/** 
 Called when registering a service with the local device is successful.
             */
	onsuccess(handler: BluetoothServiceHandler): void
}

interface BluetoothHealthApplicationSuccessCallback {
	/** 
 Called when the application is registered successfully.
             */
	onsuccess(application: BluetoothHealthApplication): void
}

interface BluetoothHealthChannelSuccessCallback {
	/** 
 Called when a connection is established.
             */
	onsuccess(channel: BluetoothHealthChannel): void
}

interface BluetoothHealthChannelChangeCallback {
	/** 
 Called when the message is received.
             */
	onmessage(data: byte[]): void
	/** 
 Called when the health channel is closed.
             */
	onclose(): void
}

interface ContentManagerObject {
	/**  */
	content: ContentManager;
}

interface ContentManager {
	/** 
 Updates attributes of content in the content database synchronously.
             */
	update(content: Content): void
	/** 
 Updates a batch of content attributes in the content database asynchronously.
             */
	updateBatch(contents: Content[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets a list of content directories.
             */
	getDirectories(successCallback: ContentDirectoryArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Finds contents that satisfy the conditions set by a filter.
             */
	find(successCallback: ContentArraySuccessCallback,errorCallback: ErrorCallback,directoryId: ContentDirectoryId,filter: AbstractFilter,sortMode: SortMode,count: number,offset: number): void
	/** 
 Scans a file to create or update content in the content database.
             */
	scanFile(contentURI: DOMString,successCallback: ContentScanSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Scans a content directory to create or update content in the content database.
             */
	scanDirectory(contentDirURI: DOMString,recursive: boolean,successCallback: ContentScanSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Cancels a scan process of a content directory.
             */
	cancelScanDirectory(contentDirURI: DOMString): void
	/** 
 Adds a listener which receives notifications when content changes.
             */
	addChangeListener(changeCallback: ContentChangeCallback): void
	/** 
 Removes a listener which receives notifications about content changes.
             */
	removeChangeListener(listenerId: long): void
	/** 
 Sets a listener to receive notifications of content changes.
             */
	setChangeListener(changeCallback: ContentChangeCallback): void
	/** 
 Unsets the listener to unsubscribe from receiving notifications for content changes.
             */
	unsetChangeListener(): void
	/** 
 Gets all playlists.
             */
	getPlaylists(successCallback: PlaylistArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Creates a new playlist.
             */
	createPlaylist(name: DOMString,successCallback: PlaylistSuccessCallback,errorCallback: ErrorCallback,sourcePlaylist: Playlist): void
	/** 
 Removes a playlist.
             */
	removePlaylist(id: PlaylistId,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Creates a content's thumbnail.
             */
	createThumbnail(content: Content,successCallback: ThumbnailSuccessCallback,errorCallback: ErrorCallback): void
}

interface ContentArraySuccessCallback {
	/** 
 Called when the list of content is retrieved successfully.
             */
	onsuccess(contents: Content[]): void
}

interface ContentDirectoryArraySuccessCallback {
	/** 
 Called when the directory list is retrieved successfully.
             */
	onsuccess(directories: ContentDirectory[]): void
}

interface ContentScanSuccessCallback {
	/** 
 Called when the scanning has been completed.
             */
	onsuccess(uri: DOMString): void
}

interface ContentChangeCallback {
	/** 
 Called when content is added.
             */
	oncontentadded(content: Content): void
	/** 
 Called when content is updated.
             */
	oncontentupdated(content: Content): void
	/** 
 Called when content is removed.
             */
	oncontentremoved(id: ContentId): void
	/** 
 Called when a content directory is added.
             */
	oncontentdiradded(contentDir: ContentDirectory): void
	/** 
 Called when a content directory is updated.
             */
	oncontentdirupdated(contentDir: ContentDirectory): void
	/** 
 Called when a content directory is removed.
             */
	oncontentdirremoved(id: ContentDirectoryId): void
}

interface ContentDirectory {
	/** 
 The opaque content directory identifier.
             */
	id: ContentDirectoryId;
	/** 
 The directory path on the device.
             */
	directoryURI: DOMString;
	/** 
 The directory name.
             */
	title: DOMString;
	/** 
 The type of device storage.
             */
	storageType: ContentDirectoryStorageType;
	/** 
 The last modified date for a directory.
             */
	modifiedDate: Date;
}

interface Content {
	/** 
 The list of attributes that are editable to the local backend using the update() or updateBatch() method.
             */
	editableAttributes: DOMString[];
	/** 
 The opaque content identifier.
             */
	id: ContentId;
	/** 
 The content name. The initial value is the file name of the content.
             */
	name: DOMString;
	/** 
 The content type.
             */
	type: ContentType;
	/** 
 The content MIME type.
             */
	mimeType: DOMString;
	/** 
 The content title.
             */
	title: DOMString;
	/** 
 The URI to access the content.
             */
	contentURI: DOMString;
	/** 
 The array of content thumbnail URIs.
             */
	thumbnailURIs: DOMString[];
	/** 
 The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
             */
	releaseDate: Date;
	/** 
 The last modified date for a content item.
             */
	modifiedDate: Date;
	/** 
 The file size of the content in bytes.
             */
	size: number;
	/** 
 The content description.
             */
	description: DOMString;
	/** 
 The content rating. This value can range from  to .
             */
	rating: number;
	/** 
  Boolean value that indicates whether a content item is marked as a favorite.
             */
	isFavorite: boolean;
}

interface VideoContent {
	/** 
 The geographical location where the video has been made.
             */
	geolocation: SimpleCoordinates;
	/** 
 The album name to which the video belongs.
             */
	album: DOMString;
	/** 
 The list of artists who created the video.
             */
	artists: DOMString[];
	/** 
 The video duration in milliseconds.
             */
	duration: number;
	/** 
 The width of a video in pixels.
             */
	width: number;
	/** 
 The height of the video in pixels.
             */
	height: number;
}

interface AudioContentLyrics {
	/** 
 The type of lyrics, that is, whether they are synchronized with the music.
             */
	type: AudioContentLyricsType;
	/** 
 The array of timestamps in milliseconds for lyrics.
             */
	timestamps: number[];
	/** 
 The array of lyrics snippets.
             */
	texts: DOMString[];
}

interface AudioContent {
	/** 
 The album name to which the audio belongs.
             */
	album: DOMString;
	/** 
 The list of genres to which the audio belongs.
             */
	genres: DOMString[];
	/** 
 The list of artists who created the audio.
             */
	artists: DOMString[];
	/** 
 The list of composers for the music.
             */
	composers: DOMString[];
	/** 
 The lyrics of a song in an audio file.
             */
	lyrics: AudioContentLyrics;
	/** 
 The copyright information.
             */
	copyright: DOMString;
	/** 
 The audio bitrate in bits per second. By default, this value is 0.
             */
	bitrate: number;
	/** 
 The track number if the audio belongs to an album.
             */
	trackNumber: number;
	/** 
 The audio duration in milliseconds.
             */
	duration: number;
}

interface ImageContent {
	/** 
 The geographical location where the image has been made.
             */
	geolocation: SimpleCoordinates;
	/** 
 The width of an image in pixels.
             */
	width: number;
	/** 
 The height of an image in pixels.
             */
	height: number;
	/** 
 The image orientation.
             */
	orientation: ImageContentOrientation;
}

interface PlaylistItem {
	/** 
 Content contained in this playlist item.
             */
	content: Content;
}

interface Playlist {
	/** 
 Identifier of a playlist.
             */
	id: PlaylistId;
	/** 
 Name of a playlist (case sensitive and unique).
             */
	name: DOMString;
	/** 
 Number of playlist items in the playlist.
             */
	numberOfTracks: long;
	/** 
 Thumbnail URI of a playlist.
             */
	thumbnailURI: DOMString;
	/** 
 Adds a content item to a playlist.
             */
	add(item: Content): void
	/** 
 Adds tracks to a playlist as a batch, asynchronously.
             */
	addBatch(items: Content[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Removes a track from a playlist.
             */
	remove(item: PlaylistItem): void
	/** 
 Removes tracks from a playlist as a batch, asynchronously.
             */
	removeBatch(items: PlaylistItem[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets playlist items from a playlist.
             */
	get(successCallback: PlaylistItemArraySuccessCallback,errorCallback: ErrorCallback,count: long,offset: long): void
	/** 
 Changes the play order of all playlist items in the playlist.
             */
	setOrder(items: PlaylistItem[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Moves the specified item up or down a specified amount in the play order.
             */
	move(item: PlaylistItem,delta: long,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface PlaylistArraySuccessCallback {
	/** 
 Called when the  method completes successfully.
             */
	onsuccess(playlists: Playlist[]): void
}

interface PlaylistSuccessCallback {
	/** 
 Called when the  method completes successfully.
             */
	onsuccess(playlist: Playlist): void
}

interface PlaylistItemArraySuccessCallback {
	/** 
 Called when the  method completes successfully.
             */
	onsuccess(items: PlaylistItem[]): void
}

interface ThumbnailSuccessCallback {
	/** 
 Called when the  method completes successfully.
             */
	onsuccess(path: DOMString): void
}

interface ConvergenceChannelInfo {
	/** 
 The uri of the channel.
             */
	uri: DOMString;
	/** 
 The identifier of the channel.
             */
	id: DOMString;
}

interface ConvergenceObject {
	/**  */
	convergence: ConvergenceManager;
}

interface ConvergenceManager {
	/** 
 Starts discovery of nearby devices.
             */
	startDiscovery(successCallback: DiscoverySuccessCallback,errorCallback: ErrorCallback,timeout: number): void
	/** 
 Stops discovery of nearby devices.
             */
	stopDiscovery(): void
}

interface Device {
	/** 
 The unique device ID.
Note the device ID is a unique identifier string, generated with following rule.
If the Remote Server is installed on the device (e.g. TV),
then the device ID is assigned by application communication server service.
Usually it has a format of service name and version. Otherwise (e.g. mobile or wearable),
the device ID is device MAC address.
             */
	id: DeviceId;
	/** 
 The device name.
Note device name is one that is set in the Settings app (Settings>About Devices>Device Name).
             */
	name: DOMString;
	/** 
 The device profile type.
Note Device type represents the ,
such as “TV”, “Mobile” or “Wearable”.
             */
	type: DeviceProfile;
	/** 
 The list of services, available on the device.
             */
	services: Service[];
}

interface Service {
	/** 
 The service connection state.
             */
	connectionState: ConnectionState;
	/** 
 The service type.
             */
	type: ServiceType;
}

interface AppCommunicationService {
	/** 
 Starts the service.
             */
	start(channelInfo: ConvergenceChannelInfo,successCallback: AppCommunicationStartCallback,errorCallback: ErrorCallback): void
	/** 
 Get the client lists connected to the channel
             */
	getClientList(channelInfo: ConvergenceChannelInfo,successCallback: AppCommunicationClientListCallback,errorCallback: ErrorCallback): void
	/** 
 Sends a payload to the service.
             */
	send(channelInfo: ConvergenceChannelInfo,payload: Payload[],successCallback: AppCommunicationSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Stops the service.
             */
	stop(channelInfo: ConvergenceChannelInfo,successCallback: AppCommunicationSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers the service listener.
             */
	setListener(listenerCallback: AppCommunicationListenerCallback): void
	/** 
 Unregisters the service listener.
             */
	unsetListener(): void
}

interface AppCommunicationClientService {
	/** 
 Connects to the service.
             */
	connect(successCallback: ConnectSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Disconnects the connected service.
             */
	disconnect(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface AppCommunicationServerService {
}

interface RemoteAppControlService {
	/** 
 Starts and initiates remote service.
             */
	start(successCallback: RemoteAppControlStartCallback,errorCallback: ErrorCallback): void
	/** 
 Stops remote service.
             */
	stop(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Connects to the service.
             */
	connect(successCallback: ConnectSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Disconnects the connected service.
             */
	disconnect(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Sends the given application ID to launch an application on the remote device.
             */
	launch(appId: ApplicationId,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Sends an app control to launch an application on the remote device.
             */
	launchAppControl(appControl: ApplicationControl,appId: ApplicationId,successCallback: SuccessCallback,errorCallback: ErrorCallback,replyCallback: RemoteAppControlCallback): void
}

interface ClientInfo {
	/** 
 The value indicating if the service is local (true) or remote (false).
             */
	isHost: boolean;
	/** 
 The unique client id.
             */
	clientId: DOMString;
	/** 
 The connection time in milliseconds.
             */
	connectionTime: long;
}

interface DiscoverySuccessCallback {
	/** 
 Called when device is discovered during the discovery
procedure.
             */
	onfound(device: Device): void
	/** 
 Called when the device discovery procedure has finished.
             */
	onfinished(foundDevices: Device[]): void
}

interface RemoteAppControlCallback {
	/** 
 Called when the received reply from the requested application on the remote device has no errors.
             */
	onsuccess(data: ApplicationControlData[]): void
	/** 
 Called when the received reply from the requested application on the remote device contains any error.
             */
	onfailure(): void
}

interface ConnectSuccessCallback {
	/** 
 Called when the service connection is established.
             */
	onsuccess(service: Service): void
}

interface RemoteAppControlStartCallback {
	/** 
 Called when the service connection is established.
             */
	onsuccess(service: Service): void
}

interface AppCommunicationSuccessCallback {
	/** 
 Called when the service operation is successful.
             */
	onsuccess(channelInfo: ConvergenceChannelInfo): void
}

interface AppCommunicationStartCallback {
	/** 
 Called when the start service operation is successful.
             */
	onsuccess(channelInfo: ConvergenceChannelInfo,clientInfo: ClientInfo): void
}

interface AppCommunicationClientListCallback {
	/** 
 Called when the list of connected clients is requested.
             */
	onsuccess(clients: ClientInfo[]): void
}

interface AppCommunicationListenerCallback {
	/** 
 Called when the service channel notification is received.
             */
	onnotify(channelInfo: ConvergenceChannelInfo,payload: Payload[],senderClientId: DOMString): void
}

interface DataControlManagerObject {
	/**  */
	datacontrol: DataControlManager;
}

interface DataControlManager {
	/** 
 Gets  with a given DataType.
             */
	getDataControlConsumer(providerId: DOMString,dataId: DOMString,type: DataType): DataControlConsumerObject
}

interface DataControlConsumerObject {
	/** 
 An attribute to store the DataType.
             */
	type: DataType;
	/** 
 An attribute to hold a provider identifier of the application with whom it shares the DataControl.
This attribute should be known to users who want to interact with the application.
             */
	providerId: DOMString;
	/** 
 The dataId identifies specific data, usually a database table to process(insert, delete, update).
The string consists of one or more components, separated by a slash('/').
             */
	dataId: DOMString;
}

interface SQLDataControlConsumer {
	/** 
 Inserts new rows into a table owned by an SQL-type data control provider.
             */
	insert(reqId: number,insertionData: RowData,successCallback: DataControlInsertSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Updates values of a table owned by an SQL-type data control provider.
             */
	update(reqId: number,updateData: RowData,where: DOMString,successCallback: DataControlSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Delete rows from a table that is owned by an SQL-type data control provider.
             */
	remove(reqId: number,where: DOMString,successCallback: DataControlSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Selects the specified columns to be queried. The result set of the specified columns is retrieved from a table owned by an SQL-type data control provider. If  and  parameters are not specified and result set contains more than 20 rows, only first 20 rows are included in the result.
             */
	select(reqId: number,columns: DOMString[],where: DOMString,successCallback: DataControlSelectSuccessCallback,errorCallback: DataControlErrorCallback,page: number,maxNumberPerPage: number,order: DOMString): void
}

interface MappedDataControlConsumer {
	/** 
 Adds the value associated with the specified key to a key-values map owned by a MAP-type data control provider.
             */
	addValue(reqId: number,key: DOMString,value: DOMString,successCallback: DataControlSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Removes the value associated with the specified key from a key-values map owned by a MAP-type data control provider.
             */
	removeValue(reqId: number,key: DOMString,value: DOMString,successCallback: DataControlSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Gets the value associated with the specified key, from a key-values map owned by a MAP-type data control provider.
             */
	getValue(reqId: number,key: DOMString,successCallback: DataControlGetValueSuccessCallback,errorCallback: DataControlErrorCallback): void
	/** 
 Sets the value associated with the specified key to a new value.
             */
	updateValue(reqId: number,key: DOMString,oldValue: DOMString,newValue: DOMString,successCallback: DataControlSuccessCallback,errorCallback: DataControlErrorCallback): void
}

interface DataControlSuccessCallback {
	/** 
 Called on success.
             */
	onsuccess(reqId: number): void
}

interface DataControlErrorCallback {
	/** 
 Called on error.
             */
	onerror(reqId: number,error: WebAPIError): void
}

interface DataControlInsertSuccessCallback {
	/** 
 Called on success.
             */
	onsuccess(reqId: number,insertRowId: long): void
}

interface DataControlSelectSuccessCallback {
	/** 
 Called on success.
             */
	onsuccess(rows: RowData[],reqId: number): void
}

interface DataControlGetValueSuccessCallback {
	/** 
 Called on success.
             */
	onsuccess(values: DOMString[],reqid: number): void
}

interface DownloadManagerObject {
	/**  */
	download: DownloadManager;
}

interface DownloadRequest {
	/** 
 An attribute to store the URL of the object to download.
             */
	url: DOMString;
	/** 
 An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
             */
	destination: DOMString;
	/** 
 An attribute to store the file name for the specified URL.
             */
	fileName: DOMString;
	/** 
 An attribute to store the allowed network type.
             */
	networkType: DownloadNetworkType;
	/** 
 An attribute to store extra HTTP header fields.
             */
	httpHeader: DownloadHTTPHeaderFields;
}

interface DownloadManager {
	/** 
 Starts a download operation with the specified URL information.
             */
	start(downloadRequest: DownloadRequest,downloadCallback: DownloadCallback): void
	/** 
 Cancels an ongoing download operation that is specified by the  parameter.
             */
	cancel(downloadId: long): void
	/** 
 Pauses an ongoing download operation that is specified by the  parameter.
The paused download operation can be resumed later by the  method.
             */
	pause(downloadId: long): void
	/** 
 Resumes a paused download operation that is specified by the  parameter.
             */
	resume(downloadId: long): void
	/** 
 Gets the download state of an operation synchronously with the specified ID.
             */
	getState(downloadId: long): DownloadState
	/** 
 Gets the DownloadRequest object from a given ID.
             */
	getDownloadRequest(downloadId: long): DownloadRequest
	/** 
 Gets the MIME type of the downloaded file.
             */
	getMIMEType(downloadId: long): void
	/** 
 Sets the download callback to the download operation of the given ID.
It's possible to change or register the listener of the download operation using the saved ID.
             */
	setListener(downloadId: long,downloadCallback: DownloadCallback): void
}

interface DownloadCallback {
	/** 
 Called when a download is successful and it is called multiple times as the download progresses.
The interval between the  callback is platform-dependent. When the download is started, the can be .
             */
	onprogress(downloadId: long,receivedSize: number,totalSize: number): void
	/** 
 Called when the download operation is paused by the method.
             */
	onpaused(downloadId: long): void
	/** 
 Called when the download operation is canceled by the method.
             */
	oncanceled(downloadId: long): void
	/** 
 Called when the download operation is completed with the final full path or virtual path.
If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
             */
	oncompleted(downloadId: long,path: DOMString): void
	/** 
 Called when the download operation fails.
             */
	onfailed(downloadId: long,error: WebAPIError): void
}

interface ExifManagerObject {
	/**  */
	exif: ExifManager;
}

interface ExifManager {
	/** 
 Gets the  object to manipulate the Exif data in a JPEG file.
             */
	getExifInfo(uri: DOMString,successCallback: ExifInformationSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Saves the Exif data of the  object into the JPEG file.
             */
	saveExifInfo(exifInfo: ExifInformation,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file,  is returned.
             */
	getThumbnail(uri: DOMString,successCallback: ExifThumbnailSuccessCallback,errorCallback: ErrorCallback): void
}

interface ExifInformation {
	/** 
 URI of the image.
             */
	uri: DOMString;
	/** 
 Width of the image i.e. the number of points (pixels) per image line.
             */
	width: number;
	/** 
 Height of the image i.e. the number of lines in the image.
             */
	height: number;
	/** 
 Name of the camera manufacturer.
             */
	deviceMaker: DOMString;
	/** 
 Model name or model number of the camera or input device.
             */
	deviceModel: DOMString;
	/** 
 Date and time when the picture was taken.
             */
	originalTime: Date;
	/** 
 Orientation of the image when displayed.
             */
	orientation: ImageContentOrientation;
	/** 
 The f-number when the image was taken.
             */
	fNumber: double;
	/** 
 Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
             */
	isoSpeedRatings: number[];
	/** 
 Exposure time, given in seconds.
             */
	exposureTime: DOMString;
	/** 
 Exposure balance program used by the camera to set exposure when the picture was taken.
             */
	exposureProgram: ExposureProgram;
	/** 
 Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
             */
	flash: boolean;
	/** 
 Focal length of the lens, given in mm.
             */
	focalLength: double;
	/** 
 White balance mode set when the picture was taken.
             */
	whiteBalance: WhiteBalanceMode;
	/** 
 Latitude and longitude of the camera (from GPS) when the picture was taken.
             */
	gpsLocation: SimpleCoordinates;
	/** 
 Altitude (from GPS) of the camera when the picture was taken.
             */
	gpsAltitude: double;
	/** 
 Name of the method used for finding the location.
             */
	gpsProcessingMethod: DOMString;
	/** 
 Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
             */
	gpsTime: TZDate;
	/** 
 User comment.
             */
	userComment: DOMString;
}

interface ExifInformationSuccessCallback {
	/** 
 Called when the Exif information object has been successfully retrieved.
             */
	onsuccess(exifInfo: ExifInformation): void
}

interface ExifThumbnailSuccessCallback {
	/** 
 Called when the thumbnail of the JPEG file has been successfully retrieved.
             */
	onsuccess(uri: DOMString): void
}

interface FeedbackManagerObject {
	/**  */
	feedback: FeedbackManager;
}

interface FeedbackManager {
	/** 
 Plays various types of reactions that are pre-defined.
             */
	play(pattern: FeedbackPattern,type: FeedbackType): void
	/** 
 Stop various of vibration patterns.
             */
	stop(): void
	/** 
 Checks if a pattern is supported.
             */
	isPatternSupported(pattern: FeedbackPattern,type: FeedbackType): void
}

interface FileSystemManagerObject {
	/**  */
	filesystem: FileSystemManager;
}

interface FileSystemManager {
	/** 
 The maximum path length limit for the current platform.
             */
	maxPathLength: long;
	/** 
 Resolves a location to a file handle after validating it.             */
	resolve(location: DOMString,onsuccess: FileSuccessCallback,onerror: ErrorCallback,mode: FileMode): void
	/** 
 Gets information about a storage based on its label.For example: "MyThumbDrive", "InternalFlash".
             */
	getStorage(label: DOMString,onsuccess: FileSystemStorageSuccessCallback,onerror: ErrorCallback): void
	/** 
 Lists the available storages (both internal and external) on a device.
The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found.
It gets storages which are labeled as 'internal0', labeled after virtual roots ('images', 'documents', etc.) and labeled with prefix 'removable_' (for external storages).
The vfat filesystem used to sdcard filesystem widely is not case-sensitive.
If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
             */
	listStorages(onsuccess: FileSystemStorageArraySuccessCallback,onerror: ErrorCallback): void
	/** 
 Adds a listener to subscribe to notifications when a change in storage state occurs.
             */
	addStorageStateChangeListener(onsuccess: FileSystemStorageSuccessCallback,onerror: ErrorCallback): void
	/** 
 Removes a listener to unsubscribe from a storage watch operation.
             */
	removeStorageStateChangeListener(watchId: long): void
}

interface FileSystemStorage {
	/** 
 The storage name.
             */
	label: DOMString;
	/** 
 The storage type as internal or external.
             */
	type: FileSystemStorageType;
	/** 
 The storage state as mounted or not.
             */
	state: FileSystemStorageState;
}

interface File {
	/** 
 The parent directory handle.
             */
	parent: File;
	/** 
 The file/directory access state in the filesystem.
             */
	readOnly: boolean;
	/** 
 The flag indicating whether it is a file.
             */
	isFile: boolean;
	/** 
 The flag indicating whether it is a directory.
             */
	isDirectory: boolean;
	/** 
 The timestamp when a file is first created in the filesystem.
             */
	created: Date;
	/** 
 The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
             */
	modified: Date;
	/** 
 The path of a file after excluding its file name.
             */
	path: DOMString;
	/** 
 The file name after excluding the root name and any path components.
             */
	name: DOMString;
	/** 
 The full path of a file.
             */
	fullPath: DOMString;
	/** 
 The size of this file, in bytes.
             */
	fileSize: number;
	/** 
 The number of files and directories contained in a file handle.
             */
	length: long;
	/** 
 Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element).
The URI has no specific expiration, it should be valid at least as long as the file exists.
             */
	toURI(): void
	/** 
 Lists all files in a directory.
             */
	listFiles(onsuccess: FileArraySuccessCallback,onerror: ErrorCallback,filter: FileFilter): void
	/** 
 Opens the file in the given mode supporting a specified encoding.
             */
	openStream(mode: FileMode,onsuccess: FileStreamSuccessCallback,onerror: ErrorCallback,encoding: DOMString): void
	/** 
 Reads the content of a file as a DOMString.
             */
	readAsText(onsuccess: FileStringSuccessCallback,onerror: ErrorCallback,encoding: DOMString): void
	/** 
 Copies (and overwrites if possible and specified) a file or a
directory from a specified location to another specified location.
             */
	copyTo(originFilePath: DOMString,destinationFilePath: DOMString,overwrite: boolean,onsuccess: SuccessCallback,onerror: ErrorCallback): void
	/** 
 Moves (and overwrites if possible and specified) a file or a directory from a specified location to another.
This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
             */
	moveTo(originFilePath: DOMString,destinationFilePath: DOMString,overwrite: boolean,onsuccess: SuccessCallback,onerror: ErrorCallback): void
	/** 
 Creates a new directory.
             */
	createDirectory(dirPath: DOMString): File
	/** 
 Creates a empty new file in a specified location that is relative to the directory indicated by current  object's  attribute.
             */
	createFile(relativeFilePath: DOMString): File
	/** 
 Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
             */
	resolve(filePath: DOMString): File
	/** 
 Deletes a specified directory and directory tree if specified.
             */
	deleteDirectory(directoryPath: DOMString,recursive: boolean,onsuccess: SuccessCallback,onerror: ErrorCallback): void
	/** 
 Deletes a specified file.This function attempts to asynchronously delete a file under the current directory.
             */
	deleteFile(filePath: DOMString,onsuccess: SuccessCallback,onerror: ErrorCallback): void
}

interface FileStream {
	/** 
 The flag indicating whether the current file pointer is at the end of the file.
             */
	eof: boolean;
	/** 
 The flag indicating the stream position for reads/writes.
             */
	position: long;
	/** 
 The number of bytes that are available for reading from the stream.
             */
	bytesAvailable: long;
	/** 
 Closes this FileStream.
             */
	close(): void
	/** 
 Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string.
The resulting string length might be shorter than if EOF is .
             */
	read(charCount: long): void
	/** 
 Reads the specified number of bytes from a FileStream.
             */
	readBytes(byteCount: long): void
	/** 
 Reads the specified number of bytes from this FileStream, encoding the result in base64.
             */
	readBase64(byteCount: long): void
	/** 
 Writes the specified DOMString to a FileStream.
             */
	write(stringData: DOMString): void
	/** 
 Writes the specified bytes to this FileStream.
             */
	writeBytes(byteData: octet[]): void
	/** 
 Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
             */
	writeBase64(base64Data: DOMString): void
}

interface FileSuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(file: File): void
}

interface FileSystemStorageArraySuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(storages: FileSystemStorage[]): void
}

interface FileSystemStorageSuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(storage: FileSystemStorage): void
}

interface FileStringSuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(fileStr: DOMString): void
}

interface FileStreamSuccessCallback {
	/** 
 Called when the File.openStream asynchronous call completes successfully.
             */
	onsuccess(filestream: FileStream): void
}

interface FileArraySuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(files: File[]): void
}

interface HumanActivityMonitorManagerObject {
	/**  */
	humanactivitymonitor: HumanActivityMonitorManager;
}

interface HumanActivityMonitorManager {
	/** 
 Gets the current human activity data for certain human activity types.
             */
	getHumanActivityData(type: HumanActivityType,successCallback: HumanActivityMonitorSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Starts a sensor and registers a change listener to be called when new human activity data for a given human activity type is available.
             */
	start(type: HumanActivityType,changedCallback: HumanActivityMonitorSuccessCallback,errorCallback: ErrorCallback,option: HumanActivityMonitorOption): void
	/** 
 Stops the sensor and unregisters a previously registered listener for available human activity data.
             */
	stop(type: HumanActivityType): void
	/** 
 Starts the sensor and registers a listener to be called when new accumulative pedometer data is available.
             */
	setAccumulativePedometerListener(changeCallback: HumanActivityMonitorSuccessCallback): void
	/** 
 Stops the sensor and unregisters a previously registered listener for the accumulative pedometer data.
             */
	unsetAccumulativePedometerListener(): void
	/** 
 Registers a listener that is to be called when the activity is recognized.
             */
	addActivityRecognitionListener(type: ActivityRecognitionType,listener: HumanActivityMonitorSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Unsubscribes from receiving notifications when the activity is recognized.
             */
	removeActivityRecognitionListener(listenerId: long,errorCallback: ErrorCallback): void
	/** 
 Starts recording human activity data for a given human activity type.
             */
	startRecorder(type: HumanActivityRecorderType,option: HumanActivityRecorderOption): void
	/** 
 Stops recording human activity data for a given human activity type.
             */
	stopRecorder(type: HumanActivityRecorderType): void
	/** 
 Reads the recorded human activity data with some query.
             */
	readRecorderData(type: HumanActivityRecorderType,query: HumanActivityRecorderQuery,successCallback: HumanActivityReadRecorderSuccessCallback,errorCallback: ErrorCallback): void
}

interface StepDifference {
	/** 
 Count difference between the steps.
             */
	stepCountDifference: long;
	/** 
 Timestamp in seconds.
             */
	timestamp: long;
}

interface HumanActivityData {
}

interface HumanActivityPedometerData {
	/** 
 The current movement type.
             */
	stepStatus: PedometerStepStatus;
	/** 
 Current speed in km/h.
             */
	speed: double;
	/** 
 Step count per second.
             */
	walkingFrequency: double;
	/** 
 Cumulative distance traveled since the last start() method call in meters.
             */
	cumulativeDistance: double;
	/** 
 Cumulative calories burned since the last start() method call in kcal.
             */
	cumulativeCalorie: double;
	/** 
 Cumulative walking and running step count since the last start() method call.
             */
	cumulativeTotalStepCount: double;
	/** 
 Cumulative walking step count since the last start() method call.
             */
	cumulativeWalkStepCount: double;
	/** 
 Cumulative running step count since the last start() method call.
             */
	cumulativeRunStepCount: double;
	/** 
 Array of the StepDifference.
             */
	stepCountDifferences: StepDifference[];
}

interface HumanActivityAccumulativePedometerData {
	/** 
 Current movement type.
             */
	stepStatus: PedometerStepStatus;
	/** 
 Current speed in km/h.
             */
	speed: double;
	/** 
 Step count per second.
             */
	walkingFrequency: double;
	/** 
 Accumulative distance traveled since the device is booted in meters.
             */
	accumulativeDistance: double;
	/** 
 Accumulative calories burnt since the device is booted in kcal.
             */
	accumulativeCalorie: double;
	/** 
 Accumulative walking and running step count since the device is booted.
             */
	accumulativeTotalStepCount: double;
	/** 
 Accumulative walking step count since the device is booted.
             */
	accumulativeWalkStepCount: double;
	/** 
 Accumulative running step count since the device is booted.
             */
	accumulativeRunStepCount: double;
	/** 
 Array of the StepDifference.
             */
	stepCountDifferences: StepDifference[];
}

interface HumanActivityHRMData {
	/** 
 Heart rate in beats per minute.
When a user takes off the watch device, the heartRate is set to -3. When a user shakes the watch, the heartRate is set to -2.
             */
	heartRate: long;
	/** 
 Peak-to-peak interval in millisecond(s).
             */
	rRInterval: long;
}

interface HumanActivityGPSInfo {
	/** 
 An attribute to indicate the user's latitude in degrees.
             */
	latitude: double;
	/** 
 An attribute to indicate the user's longitude in degrees.
             */
	longitude: double;
	/** 
 An attribute to indicate the user's altitude in meters.
             */
	altitude: double;
	/** 
 An attribute to indicate the speed in km/h.
             */
	speed: double;
	/** 
 An attribute to indicate the error range of the user's position in meters.
             */
	errorRange: long;
	/** 
 An attribute to indicate timestamp in seconds.
             */
	timestamp: long;
}

interface HumanActivityGPSInfoArray {
	/** 
 An attribute to indicate the array of GPS information.
             */
	gpsInfo: HumanActivityGPSInfo[];
}

interface HumanActivitySleepMonitorData {
	/** 
 The sleep status.
             */
	status: SleepStatus;
	/** 
 The time when the sleep status is recognized. Epoch time in milliseconds.
             */
	timestamp: long;
}

interface HumanActivityRecognitionData {
	/** 
 The type of activity.
             */
	type: ActivityRecognitionType;
	/** 
 The time when the activity is recognized. Epoch time in seconds.
             */
	timestamp: long;
	/** 
 The degree of accuracy.
             */
	accuracy: ActivityAccuracy;
}

interface HumanActivityRecorderData {
	/** 
 Recording start time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
             */
	startTime: long;
	/** 
 Recording end time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
             */
	endTime: long;
}

interface HumanActivityRecorderPedometerData {
	/** 
 Distance traveled from  to  in meters.
             */
	distance: double;
	/** 
 Calories burned from  to  in kCal.
             */
	calorie: double;
	/** 
 Walking and running step count from  to . The value is the sum of  and .
             */
	totalStepCount: double;
	/** 
 Walking step count from  to .
             */
	walkStepCount: double;
	/** 
 Running step count from  to .
             */
	runStepCount: double;
}

interface HumanActivityRecorderHRMData {
	/** 
 Heart rate in beats per minute.
             */
	heartRate: long;
}

interface HumanActivityRecorderSleepMonitorData {
	/** 
 The sleep status.
             */
	status: SleepStatus;
}

interface HumanActivityRecorderPressureData {
	/** 
 Max pressure in hectopascal (hPa).
             */
	max: double;
	/** 
 Min pressure in hectopascal (hPa).
             */
	min: double;
	/** 
 Average pressure in hectopascal (hPa).
             */
	average: double;
}

interface HumanActivityMonitorSuccessCallback {
	/** 
 Called when there is new human activity data available.
             */
	onsuccess(humanactivitydata: HumanActivityData): void
}

interface HumanActivityReadRecorderSuccessCallback {
	/** 
 Called when recorded human activity data is successfully read.
             */
	onsuccess(humanactivitydata: HumanActivityRecorderData[]): void
}

interface InputDeviceManagerObject {
	/**  */
	inputdevice: InputDeviceManager;
}

interface InputDeviceKey {
	/** 
 The name of the key, for example  or .
             */
	name: InputDeviceKeyName;
	/** 
 The numeric code of the key, like  or .
             */
	code: long;
}

interface InputDeviceManager {
	/** 
 Retrieves the list of keys can be registered with the  method.
             */
	getSupportedKeys(): void
	/** 
 Returns information about the key which has the given name.
             */
	getKey(keyName: InputDeviceKeyName): InputDeviceKey
	/** 
 Registers an input device key to receive DOM keyboard event when it is pressed or released
             */
	registerKey(keyName: InputDeviceKeyName): void
	/** 
 Unregisters an input device key
             */
	unregisterKey(keyName: InputDeviceKeyName): void
	/** 
 Registers a batch of input device keys to receive DOM keyboard event when any of them is pressed or released
             */
	registerKeyBatch(keyNames: InputDeviceKeyName[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Unregisters a batch of input device keys
             */
	unregisterKeyBatch(keyNames: InputDeviceKeyName[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface IotconObject {
	/**  */
	iotcon: Iotcon;
}

interface Iotcon {
	/** 
 The device name of this application.
             */
	deviceName: DOMString;
	/** 
 Connects to the iotcon service. Call this function to start Iotcon.
             */
	initialize(filePath: DOMString): void
	/** 
 Returns object of  singleton, which provides methods for working with remote resources.
             */
	getClient(): Client
	/** 
 Returns the  object, which provides methods for managing resources on current device.
             */
	getServer(): Server
	/** 
  Returns the number of seconds set as the timeout threshold of asynchronous API.
             */
	getTimeout(): void
	/** 
 Sets the timeout value, in seconds, of asynchronous APIs.
             */
	setTimeout(timeout: long): void
	/** 
 Adds a listener to receive generated random pin from provisioning tool .
             */
	addGeneratedPinListener(successCallback: GeneratedPinCallback): void
	/** 
 Unregisters the listener and stops receiving generated random pin.
             */
	removeGeneratedPinListener(watchId: long): void
}

interface Client {
	/** 
 Finds resources using host address and resource type.
             */
	findResource(hostAddress: DOMString,query: Query,connectivityType: ConnectivityType,successCallback: FoundResourceSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Adds a listener to receive a presence events from the server.
A server sends presence events when starts or stops presence.
             */
	addPresenceEventListener(hostAddress: DOMString,resourceType: ResourceType,connectivityType: ConnectivityType,successCallback: PresenceEventCallback): void
	/** 
 Unregisters a presence event listener.
             */
	removePresenceEventListener(watchId: long): void
	/** 
 Gets the device information of remote server.
             */
	findDeviceInfo(hostAddress: DOMString,query: Query,connectivityType: ConnectivityType,successCallback: FoundDeviceInfoSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the platform information of remote server.
             */
	findPlatformInfo(hostAddress: DOMString,query: Query,connectivityType: ConnectivityType,successCallback: FoundPlatformInfoSuccessCallback,errorCallback: ErrorCallback): void
}

interface Server {
	/** 
 Returns an array of resources which are registered on the server.
             */
	getResources(): void
	/** 
 Creates a resource and registers the resource on server.
             */
	createResource(uriPath: DOMString,resourceTypes: ResourceType[],resourceInterfaces: ResourceInterface[],listener: RequestCallback,policy: ResourcePolicy): Resource
	/** 
 Removes the resource and unregisters it from server.
             */
	removeResource(resource: Resource): void
	/** 
 Starts sending presence event of server. Server can send presence event to client when become online for the first time or come back from offline to online.
             */
	startPresence(timeToLive: number): void
	/** 
 Stops sending presence announcement of a server.
             */
	stopPresence(): void
}

interface RemoteResource {
	/** 
 The resource URI.
             */
	uriPath: DOMString;
	/** 
 It is connectivity type.
             */
	connectivityType: ConnectivityType;
	/** 
 The host address
             */
	hostAddress: DOMString;
	/** 
 A list of types in this resource
             */
	resourceTypes: ResourceType[];
	/** 
 A list of interfaces in the resource.
             */
	resourceInterfaces: ResourceInterface[];
	/** 
 Indicates if the resource is observable or not
             */
	isObservable: boolean;
	/** 
 Indicates if the resource is discoverable or not
             */
	isDiscoverable: boolean;
	/** 
 Indicates if the resource is initialized and activated or not
             */
	isActive: boolean;
	/** 
 Indicates if the resource takes some delay to respond or not
             */
	isSlow: boolean;
	/** 
 Indicates if the resource is secure or not
             */
	isSecure: boolean;
	/** 
 Indicates if the resource is  is allowed to be discovered only if discovery request contains an explicit querystring or not
             */
	isExplicitDiscoverable: boolean;
	/** 
 The device unique id. this is unique per-server independent on how it was discovered.
             */
	deviceId: DOMString;
	/** 
 The device name of the remote resource.
             */
	deviceName: DOMString;
	/** 
 The option for managing vendor specific option of COAP packet.
             */
	options: IotconOption[];
	/** 
 The cached representation of remote resource.
             */
	cachedRepresentation: Representation;
	/** 
 The time interval in seconds for monitoring state (registered with setResourceStateChangeListener() ) and caching (registered with startCaching() ). Provided value must be in range from 1 to 3600 inclusive. The default value is 10 seconds.
             */
	timeInterval: long;
	/** 
 Gets the attributes of a resource.
             */
	methodGet(responseCallback: RemoteResourceResponseCallback,query: Query,errorCallback: ErrorCallback): void
	/** 
 Puts the representation of a resource for update.
             */
	methodPut(representation: Representation,responseCallback: RemoteResourceResponseCallback,query: Query,errorCallback: ErrorCallback): void
	/** 
 Posts the representation of a resource for create.
             */
	methodPost(representation: Representation,responseCallback: RemoteResourceResponseCallback,query: Query,errorCallback: ErrorCallback): void
	/** 
 Deletes the remote resource.
             */
	methodDelete(responseCallback: RemoteResourceResponseCallback,errorCallback: ErrorCallback): void
	/** 
 Sets the listener to receive notification about attribute change of remote resource. When server sends notification message, successCallback will be called.
             */
	startObserving(observePolicy: ObservePolicy,successCallback: RemoteResourceResponseCallback,query: Query): void
	/** 
 Unregisters the listener. so stop receiving notification about attribute change of remote resource.
             */
	stopObserving(): void
	/** 
 Starts caching of a remote resource. cached representation is updated when remote resource is changed.
             */
	startCaching(updatedCallback: CacheUpdatedCallback): void
	/** 
 Stops caching of a remote resource.
             */
	stopCaching(): void
	/** 
 Sets a listener to monitor the state of the remote resource.
             */
	setResourceStateChangeListener(successCallback: ResourceStateChangeCallback): void
	/** 
 Unsets the listener to stop monitoring the state of the remote resource.
             */
	unsetResourceStateChangeListener(): void
}

interface Resource {
	/** 
 The resource URI.
             */
	uriPath: DOMString;
	/** 
 A list of types in this resource.
             */
	resourceTypes: ResourceType[];
	/** 
 A list of interfaces in the resource.
             */
	resourceInterfaces: ResourceInterface[];
	/** 
 Indicates if the resource is observable or not
             */
	isObservable: boolean;
	/** 
 Indicates if the resource is discoverable or not
             */
	isDiscoverable: boolean;
	/** 
 Indicates if the resource is initialized and activated or not
             */
	isActive: boolean;
	/** 
 Indicates if the resource takes some delay to respond or not
             */
	isSlow: boolean;
	/** 
 Indicates if the resource is secure or not
             */
	isSecure: boolean;
	/** 
 Indicates if the resource is  is allowed to be discovered only if discovery request contains an explicit querystring or not
             */
	isExplicitDiscoverable: boolean;
	/** 
 A list of childs of this resource.
             */
	resources: Resource[];
	/** 
 A list of observation IDs of this resource.
             */
	observerIds: long[];
	/** 
 A lists of attributes of this resource.
             */
	attributes: object;
	/** 
 Notifies specific clients that resource's attributes have been changed.
             */
	notify(qosLevel: QosLevel,observerIds: long[]): void
	/** 
 Adds resource type to this resource.
             */
	addResourceTypes(types: ResourceType[]): void
	/** 
 Adds resource interface to this resource.
             */
	addResourceInterface(interface: ResourceInterface): void
	/** 
 Adds child resource into the parent resource.
             */
	addChildResource(resource: Resource): void
	/** 
 Removes child resource from the parent resource.
             */
	removeChildResource(resource: Resource): void
	/** 
 Sets the listener for request from client.
             */
	setRequestListener(listener: RequestCallback): void
	/** 
 Remove the listener.
             */
	unsetRequestListener(): void
}

interface Representation {
	/** 
 The resource URI.
             */
	uriPath: DOMString;
	/** 
 A list of types in this resource
             */
	resourceTypes: ResourceType[];
	/** 
 A list of interfaces in the resource.
             */
	resourceInterfaces: ResourceInterface[];
	/** 
 A lists of attribute in this resource.
             */
	attributes: object;
	/** 
 the representations belong to the representation as children.
             */
	children: Representation[];
}

interface PresenceResponse {
	/** 
 The host address of the presence.
             */
	hostAddress: DOMString;
	/** 
 The connectivity type of the presence.
             */
	connectivityType: ConnectivityType;
	/** 
 The resource type of the presence.
             */
	resourceType: ResourceType;
	/** 
 The results type of presence.
             */
	resultType: PresenceResponseResultType;
	/** 
 The trigger type of presence. It is set only if a response result type is "OK".
             */
	triggerType: PresenceTriggerType;
}

interface IotconOption {
	/** 
 The ID of the option. id is always situated between 2048 and 3000.
             */
	id: number;
	/** 
 The string data to add. Length of data is less than or equal to 15.
             */
	data: DOMString;
}

interface Request {
	/** 
 The address of host of the request.
             */
	hostAddress: DOMString;
	/** 
 Connectivities type of connection.
             */
	connectivityType: ConnectivityType;
	/** 
 The request representation.
             */
	representation: Representation;
	/** 
 The option which was sent from client.
             */
	options: IotconOption[];
	/** 
 The query parameters from the request.
             */
	query: Query;
}

interface Response {
	/** 
 the request, that server responded.
             */
	request: Request;
	/** 
 the result indicates the detailed information about the result of the response to request.
             */
	result: ResponseResult;
	/** 
 the representation indicates the information of the resource.
             */
	representation: Representation;
	/** 
 the options indicates the vendor specific options of COAP packet.
             */
	options: IotconOption[];
	/** 
 Sends the response.
             */
	send(): void
}

interface RemoteResponse {
	/** 
 the result indicates the detailed information about the result of the response to request.
             */
	result: ResponseResult;
	/** 
 the representation indicates the information of the resource.
             */
	representation: Representation;
	/** 
 the options indicates the vendor specific options of COAP packet.
             */
	options: IotconOption[];
}

interface DeviceInfo {
	/** 
 The device name
             */
	deviceName: DOMString;
	/** 
 The version of core specification.
             */
	specVersion: DOMString;
	/** 
 The unique identifier for OIC device.
             */
	oicDeviceId: DOMString;
	/** 
 The version of specification which the device's data model is implemented
             */
	dataModelVersion: DOMString;
}

interface PlatformInfo {
	/** 
 The platform identifier
             */
	platformId: DOMString;
	/** 
 The name of manufacturer.
             */
	manufacturerName: DOMString;
	/** 
 The URL of manufacturer.
             */
	manufacturerUrl: DOMString;
	/** 
 The model number is designated by manufacturer.
             */
	modelNumber: DOMString;
	/** 
 The manufacture date of device.
             */
	manufactureDate: DOMString;
	/** 
 The platform version is defined by manufacturer.
             */
	platformVersion: DOMString;
	/** 
 The operating system version.
             */
	operatingSystemVersion: DOMString;
	/** 
 The hardware version.
             */
	hardwareVersion: DOMString;
	/** 
 The firmware version.
             */
	firmwareVersion: DOMString;
	/** 
 The URL that points to support information from manufacturer.
             */
	supportUrl: DOMString;
	/** 
 The System time.
             */
	systemTime: DOMString;
}

interface RequestCallback {
	/** 
 Called when GET request was received.
             */
	onget(request: Request): void
	/** 
 Called when PUT request was received.
             */
	onput(request: Request): void
	/** 
 Called when POST request was received.
             */
	onpost(request: Request): void
	/** 
 Called when DELETE request was received.
             */
	ondelete(request: Request): void
	/** 
 Called when OBSERVE request was received.
             */
	onobserving(request: Request,observeType: ObserveType,observeId: number): void
}

interface FoundResourceSuccessCallback {
	/** 
 Called when request was received.
             */
	onfound(remoteResource: RemoteResource): void
}

interface PresenceEventCallback {
	/** 
 Called when client receive presence events.
             */
	onreceived(presenceResponse: PresenceResponse): void
}

interface FoundDeviceInfoSuccessCallback {
	/** 
 Called when the device information is received.
             */
	onsuccess(info: DeviceInfo): void
}

interface FoundPlatformInfoSuccessCallback {
	/** 
 Called when the platform information is received.
             */
	onsuccess(info: PlatformInfo): void
}

interface RemoteResourceResponseCallback {
	/** 
 Called when the response is received.
             */
	onsuccess(response: RemoteResponse): void
}

interface ResourceStateChangeCallback {
	/** 
 Called when connection change appeared.
             */
	onchanged(isAlive: boolean): void
}

interface CacheUpdatedCallback {
	/** 
 Called when caching is successfully started.
             */
	onupdated(representation: Representation): void
}

interface GeneratedPinCallback {
	/** 
 Called when random pin is successfully generated.
             */
	onsuccess(pin: DOMString): void
}

interface KeyManagerObject {
	/**  */
	keymanager: KeyManager;
}

interface KeyManager {
	/** 
 Saves and stores data as a  inside the KeyManager.
             */
	saveData(name: DOMString,rawData: RawData,password: DOMString,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Removes data from the KeyManager.
             */
	removeData(dataAlias: KeyManagerAlias): void
	/** 
 Gets raw data from the KeyManager.
             */
	getData(dataAlias: KeyManagerAlias,password: DOMString): RawData
	/** 
 Gets all the aliases which an application can access.
             */
	getDataAliasList(): void
	/** 
 Sets permissions that another application has for accessing an application's data.
             */
	setPermission(dataAlias: KeyManagerAlias,packageId: PackageId,permissionType: PermissionType,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface MediaControllerObject {
	/**  */
	mediacontroller: MediaControllerManager;
}

interface MediaControllerManager {
	/** 
 Gets the client object. If not exist, client will be automatically created.
             */
	getClient(): MediaControllerClient
	/** 
 Creates the Server object which holds playback state, meta data
and is controlled by Client.
             */
	createServer(): MediaControllerServer
}

interface MediaControllerServer {
	/** 
 Current playback info.
             */
	playbackInfo: MediaControllerPlaybackInfo;
	/** 
 Update playback state and send notification to the listening clients.
See  to check
how to receive playback info changes from server on client side.
             */
	updatePlaybackState(state: MediaControllerPlaybackState): void
	/** 
 Update playback position and send notification to the listening clients.
             */
	updatePlaybackPosition(position: number): void
	/** 
 Update shuffle mode and send notification to the listening clients.
             */
	updateShuffleMode(mode: boolean): void
	/** 
 Update repeat mode and send notification to the listening clients.
             */
	updateRepeatMode(mode: boolean): void
	/** 
 Update repeat mode and send notification to the listening clients.
             */
	updateMetadata(metadata: MediaControllerMetadata): void
	/** 
 Adds the listener for a media playback info requests from client.
See  to check how to send playback info change
requests from client.
             */
	addChangeRequestPlaybackInfoListener(listener: MediaControllerChangeRequestPlaybackInfoCallback): void
	/** 
 Removes the listener, so stop receiving playback state requests from clients.
             */
	removeChangeRequestPlaybackInfoListener(watchId: long): void
	/** 
 Adds the listener for receiving custom commands from client.
See  to check how to send custom commands from client.
             */
	addCommandListener(listener: MediaControllerReceiveCommandCallback): void
	/** 
 Removes the listener, so stop receiving custom commands from clients.
             */
	removeCommandListener(watchId: long): void
}

interface MediaControllerClient {
	/** 
 Retrieves all activated media controller servers.
             */
	findServers(successCallback: MediaControllerServerInfoArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the latest media controller server info.
             */
	getLatestServerInfo(): MediaControllerServerInfo
}

interface MediaControllerServerInfo {
	/** 
 The appId of the media controller server.
             */
	name: ApplicationId;
	/** 
 State of the media controller server.
             */
	state: MediaControllerServerState;
	/** 
 Current playback info.
             */
	playbackInfo: MediaControllerPlaybackInfo;
	/** 
 Allows to change playback state of media controller server.
             */
	sendPlaybackState(state: MediaControllerPlaybackState,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Allows to change playback position of media controller server.
             */
	sendPlaybackPosition(position: number,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Allows to change shuffle mode of media controller server.
             */
	sendShuffleMode(mode: boolean,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Allows to change repeat mode of media controller server.
             */
	sendRepeatMode(mode: boolean,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Allows to send custom command to media controller server.
             */
	sendCommand(command: DOMString,data: object,successCallback: MediaControllerSendCommandSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Adds the listener for a media controller server status change.
             */
	addServerStatusChangeListener(listener: MediaControllerServerStatusChangeCallback): void
	/** 
 Removes the listener, so stop receiving notifications about media controller server status.
             */
	removeServerStatusChangeListener(watchId: long): void
	/** 
 Adds the listener for a media playback info changes.
             */
	addPlaybackInfoChangeListener(listener: MediaControllerPlaybackInfoChangeCallback): void
	/** 
 Removes the listener, so stop receiving notifications about media playback info changes.
             */
	removePlaybackInfoChangeListener(watchId: long): void
}

interface MediaControllerPlaybackInfo {
	/** 
 Current playback state.
             */
	state: MediaControllerPlaybackState;
	/** 
 Current playback position.
             */
	position: number;
	/** 
 Current shuffle mode.
             */
	shuffleMode: boolean;
	/** 
 Current repeat mode.
             */
	repeatMode: boolean;
	/** 
 Current playback metadata.
             */
	metadata: MediaControllerMetadata;
}

interface MediaControllerMetadata {
	/** 
 Media title.
             */
	title: DOMString;
	/** 
 Media artist.
             */
	artist: DOMString;
	/** 
 Media album.
             */
	album: DOMString;
	/** 
 Media author.
             */
	author: DOMString;
	/** 
 Media genre.
             */
	genre: DOMString;
	/** 
 Media duration.
             */
	duration: DOMString;
	/** 
 Media date.
             */
	date: DOMString;
	/** 
 Media copyright.
             */
	copyright: DOMString;
	/** 
 Media description.
             */
	description: DOMString;
	/** 
 Media track number.
             */
	trackNum: DOMString;
	/** 
 Media picture.
             */
	picture: DOMString;
}

interface MediaControllerServerInfoArraySuccessCallback {
	/** 
 Called when all registered media controller servers found.
             */
	onsuccess(servers: MediaControllerServerInfo[]): void
}

interface MediaControllerSendCommandSuccessCallback {
	/** 
 Called when server responded to received custom command.
             */
	onsuccess(data: object): void
}

interface MediaControllerReceiveCommandCallback {
	/** 
 Called when custom command received from client.
             */
	onsuccess(clientName: ApplicationId,command: DOMString,data: object): void
}

interface MediaControllerServerStatusChangeCallback {
	/** 
 Called when server status changed.
             */
	onsuccess(status: MediaControllerServerState): void
}

interface MediaControllerPlaybackInfoChangeCallback {
	/** 
 Called when playback state or position changed.
             */
	onplaybackchanged(state: MediaControllerPlaybackState,position: number): void
	/** 
 Called when shuffle mode changed.
             */
	onshufflemodechanged(mode: boolean): void
	/** 
 Called when repeat mode changed.
             */
	onrepeatmodechanged(mode: boolean): void
	/** 
 Called when playback metadata changed.
             */
	onmetadatachanged(metadata: MediaControllerMetadata): void
}

interface MediaControllerChangeRequestPlaybackInfoCallback {
	/** 
 Called when client requested playback state change.
             */
	onplaybackstaterequest(state: MediaControllerPlaybackState): void
	/** 
 Called when client requested playback position change.
             */
	onplaybackpositionrequest(position: number): void
	/** 
 Called when client requested shuffle mode change.
             */
	onshufflemoderequest(mode: boolean): void
	/** 
 Called when client requested repeat mode change.
             */
	onrepeatmoderequest(mode: boolean): void
}

interface MediaKeyManagerObject {
	/**  */
	mediakey: MediaKeyManager;
}

interface MediaKeyManager {
	/** 
 Registers a listener to be called when a media key is pressed or released.
             */
	setMediaKeyEventListener(callback: MediaKeyEventCallback): void
	/** 
 Unsubscribes from receiving notification for detecting the media key event.
             */
	unsetMediaKeyEventListener(): void
}

interface MediaKeyEventCallback {
	/** 
 Called when a media key has been pressed.
             */
	onpressed(type: MediaKeyType): void
	/** 
 Called when a media key has been released.
             */
	onreleased(type: MediaKeyType): void
}

interface MessagePortManagerObject {
	/**  */
	messageport: MessagePortManager;
}

interface MessagePortManager {
	/** 
 Requests a LocalMessage Port instance to start receiving message from another application.
             */
	requestLocalMessagePort(localMessagePortName: DOMString): LocalMessagePort
	/** 
 Requests a trusted LocalMessagePort instance to receive message from another application.
             */
	requestTrustedLocalMessagePort(localMessagePortName: DOMString): LocalMessagePort
	/** 
 Requests a RemoteMessagePort instance to send message to another application.
             */
	requestRemoteMessagePort(appId: ApplicationId,remoteMessagePortName: DOMString): RemoteMessagePort
	/** 
 Requests a trusted RemoteMessagePort instance to receive message from another application.
             */
	requestTrustedRemoteMessagePort(appId: ApplicationId,remoteMessagePortName: DOMString): RemoteMessagePort
}

interface LocalMessagePort {
	/** 
 The name of the message port name.
             */
	messagePortName: DOMString;
	/** 
 The flag indicating whether the message port is trusted.
             */
	isTrusted: boolean;
	/** 
 Adds a message port listener to receive messages from other applications.
             */
	addMessagePortListener(listener: MessagePortCallback): void
	/** 
 Removes the message port listener.
             */
	removeMessagePortListener(watchId: long): void
}

interface RemoteMessagePort {
	/** 
 The message port name.
             */
	messagePortName: DOMString;
	/** 
 The application ID to connect with.
             */
	appId: ApplicationId;
	/** 
 The flag indicating whether the message port is trusted.
             */
	isTrusted: boolean;
	/** 
 Sends messages to the specified application.
             */
	sendMessage(data: MessagePortDataItem[],localMessagePort: LocalMessagePort): void
}

interface MessagePortCallback {
	/** 
 Called when data is received from other applications via the specified message port name.
             */
	onreceived(data: MessagePortDataItem[],remoteMessagePort: RemoteMessagePort): void
}

interface NFCManagerObject {
	/**  */
	nfc: NFCManager;
}

interface NFCManager {
	/** 
 Gets the default NFC adapter of the device.
             */
	getDefaultAdapter(): NFCAdapter
	/** 
 Gives priority to the current application for NFC operations.
             */
	setExclusiveMode(mode: boolean): void
}

interface NFCAdapter {
	/** 
 The state of the NFC adapter.
             */
	powered: boolean;
	/** 
 Card emulation mode of the NFC adapter.
             */
	cardEmulationMode: CardEmulationMode;
	/** 
 Active secure element type.
             */
	activeSecureElement: SecureElementType;
	/** 
 Sets the power of an NFC adapter to either an on state or an off state.
             */
	setPowered(state: boolean,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers a callback function to invoke when an NFC tag is detected.
             */
	setTagListener(detectCallback: NFCTagDetectCallback,tagFilter: NFCTagType[]): void
	/** 
 Registers a callback function to be invoked when an NFC peer-to-peer target is detected.
             */
	setPeerListener(detectCallback: NFCPeerDetectCallback): void
	/** 
 Unregisters the listener for detecting an NFC tag.
             */
	unsetTagListener(): void
	/** 
 Unregisters the listener for detecting an NFC peer-to-peer target.
             */
	unsetPeerListener(): void
	/** 
 Registers a callback function to invoke when the card emulation mode is changed.
             */
	addCardEmulationModeChangeListener(changeCallback: CardEmulationModeChangeCallback): void
	/** 
 Unsubscribes from receiving notification of card emulation mode changes.
             */
	removeCardEmulationModeChangeListener(watchId: long): void
	/** 
 Registers a callback function to invoke when an external reader tries to access a secure element.
Such an event may indicate initiating a financial transaction using the device.
             */
	addTransactionEventListener(type: SecureElementType,eventCallback: TransactionEventCallback): void
	/** 
 Unsubscribes from receiving notification of transaction events.
             */
	removeTransactionEventListener(watchId: long): void
	/** 
 Registers a callback function to invoke when an active secure element is changed.
             */
	addActiveSecureElementChangeListener(changeCallback: ActiveSecureElementChangeCallback): void
	/** 
 Unsubscribes from receiving notification of active secure element changes.
             */
	removeActiveSecureElementChangeListener(watchId: long): void
	/** 
 Gets the NDEF message cached when the tag is detected.
             */
	getCachedMessage(): NDEFMessage
	/** 
 Gives priority to the current application for NFC transaction events.
             */
	setExclusiveModeForTransaction(mode: boolean): void
	/** 
 Registers a callback function for receiving HCE event.
             */
	addHCEEventListener(eventCallback: HCEEventReceiveCallback): void
	/** 
 Unsubscribes from receiving notification of a HCE event.
             */
	removeHCEEventListener(watchId: long): void
	/** 
 send host APDU response to CLF (Contactless Front-end).
             */
	sendHostAPDUResponse(apdu: byte[],successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
  Allows an application to query whether an application is currently the activated handler for a specific AID and secure element type.
             */
	isActivatedHandlerForAID(type: SecureElementType,aid: AID): void
	/** 
 Allows an application to query whether an application is currently the activated handler for a specific card emulation category and secure element type.
             */
	isActivatedHandlerForCategory(type: SecureElementType,category: CardEmulationCategoryType): void
	/** 
  Registers an AID for a specific category and secure element type.
             */
	registerAID(type: SecureElementType,aid: AID,category: CardEmulationCategoryType): void
	/** 
 Unregisters an AID that was previously registered for a specific card emulation category and secure element type. An application can only remove the AIDs which it registered.
             */
	unregisterAID(type: SecureElementType,aid: AID,category: CardEmulationCategoryType): void
	/** 
 Retrieves AIDs that were previously registered for a specific card emulation category and secure element type. An application can only retrieve the AIDs which it registered.
             */
	getAIDsForCategory(type: SecureElementType,category: CardEmulationCategoryType,successCallback: AIDArraySuccessCallback,errorCallback: ErrorCallback): void
}

interface NFCTag {
	/** 
 The type of the NFC tag.
             */
	type: NFCTagType;
	/** 
 An attribute to check if the NFC Tag supports the NDEF format.
             */
	isSupportedNDEF: boolean;
	/** 
 The size of an NDEF message stored in the tag.
             */
	ndefSize: long;
	/** 
 The value is all tag information.
             */
	properties: object;
	/** 
 The value is necessary to check if this tag is connected.
             */
	isConnected: boolean;
	/** 
 Reads the NDEF data from the NFC tag.
             */
	readNDEF(readCallback: NDEFMessageReadCallback,errorCallback: ErrorCallback): void
	/** 
 Writes the NDEF data to the NFC tag.
             */
	writeNDEF(ndefMessage: NDEFMessage,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Accesses the raw format card. The transceive function is the only way to access the raw format card (not formatted).
Each tag type requires its own command to access tags.
This API provides low level access of the tag operation. (Note that you must know each tag technology.)
             */
	transceive(data: byte[],dataCallback: ByteArraySuccessCallback,errorCallback: ErrorCallback): void
}

interface NFCPeer {
	/** 
 The value is necessary to check if this NFC peer-to-peer target is connected.
             */
	isConnected: boolean;
	/** 
 Registers a callback function to be invoked when an NDEF message is received from the connected NFC peer-to-peer target.
             */
	setReceiveNDEFListener(successCallback: NDEFMessageReadCallback): void
	/** 
 Unregisters the listener for receiving NDEF messages from the NFC peer-to-peer target connected.
             */
	unsetReceiveNDEFListener(): void
	/** 
 Sends data to the NFC peer-to-peer target.
             */
	sendNDEF(ndefMessage: NDEFMessage,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
}

interface NDEFMessage {
	/** 
 The number of records in the NDEFMessage.
             */
	recordCount: long;
	/** 
 The array of NDEFRecord objects in the NDEFMessage.
             */
	records: NDEFRecord[];
	/** 
 Gets the serial byte array of the NDEF message.
             */
	toByte(): void
}

interface NDEFRecord {
	/** 
 The value of the record type (TNF value).
             */
	tnf: short;
	/** 
 The specified type in byte array.
             */
	type: byte[];
	/** 
 The record ID.
             */
	id: byte[];
	/** 
 The record payload.
             */
	payload: byte[];
}

interface NDEFRecordText {
	/** 
 The encoded text.
             */
	text: DOMString;
	/** 
 The language code string value, followed by IANA[RFC 3066] (for example, en-US, ko-KR).
             */
	languageCode: DOMString;
	/** 
 The encoding type. By default, this attribute is set to UTF8.
             */
	encoding: NDEFRecordTextEncoding;
}

interface NDEFRecordURI {
	/** 
 The URI string that is stored in the payload.
             */
	uri: DOMString;
}

interface NDEFRecordMedia {
	/** 
 The mime type [RFC 2046] (for example, text/plain, image/jpeg ).
             */
	mimeType: DOMString;
}

interface HCEEventData {
	/** 
 HCE event type.
             */
	eventType: HCEEventType;
	/** 
 The bytes array of APDU
             */
	apdu: byte[];
	/** 
 The length of APDU
             */
	length: long;
}

interface AIDData {
	/** 
 Secure Element type.
             */
	type: SecureElementType;
	/** 
 The AID (Application ID) data, specified in ISO/IEC 7816-4
             */
	aid: AID;
	/** 
 An attribute to indicate whether the registered AID is read-only or not
             */
	readOnly: boolean;
}

interface NFCTagDetectCallback {
	/** 
 The method invoked when a tag is attached.
             */
	onattach(nfcTag: NFCTag): void
	/** 
 The method invoked when the connected tag is detached.
             */
	ondetach(): void
}

interface NFCPeerDetectCallback {
	/** 
 The method invoked when the NFC peer-to-peer target is attached.
             */
	onattach(nfcPeer: NFCPeer): void
	/** 
 The method invoked when the connected NFC peer-to-peer target is detached.
             */
	ondetach(): void
}

interface NDEFMessageReadCallback {
	/** 
 The method invoked when the asynchronous call completes successfully.
             */
	onsuccess(ndefMessage: NDEFMessage): void
}

interface ByteArraySuccessCallback {
	/** 
 The method invoked when the asynchronous call completes successfully.
             */
	onsuccess(data: byte[]): void
}

interface CardEmulationModeChangeCallback {
	/** 
 Called when the card emulation mode is changed.
             */
	onchanged(mode: CardEmulationMode): void
}

interface TransactionEventCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	ondetected(appletId: octet[],data: octet[]): void
}

interface ActiveSecureElementChangeCallback {
	/** 
 Called when the type of an active secure element is changed.
             */
	onchanged(type: SecureElementType): void
}

interface HCEEventReceiveCallback {
	/** 
 Called when HCE event is detected.
             */
	ondetected(data: HCEEventData): void
}

interface AIDArraySuccessCallback {
	/** 
 The method invoked when the asynchronous call completes successfully.
             */
	onsuccess(aids: AIDData[]): void
}

interface NotificationObject {
	/**  */
	notification: NotificationManager;
}

interface NotificationManager {
	/** 
 Posts a notification to display.
             */
	post(notification: Notification): void
	/** 
 Updates a previously posted notification.
             */
	update(notification: Notification): void
	/** 
 Removes a previously posted notification.
             */
	remove(id: NotificationId): void
	/** 
 Removes all notifications that have been posted by the current application.
             */
	removeAll(): void
	/** 
 Gets a notification that has previously been posted by the current application. Note that the obtained notification's progressType is              */
	get(id: NotificationId): Notification
	/** 
 Gets all notifications that have previously been posted by the current application. Note that the obtained notification's progressType is              */
	getAll(): void
	/** 
 Plays the custom effect of the service LED that is located to the front of a device.
             */
	playLEDCustomEffect(timeOn: long,timeOff: long,color: DOMString,flags: LEDCustomFlags[]): void
	/** 
 Stops the custom effect of the service LED that is located to the front of a device.
             */
	stopLEDCustomEffect(): void
}

interface Notification {
	/** 
 The Notification identifier. Before the notification is posted, this value is undefined.
             */
	id: NotificationId;
	/** 
 The Notification type.
             */
	type: NotificationType;
	/** 
 The time when the notification is posted. Before the notification is posted, this value is undefined.
             */
	postedTime: Date;
	/** 
 The title to display in a notification.
             */
	title: DOMString;
	/** 
 The content to display in a notification.
             */
	content: DOMString;
}

interface StatusNotification {
	/** 
 The status notification type.
             */
	statusType: StatusNotificationType;
	/** 
 The icon path to display in the notification.
             */
	iconPath: DOMString;
	/** 
 The sub icon path to display in the notification.
             */
	subIconPath: DOMString;
	/** 
 The number of events to display in the notification.
             */
	number: long;
	/** 
 Appends lines of the detail information to the notification.
This attribute is available in a simple status notification.
By default, this attribute is initialized with an empty array.
The maximum number of detail information elements in the array is 2.
             */
	detailInfo: NotificationDetailInfo[];
	/** 
 Sets the notification LED indicator color property.
The color is a numerical RGB value(#rrggbb). The format of an RGB value in hexadecimal notation is a "#" immediately followed by exactly six hexadecimal characters(0-9, A-F). The color format is case-insensitive.
The LED indicator color will show that it's a close approximation.
LED will only light on when the screen is off. To turn the LED off, set "#000000" or null to ledColor.
This method has effects when the device has notification LED.
             */
	ledColor: DOMString;
	/** 
 The milliseconds for which the light is on.
The light continuously toggles on (ledOnPeriod) and off (ledOffPeriod).
By default, this attribute is set to 0
             */
	ledOnPeriod: number;
	/** 
 The milliseconds for which the light is off.
By default, this attribute is set to 0.
             */
	ledOffPeriod: number;
	/** 
 The image path to use as the background of the notification.
This attribute is available on simple or thumbnail status notifications.
             */
	backgroundImagePath: DOMString;
	/** 
 The image paths associated with the thumbnail status notification.
By default, this attribute is initialized with an empty array.
The maximum number of thumbnail path elements in the array is 4.
             */
	thumbnails: DOMString[];
	/** 
 The path of a sound file to play when the notification is shown.
             */
	soundPath: DOMString;
	/** 
 Checks whether to vibrate when the notification is shown. By default, this attribute is set to false.
             */
	vibration: boolean;
	/** 
 Holds the application control to launch an application when the notification is selected from the notification tray.
             */
	appControl: ApplicationControl;
	/** 
 Holds the application ID to launch when the notification is selected from the notification tray.
             */
	appId: ApplicationId;
	/** 
 Defines the type for an ongoing notification's progress.
By default, this attribute is set to PERCENTAGE.
             */
	progressType: NotificationProgressType;
	/** 
 Defines the current notification progress value ( or ), depending on the              */
	progressValue: number;
}

interface NotificationDetailInfo {
	/** 
 The main content of the detail information.
This attribute is available on simple status notifications.
             */
	mainText: DOMString;
	/** 
 The secondary content of the detail information.
             */
	subText: DOMString;
}

interface PackageManagerObject {
	/**  */
	package: PackageManager;
}

interface PackageManager {
	/** 
 Installs a package with a specified file on a device.
             */
	install(packageFileURI: DOMString,progressCallback: PackageProgressCallback,errorCallback: ErrorCallback): void
	/** 
 Uninstalls the package with a specified package ID.
             */
	uninstall(id: PackageId,progressCallback: PackageProgressCallback,errorCallback: ErrorCallback): void
	/** 
 Gets information of the installed packages.
             */
	getPackagesInfo(successCallback: PackageInformationArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets information of an installed package.
             */
	getPackageInfo(id: PackageId): PackageInformation
	/** 
 Sets a listener to receive notifications for any changes made to the list of installed packages.
             */
	setPackageInfoEventListener(eventCallback: PackageInformationEventCallback): void
	/** 
 Unsets the listener to stop receiving package notifications.
             */
	unsetPackageInfoEventListener(): void
}

interface PackageInformation {
	/** 
 An attribute to store the identifier of a package.
             */
	id: PackageId;
	/** 
 An attribute to store the package name.
             */
	name: DOMString;
	/** 
 An attribute to store the icon path of a package.
             */
	iconPath: DOMString;
	/** 
 An attribute to store the package version.
             */
	version: DOMString;
	/** 
 An attribute to store the total installed size(package + data) of a package.
             */
	totalSize: long;
	/** 
 An attribute to store the current data size of a package.
             */
	dataSize: long;
	/** 
 An attribute to store the latest installed or updated time of a package.
             */
	lastModified: Date;
	/** 
 An attribute to store the author of a package.
             */
	author: DOMString;
	/** 
 An attribute to store the package description.
             */
	description: DOMString;
	/** 
 An attribute to store the application ID list of a package.
             */
	appIds: ApplicationId[];
}

interface PackageInformationArraySuccessCallback {
	/** 
 Called when the asynchronous call completes successfully.
             */
	onsuccess(informationArray: PackageInformation[]): void
}

interface PackageProgressCallback {
	/** 
 Called while the request is in progress.
             */
	onprogress(id: PackageId,progress: short): void
	/** 
 Called when the request is completed.
             */
	oncomplete(id: PackageId): void
}

interface PackageInformationEventCallback {
	/** 
 Called when a package is installed.
             */
	oninstalled(info: PackageInformation): void
	/** 
 Called when a package is updated.
             */
	onupdated(info: PackageInformation): void
	/** 
 Called when a package is uninstalled.
             */
	onuninstalled(id: PackageId): void
}

interface PlayerUtilManagerObject {
	/**  */
	playerutil: PlayerUtilManager;
}

interface PlayerUtilManager {
	/** 
 Gets the latency mode of the W3C Player.
             */
	getLatencyMode(): LatencyMode
	/** 
 Sets the latency mode of the W3C Player.
             */
	setLatencyMode(mode: LatencyMode): void
}

interface PowerManagerObject {
	/**  */
	power: PowerManager;
}

interface PowerManager {
	/** 
 Requests the minimum-state for a power resource.
             */
	request(resource: PowerResource,state: PowerState): void
	/** 
 Releases the power state request for the given resource.
             */
	release(resource: PowerResource): void
	/** 
 Sets the screen state change callback and monitors its state changes.
             */
	setScreenStateChangeListener(listener: ScreenStateChangeCallback): void
	/** 
 Unsets the screen state change callback and stop monitoring it.
             */
	unsetScreenStateChangeListener(): void
	/** 
 Gets the screen brightness level of an application, from 0 to 1.
             */
	getScreenBrightness(): void
	/** 
 Sets the screen brightness level, from 0 to 1.
             */
	setScreenBrightness(brightness: double): void
	/** 
 Checks whether the screen is on.
             */
	isScreenOn(): void
	/** 
 Restores the screen brightness to the system default setting value.
             */
	restoreScreenBrightness(): void
	/** 
 Turns on the screen.
             */
	turnScreenOn(): void
	/** 
 Turns off the screen.
             */
	turnScreenOff(): void
}

interface ScreenStateChangeCallback {
	/** 
 Called on screen state change.
             */
	onchanged(previousState: PowerScreenState,changedState: PowerScreenState): void
}

interface PreferenceManagerObject {
	/**  */
	preference: PreferenceManager;
}

interface PreferenceData {
	/** 
 The key name of the preferences data value.
             */
	key: DOMString;
	/** 
 The value associated with a given key.
             */
	value: PreferenceValueType;
}

interface PreferenceManager {
	/** 
 Gets all preferences data.
             */
	getAll(successCallback: PreferenceGetAllCallback,errorCallback: ErrorCallback): void
	/** 
 Sets the preference value.
             */
	setValue(key: DOMString,value: PreferenceValueType): void
	/** 
 Gets a preference value.
             */
	getValue(key: DOMString): PreferenceValueType
	/** 
 Removes a value with the given key from the preferences.
             */
	remove(key: DOMString): void
	/** 
 Removes all key-value pairs from the preferences.
             */
	removeAll(): void
	/** 
 Checks whether the preference with given key exists.
             */
	exists(key: DOMString): void
	/** 
 Sets the listener to receive notifications about changes of the preference value with the given key.
             */
	setChangeListener(key: DOMString,listener: PreferenceChangeCallback): void
	/** 
 Unsets the listener, so stop receiving notifications about changes of the preference with the given key.
             */
	unsetChangeListener(key: DOMString): void
}

interface PreferenceChangeCallback {
	/** 
 Called when the preference with the given key changed.
             */
	onsuccess(data: PreferenceData): void
}

interface PreferenceGetAllCallback {
	/** 
 Called with all preferences' data as an argument.
             */
	onsuccess(preferences: PreferenceData[]): void
}

interface PushManagerObject {
	/**  */
	push: PushManager;
}

interface PushManager {
	/** 
 Registers an application to the Tizen push server.
             */
	registerService(appControl: ApplicationControl,successCallback: PushRegisterSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers an application to the Tizen push server.
             */
	register(successCallback: PushRegisterSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Unregisters an application from the Tizen push server.
             */
	unregisterService(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Unregisters an application from the Tizen push server.
             */
	unregister(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Connects to the push service and receives push notifications.
             */
	connectService(notificationCallback: PushNotificationCallback): void
	/** 
 Connects to the push service and gets state change events and push notifications.
             */
	connect(stateChangeCallback: PushRegistrationStateChangeCallback,notificationCallback: PushNotificationCallback,errorCallback: ErrorCallback): void
	/** 
 Disconnects the push service and stops receiving push notifications.
             */
	disconnectService(): void
	/** 
 Disconnects the push service and stops receiving push notifications.
             */
	disconnect(): void
	/** 
 Gets the push service registration ID for this application if the registration process is successful. is returned if the application has not been registered yet.
             */
	getRegistrationId(): PushRegistrationId
	/** 
 Requests to get unread push notifications. As a consequence, the PushNotificationCallback which was set using the connectService() method will be invoked to retrieve the notifications..
             */
	getUnreadNotifications(): void
	/** 
 Gets push messages when the application is launched by the push service.
             */
	getPushMessage(): PushMessage
}

interface PushMessage {
	/** 
 An attribute to store the push notification data.
             */
	appData: DOMString;
	/** 
 An attribute to store the push notification message that may include an alert message to the user.
             */
	alertMessage: DOMString;
	/** 
 An attribute to store the full push notification message.
             */
	message: DOMString;
	/** 
 An attribute to store the date/time when a push notification message is received.
             */
	date: Date;
	/** 
 The name of the sender of the notification.
             */
	sender: DOMString;
	/** 
 The session information of the notification.
             */
	sessionInfo: DOMString;
	/** 
 The request ID assigned by the sender.
             */
	requestId: DOMString;
}

interface PushRegisterSuccessCallback {
	/** 
 Called when a push service registration request is successful.
             */
	onsuccess(id: PushRegistrationId): void
}

interface PushRegistrationStateChangeCallback {
	/** 
 Called when the state of push registration is changed.
             */
	onsuccess(state: PushRegistrationState): void
}

interface PushNotificationCallback {
	/** 
 Called when the push notification message arrives.
             */
	onsuccess(message: PushMessage): void
}

interface SensorServiceManagerObject {
	/**  */
	sensorservice: SensorService;
}

interface SensorService {
	/** 
 Gets the default sensor of the device for the given sensor type.
             */
	getDefaultSensor(type: SensorType): Sensor
	/** 
 Gets the available sensor types.
             */
	getAvailableSensors(): void
}

interface Sensor {
	/** 
 Sensor type to monitor the changes.
             */
	sensorType: SensorType;
	/** 
 Starts the sensor.
             */
	start(successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Stops the sensor.
             */
	stop(): void
	/** 
 Registers a listener to retrieve sensor data periodically.
             */
	setChangeListener(successCallback: SensorDataSuccessCallback,interval: long,batchLatency: long): void
	/** 
 Unregisters the sensor data change listener.
             */
	unsetChangeListener(): void
	/** 
 Gets hardware information of the sensor.
             */
	getSensorHardwareInfo(successCallback: SensorHardwareInfoSuccessCallback,errorCallback: ErrorCallback): void
}

interface LightSensor {
	/** 
 Gets the current sensor data.
             */
	getLightSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface MagneticSensor {
	/** 
 Gets the current sensor data.
             */
	getMagneticSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface PressureSensor {
	/** 
 Gets the current sensor data.
             */
	getPressureSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface ProximitySensor {
	/** 
 Gets the current sensor data.
             */
	getProximitySensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface UltravioletSensor {
	/** 
 Gets the current sensor data.
             */
	getUltravioletSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface HRMRawSensor {
	/** 
 Gets the current sensor data.
             */
	getHRMRawSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface GravitySensor {
	/** 
 Gets the current gravity sensor data. You can refer to the  interface.
             */
	getGravitySensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface GyroscopeSensor {
	/** 
 Gets the current gyroscope sensor data. You can refer to the  interface.
             */
	getGyroscopeSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface GyroscopeRotationVectorSensor {
	/** 
 Gets the current gyroscope rotation vector sensor data. You can refer to the  interface.
             */
	getGyroscopeRotationVectorSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface LinearAccelerationSensor {
	/** 
 Gets the current sensor data.
             */
	getLinearAccelerationSensorData(successCallback: SensorDataSuccessCallback,errorCallback: ErrorCallback): void
}

interface SensorData {
}

interface SensorLightData {
	/** 
 Ambient light level in lux.
             */
	lightLevel: double;
}

interface SensorMagneticData {
	/** 
 Ambient magnetic field of the X axis in micro-Tesla (µT).
             */
	x: double;
	/** 
 Ambient magnetic field of the Y axis in micro-Tesla (µT).
             */
	y: double;
	/** 
 Ambient magnetic field of the Z axis in micro-Tesla (µT).
             */
	z: double;
	/** 
 Accuracy of magnetic sensor data.
             */
	accuracy: MagneticSensorAccuracy;
}

interface SensorPressureData {
	/** 
 Pressure in hectopascal (hPa).
             */
	pressure: double;
}

interface SensorProximityData {
	/** 
 Proximity state.
             */
	proximityState: ProximityState;
}

interface SensorUltravioletData {
	/** 
 Ultraviolet index.
             */
	ultravioletLevel: long;
}

interface SensorHRMRawData {
	/** 
 HRM sensor light type.
             */
	lightType: DOMString;
	/** 
 HRM sensor light intensity measures the light intensity that is reflected from a blood vessel. The changes in the reported value represent blood volume changes in the microvascular bed of the tissue, and can be used to estimate heart rate.
             */
	lightIntensity: number;
}

interface SensorGravityData {
	/** 
 Value of the Earth's gravity in the device's X axis in m/s².The value can be between -9.8 and 9.8 inclusive.
             */
	x: double;
	/** 
 Value of the Earth's gravity in the device's Y axis in m/s².The value can be between -9.8 and 9.8 inclusive.
             */
	y: double;
	/** 
 Value of the Earth's gravity in the device's Z axis in m/s².The value can be between -9.8 and 9.8 inclusive.
             */
	z: double;
}

interface SensorGyroscopeData {
	/** 
 The angular velocity about the device's X axis in °/s.The value can be between -573.0 and 573.0 inclusive.
             */
	x: double;
	/** 
 The angular velocity about the device's Y axis in °/s.The value can be between -573.0 and 573.0 inclusive.
             */
	y: double;
	/** 
 The angular velocity about the device's Z axis in °/s.The value can be between -573.0 and 573.0 inclusive.
             */
	z: double;
}

interface SensorGyroscopeRotationVectorData {
	/** 
 The X direction component of the rotation vector (x * sin(θ/2)).The value can be between -1 and 1 inclusive.
             */
	x: double;
	/** 
 The Y direction component of the rotation vector (y * sin(θ/2)).The value can be between -1 and 1 inclusive.
             */
	y: double;
	/** 
 The Z direction component of the rotation vector (z * sin(θ/2)).The value can be between -1 and 1 inclusive.
             */
	z: double;
	/** 
 The scalar component of the rotation vector (cos(θ/2)).The value can be between -1 and 1 inclusive.
             */
	w: double;
}

interface SensorLinearAccelerationData {
	/** 
 Value of the linear acceleration in the device's X axis in m/s².The value can be between -19.6 and 19.6 inclusive.
             */
	x: double;
	/** 
 Value of the linear acceleration in the device's Y axis in m/s².The value can be between -19.6 and 19.6 inclusive.
             */
	y: double;
	/** 
 Value of the linear acceleration in the device's Z axis in m/s².The value can be between -19.6 and 19.6 inclusive.
             */
	z: double;
}

interface SensorHardwareInfo {
	/** 
 Name of the sensor.
             */
	name: DOMString;
	/** 
 .             */
	type: SensorType;
	/** 
 Vendor of the sensor.
             */
	vendor: DOMString;
	/** 
 Minimum reading value that can be received from the sensor.The units for the minimum value depends on the sensor type:             */
	minValue: double;
	/** 
 Maximum reading value that can be received from the sensor.The units for the maximum value depends on the sensor type:             */
	maxValue: double;
	/** 
 The smallest change which the sensor can detect.The units of the resolution depends on the sensor type:             */
	resolution: double;
	/** 
 Minimum interval of the sensor which means a period between two events.
             */
	minInterval: long;
	/** 
 Maximum batch count of sensor, batch means storing a sensors event in a hardware FIFO register when processor stay on sleep or suspend status.
             */
	maxBatchCount: long;
}

interface SensorDataSuccessCallback {
	/** 
 Called periodically.
             */
	onsuccess(sensorData: SensorData): void
}

interface SensorHardwareInfoSuccessCallback {
	/** 
 Called when sensor hardware infomation is successfully retrieved.
             */
	onsuccess(hardwareInfo: SensorHardwareInfo): void
}

interface SEServiceManagerObject {
	/**  */
	seService: SEService;
}

interface SEService {
	/** 
 Gets all the available Secure Element readers.
             */
	getReaders(successCallback: ReaderArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Registers a callback function that is invoked when an available Secure Element reader is detected.
             */
	registerSEListener(listener: SEChangeListener): void
	/** 
 Unregisters the listener from notifying any detection of an available Secure Element reader.
             */
	unregisterSEListener(id: number): void
	/** 
 Shuts down Secure Elements after releasing all resources.
             */
	shutdown(): void
}

interface Reader {
	/** 
 Boolean value that indicates whether a Secure Element is present on a reader.
             */
	isPresent: boolean;
	/** 
 Gets the reader's name.
             */
	getName(): void
	/** 
 Opens a session on a reader.
             */
	openSession(successCallback: SessionSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Closes all sessions opened on a reader.
             */
	closeSessions(): void
}

interface Session {
	/** 
 Boolean value that indicates whether a session is closed.
             */
	isClosed: boolean;
	/** 
 Opens a basic channel in a session.
The basic channel (defined in the ISO7816-4 specification) is opened by default and its channel ID is .
Once this channel has been opened by an application, it is considered to be "locked" to other applications, and they cannot open any channel, until the basic channel is closed.
Some Secure Elements might always deny opening a basic channel.
             */
	openBasicChannel(aid: byte[],successCallback: ChannelSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Opens a logical channel in a session by the specified applet ID.
The logical channel is defined in the ISO7816-4 specification.
             */
	openLogicalChannel(aid: byte[],successCallback: ChannelSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the answer to reset(ATR) of a Secure Element.
             */
	getATR(): void
	/** 
 Closes a session.
             */
	close(): void
	/** 
 Closes all channels on this session.
             */
	closeChannels(): void
}

interface Channel {
	/** 
 Boolean value that indicates whether it is a basic channel.
             */
	isBasicChannel: boolean;
	/** 
 Closes a channel.
             */
	close(): void
	/** 
 Transmits an APDU command to a Secure Element. The APDU command is defined in ISO7816-4.
             */
	transmit(command: byte[],successCallback: TransmitSuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the data as received from the application select command including the status words.
             */
	getSelectResponse(): void
}

interface SEChangeListener {
	/** 
 Called when a Secure Element reader is detected.
             */
	onSEReady(reader: Reader): void
	/** 
 Called when a Secure Element reader is lost.
             */
	onSENotReady(reader: Reader): void
	/** 
 Called when a Secure Element reader has an error.
             */
	onSEError(reader: Reader,error: WebAPIError): void
}

interface ReaderArraySuccessCallback {
	/** 
 Called when an asynchronous call completes successfully.
             */
	onsuccess(readers: Reader[]): void
}

interface SessionSuccessCallback {
	/** 
 Called when an asynchronous call completes successfully.
             */
	onsuccess(session: Session): void
}

interface ChannelSuccessCallback {
	/** 
 Called when an asynchronous call completes successfully.
             */
	onsuccess(channel: Channel): void
}

interface TransmitSuccessCallback {
	/** 
 Called when an asynchronous call completes successfully.
             */
	onsuccess(response: byte[]): void
}

interface SoundManagerObject {
	/**  */
	sound: SoundManager;
}

interface SoundManager {
	/** 
 Gets the current sound mode.
             */
	getSoundMode(): SoundModeType
	/** 
 Sets the volume level for a specified sound type.
             */
	setVolume(type: SoundType,volume: double): void
	/** 
 Gets the current volume level for a specified sound type.
             */
	getVolume(type: SoundType): void
	/** 
 Registers a listener to be called when the sound mode is changed.
             */
	setSoundModeChangeListener(callback: SoundModeChangeCallback): void
	/** 
 Unsubscribes from receiving notification about the sound mode change.
             */
	unsetSoundModeChangeListener(): void
	/** 
 Registers a listener to be called when the volume level is changed.
             */
	setVolumeChangeListener(callback: SoundVolumeChangeCallback): void
	/** 
 Unsubscribes from receiving notification when the volume level is changed.
             */
	unsetVolumeChangeListener(): void
	/** 
 Gets a list of connected sound devices.
             */
	getConnectedDeviceList(): void
	/** 
 Gets a list of activated sound devices.
             */
	getActivatedDeviceList(): void
	/** 
 Registers a listener that is to be called when the sound device state is changed.
             */
	addDeviceStateChangeListener(callback: SoundDeviceStateChangeCallback): void
	/** 
 Unsubscribes from receiving notifications when the sound device state is changed.
             */
	removeDeviceStateChangeListener(id: long): void
}

interface SoundDeviceInfo {
	/** 
 The sound device ID
             */
	id: long;
	/** 
 The sound device name
             */
	name: DOMString;
	/** 
 The sound device type
             */
	device: SoundDeviceType;
	/** 
 The sound device I/O type
             */
	direction: SoundIOType;
	/** 
 True if the sound device state is connected
             */
	isConnected: boolean;
	/** 
 True if the sound device state is activated
             */
	isActivated: boolean;
}

interface SoundModeChangeCallback {
	/** 
 Called when the sound mode has changed.
             */
	onsuccess(mode: SoundModeType): void
}

interface SoundVolumeChangeCallback {
	/** 
 Called when the volume level has changed.
             */
	onsuccess(type: SoundType,volume: double): void
}

interface SoundDeviceStateChangeCallback {
	/** 
 Method invoked when the sound device state changes.
             */
	onchanged(info: SoundDeviceInfo): void
}

interface SystemInfoObject {
	/**  */
	systeminfo: SystemInfo;
}

interface SystemInfo {
	/** 
 Gets the total amount of system memory (in bytes).
             */
	getTotalMemory(): void
	/** 
 Gets the amount of memory that is not in use (in bytes).
             */
	getAvailableMemory(): void
	/** 
 Gets the capabilities of the device.
             */
	getCapabilities(): SystemInfoDeviceCapability
	/** 
 Gets a device capability related to a given key.
             */
	getCapability(key: DOMString): void
	/** 
 Gets the number of system property information provided for a particular system property.
             */
	getCount(property: SystemInfoPropertyId): void
	/** 
 Gets the current value of a specified system property.
             */
	getPropertyValue(property: SystemInfoPropertyId,successCallback: SystemInfoPropertySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the current values of a specified system property.
             */
	getPropertyValueArray(property: SystemInfoPropertyId,successCallback: SystemInfoPropertyArraySuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Adds a listener to allow tracking of changes in one or more system properties.
             */
	addPropertyValueChangeListener(property: SystemInfoPropertyId,successCallback: SystemInfoPropertySuccessCallback,options: SystemInfoOptions,errorCallback: ErrorCallback): void
	/** 
 Adds a listener to allow tracking of changes in one or more values of a system property.
             */
	addPropertyValueArrayChangeListener(property: SystemInfoPropertyId,successCallback: SystemInfoPropertyArraySuccessCallback,options: SystemInfoOptions,errorCallback: ErrorCallback): void
	/** 
 Unsubscribes notifications for property changes.
             */
	removePropertyValueChangeListener(listenerId: number): void
}

interface SystemInfoDeviceCapability {
	/** 
 Indicates whether the device supports Bluetooth.
             */
	bluetooth: boolean;
	/** 
 Indicates whether the device supports NFC.
             */
	nfc: boolean;
	/** 
 Indicates whether the device supports NFC reserved push.
             */
	nfcReservedPush: boolean;
	/** 
 The number of point in Multi-point touch.
             */
	multiTouchCount: number;
	/** 
 Indicates whether the device supports the built-in Keyboard.
             */
	inputKeyboard: boolean;
	/** 
 Indicates whether the device supports the built-in keyboard layout.
             */
	inputKeyboardLayout: boolean;
	/** 
 Indicates whether the device supports Wi-Fi.
             */
	wifi: boolean;
	/** 
 Indicates whether the device supports Wi-Fi direct.
             */
	wifiDirect: boolean;
	/** 
 Indicates whether the device supports OpenGL-ES.
             */
	opengles: boolean;
	/** 
 The device 3DC texture format for OpenGL-ES.
One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
             */
	openglestextureFormat: DOMString;
	/** 
 Indicates whether the device supports OpenGL-ES version 1.1.
             */
	openglesVersion1_1: boolean;
	/** 
 Indicates whether the device supports OpenGL-ES version 2.0.
             */
	openglesVersion2_0: boolean;
	/** 
 Indicates whether the device supports FM radio.
             */
	fmRadio: boolean;
	/** 
 The version of the platform in the  format. For example,  represents a platform version where the major version is and the minor and build versions are .
             */
	platformVersion: DOMString;
	/** 
 The version of the Web API in the  format. For example, represents a web api version where the major version is  and the minor version is .
             */
	webApiVersion: DOMString;
	/** 
 The version of the native API in the format.             */
	nativeApiVersion: DOMString;
	/** 
 The name of the platform.
             */
	platformName: DOMString;
	/** 
 Indicates whether the device supports camera.
             */
	camera: boolean;
	/** 
 Indicates whether the device supports front camera.
             */
	cameraFront: boolean;
	/** 
 Indicates whether the device supports flash on the front camera.
             */
	cameraFrontFlash: boolean;
	/** 
 Indicates whether the device supports back-side camera.
             */
	cameraBack: boolean;
	/** 
 Indicates whether the device supports flash on the back-side camera.
             */
	cameraBackFlash: boolean;
	/** 
 Indicates whether the device supports GPS or not.
             */
	location: boolean;
	/** 
 Indicates whether the device supports GPS based location feature.
             */
	locationGps: boolean;
	/** 
 Indicates whether the device supports WPS based location feature.
             */
	locationWps: boolean;
	/** 
 Indicates whether the device supports microphone.
             */
	microphone: boolean;
	/** 
 Indicates whether the device supports USB host.
             */
	usbHost: boolean;
	/** 
 Indicates whether the device supports USB accessory.
             */
	usbAccessory: boolean;
	/** 
 Indicates whether the device supports RCA output.
             */
	screenOutputRca: boolean;
	/** 
 Indicates whether the device supports HDMI output.
             */
	screenOutputHdmi: boolean;
	/** 
 The device CPU architecture.
The possible values for this attribute are: armv6, armv7, x86.
             */
	platformCoreCpuArch: DOMString;
	/** 
 The device FPU architecture.
The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
             */
	platformCoreFpuArch: DOMString;
	/** 
 Indicates whether the device supports VOIP.
             */
	sipVoip: boolean;
	/** 
 Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
             */
	duid: DOMString;
	/** 
 Indicates whether the device supports speech recognition.
             */
	speechRecognition: boolean;
	/** 
 Indicates whether the device supports speech synthesis.
             */
	speechSynthesis: boolean;
	/** 
 Indicates whether the device supports Accelerometer sensor.
             */
	accelerometer: boolean;
	/** 
 Indicates whether the device supports Accelerometer sensor wake-up feature.
             */
	accelerometerWakeup: boolean;
	/** 
 Indicates whether the device supports Barometer sensor.
             */
	barometer: boolean;
	/** 
 Indicates whether the device supports Barometer sensor wake-up feature.
             */
	barometerWakeup: boolean;
	/** 
 Indicates whether the device supports Gyroscope sensor.
             */
	gyroscope: boolean;
	/** 
 Indicates whether the device supports Gyroscope sensor wake-up feature.
             */
	gyroscopeWakeup: boolean;
	/** 
 Indicates whether the device supports Magnetometer sensor.
             */
	magnetometer: boolean;
	/** 
 Indicates whether the device supports Magnetometer sensor wake-up feature.
             */
	magnetometerWakeup: boolean;
	/** 
 Indicates whether the device supports Photometer sensor.
             */
	photometer: boolean;
	/** 
 Indicates whether the device supports Photometer sensor wake-up feature.
             */
	photometerWakeup: boolean;
	/** 
 Indicates whether the device supports Proximity sensor.
             */
	proximity: boolean;
	/** 
 Indicates whether the device supports Proximity sensor wake-up feature.
             */
	proximityWakeup: boolean;
	/** 
 Indicates whether the device supports Tiltmeter sensor.
             */
	tiltmeter: boolean;
	/** 
 Indicates whether the device supports Tiltmeter sensor wake-up feature.
             */
	tiltmeterWakeup: boolean;
	/** 
 Indicates whether the device supports data encryption.
             */
	dataEncryption: boolean;
	/** 
 Indicates whether the device supports hardware acceleration for 2D/3D graphics.
             */
	graphicsAcceleration: boolean;
	/** 
 Indicates whether the device supports push service.
             */
	push: boolean;
	/** 
 Indicates whether the device supports the telephony feature.
             */
	telephony: boolean;
	/** 
 Indicates whether the device supports the mms feature.
             */
	telephonyMms: boolean;
	/** 
 Indicates whether the device supports the sms feature.
             */
	telephonySms: boolean;
	/** 
 Indicates whether the device supports the screen normal size.
             */
	screenSizeNormal: boolean;
	/** 
 Indicates whether the device supports the 480 * 800 screen size.
             */
	screenSize480_800: boolean;
	/** 
 Indicates whether the device supports the 720 * 1280 screen size.
             */
	screenSize720_1280: boolean;
	/** 
 Indicates whether the device supports auto rotation.
             */
	autoRotation: boolean;
	/** 
 Indicates whether the device supports shell app widget(dynamic box).
             */
	shellAppWidget: boolean;
	/** 
 Indicates whether the device supports vision image recognition.
             */
	visionImageRecognition: boolean;
	/** 
 Indicates whether the device supports vision qrcode generation.
             */
	visionQrcodeGeneration: boolean;
	/** 
 Indicates whether the device supports vision qrcode recognition.
             */
	visionQrcodeRecognition: boolean;
	/** 
 Indicates whether the device supports vision face recognition.
             */
	visionFaceRecognition: boolean;
	/** 
 Indicates whether the device supports secure element.
             */
	secureElement: boolean;
	/** 
 Indicates whether the device supports native osp API.
             */
	nativeOspCompatible: boolean;
	/** 
 Represents the profile of the current device.
             */
	profile: SystemInfoProfile;
}

interface SystemInfoPropertySuccessCallback {
	/** 
 Method invoked when the asynchronous call completes successfully.
             */
	onsuccess(property: SystemInfoProperty): void
}

interface SystemInfoPropertyArraySuccessCallback {
	/** 
 Method invoked when the asynchronous call completes successfully.
             */
	onsuccess(properties: SystemInfoProperty[]): void
}

interface SystemInfoProperty {
}

interface SystemInfoBattery {
	/** 
 An attribute to specify the remaining level of an internal battery, scaled from to :
             */
	level: double;
	/** 
 Indicates whether the battery source is currently charging.
             */
	isCharging: boolean;
}

interface SystemInfoCpu {
	/** 
  An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system.
Any threshold parameter used in a watch function to monitor this property applies to this attribute.
             */
	load: double;
}

interface SystemInfoStorage {
	/** 
 The array of storage units connected to this device.
             */
	units: SystemInfoStorageUnit[];
}

interface SystemInfoStorageUnit {
	/** 
 The type of a storage device. The value is one of the constants defined for this type.
             */
	type: DOMString;
	/** 
 The amount of data that this device can hold, in bytes.
             */
	capacity: number;
	/** 
 The amount of available data that this device can hold, in bytes.
             */
	availableCapacity: number;
	/** 
 An attribute to indicate whether a device can be removed or not.
             */
	isRemovable: boolean;
	/** 
 true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
             */
	isRemoveable: boolean;
}

interface SystemInfoDisplay {
	/** 
 The total number of addressable pixels in the horizontal direction of a rectangular entity
(such as Camera, Display, Image, Video, ...) when held in its default orientation.
             */
	resolutionWidth: number;
	/** 
 The total number of addressable pixels in the vertical direction of a rectangular element
(such as Camera, Display, Image, Video, ...) when held in its default orientation.
             */
	resolutionHeight: number;
	/** 
 Resolution of this device, along its width, in dots per inch.
             */
	dotsPerInchWidth: number;
	/** 
 Resolution of this device, along its height, in dots per inch.
             */
	dotsPerInchHeight: number;
	/** 
 The display's physical width in millimeters.
             */
	physicalWidth: double;
	/** 
 The display's physical height in millimeters.
             */
	physicalHeight: double;
	/** 
 The current brightness of a display ranging between to .
             */
	brightness: double;
}

interface SystemInfoDeviceOrientation {
	/** 
 Represents the status of the current device orientation.
             */
	status: SystemInfoDeviceOrientationStatus;
	/** 
 whether the device is in autorotation.
             */
	isAutoRotation: boolean;
}

interface SystemInfoBuild {
	/** 
 Represents the model name of the current device.
             */
	model: DOMString;
	/** 
 Represents the manufacturer of the device.
             */
	manufacturer: DOMString;
	/** 
 Represents the build version information of the device.
             */
	buildVersion: DOMString;
}

interface SystemInfoLocale {
	/** 
 Indicates the current language setting in the (LANGUAGE)_(REGION) syntax.
The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format.
The language setting is case-sensitive.
             */
	language: DOMString;
	/** 
 Indicates the current country setting in the (LANGUAGE)_(REGION) syntax.
The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format.
The country setting is case-sensitive.
             */
	country: DOMString;
}

interface SystemInfoNetwork {
	/** 
 Represents the network type of the current data network.
             */
	networkType: SystemInfoNetworkType;
}

interface SystemInfoWifiNetwork {
	/** 
 Represents the status (ON or OFF) of the Wi-Fi interface.
             */
	status: DOMString;
	/** 
 Represents the SSID of the Wi-Fi network.
             */
	ssid: DOMString;
	/** 
 Represents the IPv4 address of the Wi-Fi network.
             */
	ipAddress: DOMString;
	/** 
 Represents the IPv6 address of the Wi-Fi network.
             */
	ipv6Address: DOMString;
	/** 
 Represents the MAC address of the Wi-Fi interface.
             */
	macAddress: DOMString;
	/** 
 This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
             */
	signalStrength: double;
}

interface SystemInfoEthernetNetwork {
	/** 
 Represents the cable status (ATTACHED or DETACHED) of the ethernet interface.
             */
	cable: DOMString;
	/** 
 Represents the status (DEACTIVATED, DISCONNECTED or CONNECTED) of the ethernet interface.
             */
	status: DOMString;
	/** 
 Represents the IPv4 address of the ethernet network.
             */
	ipAddress: DOMString;
	/** 
 Represents the IPv6 address of the ethernet network.
             */
	ipv6Address: DOMString;
	/** 
 Represents the MAC address of the ethernet interface.
             */
	macAddress: DOMString;
}

interface SystemInfoCellularNetwork {
	/** 
 Represents the status (ON or OFF) of the cellular network.
             */
	status: DOMString;
	/** 
 Represents an Access Point Name of the cellular network.
             */
	apn: DOMString;
	/** 
 Represents the IPv4 address of the cellular network.
             */
	ipAddress: DOMString;
	/** 
 Represents the IPv6 address of the cellular network.
             */
	ipv6Address: DOMString;
	/** 
 Represents Mobile Country Code (MCC) of the cellular network.
             */
	mcc: number;
	/** 
 Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely
identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
             */
	mnc: number;
	/** 
 Represents Cell Id.
             */
	cellId: number;
	/** 
 Represents Location Area Code.
             */
	lac: number;
	/** 
 Whether the connection is set up while the device is roaming.
             */
	isRoaming: boolean;
	/** 
 Indicates whether the device is in flight mode.
             */
	isFlightMode: boolean;
	/** 
 Represents the International Mobile Equipment Identity (IMEI).
             */
	imei: DOMString;
}

interface SystemInfoNetProxyNetwork {
	/** 
 Represents the status (ON or OFF) of the net_proxy network.
             */
	status: DOMString;
}

interface SystemInfoSIM {
	/** 
 Represents the SIM card state.
             */
	state: SystemInfoSimState;
	/** 
 Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
             */
	operatorName: DOMString;
	/** 
 Represents the SIM card subscriber number.
             */
	msisdn: DOMString;
	/** 
 Represents the Integrated Circuit Card ID.
             */
	iccid: DOMString;
	/** 
 Represents the Mobile Country Code (MCC) of SIM provider.
             */
	mcc: number;
	/** 
 Represents the Mobile Network Code (MNC) of SIM provider.
             */
	mnc: number;
	/** 
 Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
             */
	msin: DOMString;
	/** 
 Represents the Service Provider Name (SPN) of SIM card.
             */
	spn: DOMString;
}

interface SystemInfoPeripheral {
	/** 
 Represents the video out status.
             */
	isVideoOutputOn: boolean;
}

interface SystemInfoMemory {
	/** 
 Represents the low memory state.
             */
	status: SystemInfoLowMemoryStatus;
}

interface SystemInfoCameraFlash {
	/** 
 Brightness level of the camera flash (0~1)
             */
	brightness: double;
	/** 
 Specifies camera to which this flash belongs
             */
	camera: DOMString;
	/** 
 Number of brightness levels supported by the flash (other than 0 brightness)
             */
	levels: long;
	/** 
 Sets the brightness value of the flash that is located next to the camera.
             */
	setBrightness(brightness: double): void
}

interface SystemInfoADS {
	/** 
 Represents the unique id of advertisement service. It is used to distinguish each device.
             */
	id: DOMString;
}

interface SystemSettingObject {
	/**  */
	systemsetting: SystemSettingManager;
}

interface SystemSettingManager {
	/** 
 Sets the property of a device.
             */
	setProperty(type: SystemSettingType,value: DOMString,successCallback: SuccessCallback,errorCallback: ErrorCallback): void
	/** 
 Gets the value of the property of a device.
             */
	getProperty(type: SystemSettingType,successCallback: SystemSettingSuccessCallback,errorCallback: ErrorCallback): void
}

interface SystemSettingSuccessCallback {
	/** 
 Called when the value of the system setting property is successfully retrieved.
             */
	onsuccess(value: DOMString): void
}

interface TimeManagerObject {
	/**  */
	time: TimeUtil;
}

interface TimeUtil {
	/** 
 Gets the current date/time.
             */
	getCurrentDateTime(): TZDate
	/** 
 Gets the identifier of the local system timezone.
             */
	getLocalTimezone(): void
	/** 
 Gets synchronously the identifiers of the timezones supported by the device.
             */
	getAvailableTimezones(): void
	/**  */
	getDateFormat(shortformat: boolean): void
	/**  */
	getTimeFormat(): void
	/** 
 Checks whether the given year is a leap year.
             */
	isLeapYear(year: long): void
	/** 
 Sets a listener to receive notification of changes to the time/date on a device.
             */
	setDateTimeChangeListener(changeCallback: SuccessCallback): void
	/** 
 Unsets the listener to stop receiving notification of changes to the time/date on a device.
             */
	unsetDateTimeChangeListener(): void
	/** 
 Sets a listener to receive notification of changes to the time zone on a device.
             */
	setTimezoneChangeListener(changeCallback: SuccessCallback): void
	/** 
 Unsets the listener to stop receiving notification of changes to the time zone on a device.
             */
	unsetTimezoneChangeListener(): void
}

interface TZDate {
	/** 
 Gets the day of the month (from 1-31).
             */
	getDate(): void
	/** 
 Sets the day of the month (from 1-31).
             */
	setDate(date: long): void
	/** 
 Gets the day of the week (from 0-6). 0 denotes Sunday, 1 denotes Monday and so on.
             */
	getDay(): void
	/** 
 Gets the year.
             */
	getFullYear(): void
	/** 
 Sets the year.
             */
	setFullYear(year: long): void
	/** 
 Gets the hour (0-23).
             */
	getHours(): void
	/** 
 Sets the hour (0-23).
             */
	setHours(hours: long): void
	/** 
 Gets the milliseconds (from 0-999).
             */
	getMilliseconds(): void
	/** 
 Sets the milliseconds (from 0-999).
             */
	setMilliseconds(ms: long): void
	/** 
 Gets the minutes (from 0-59).
             */
	getMinutes(): void
	/** 
 Sets the minutes.
             */
	setMinutes(minutes: long): void
	/** 
 Gets the month (from 0-11). Note: January is denoted as 0, February as 1, and so on till December, which is denoted as 11.
             */
	getMonth(): void
	/** 
 Sets the month (from 0-11).
             */
	setMonth(month: long): void
	/** 
 Gets the seconds (from 0-59).
             */
	getSeconds(): void
	/** 
 Sets the seconds (from 0-59).
             */
	setSeconds(seconds: long): void
	/** 
 Gets the day of the month, according to universal time (from 1-31).
             */
	getUTCDate(): void
	/** 
 Sets the day of the month, according to universal time (from 1-31).
             */
	setUTCDate(date: long): void
	/** 
 Gets the day of the week, according to universal time (from 0-6).
             */
	getUTCDay(): void
	/** 
 Gets the year, according to universal time.
             */
	getUTCFullYear(): void
	/** 
 Sets the year, according to universal time.
             */
	setUTCFullYear(year: long): void
	/** 
 Gets the hour, according to universal time (0-23).
             */
	getUTCHours(): void
	/** 
 Sets the hour, according to universal time (0-23).
             */
	setUTCHours(hours: long): void
	/** 
 Gets the milliseconds, according to universal time (from 0-999).
             */
	getUTCMilliseconds(): void
	/** 
 Sets the milliseconds, according to universal time (from 0-999).
             */
	setUTCMilliseconds(ms: long): void
	/** 
 Gets the minutes, according to universal time (from 0-59).
             */
	getUTCMinutes(): void
	/** 
 Sets the minutes, according to universal time (from 0-59).
             */
	setUTCMinutes(minutes: long): void
	/** 
 Gets the month, according to universal time (from 0-11). Note: January is denoted as 0, February as 1 and so on till December, which is denoted as 11.
             */
	getUTCMonth(): void
	/** 
 Sets the month, according to universal time (from 0-11).
             */
	setUTCMonth(month: long): void
	/** 
 Gets the seconds, according to universal time (from 0-59).
             */
	getUTCSeconds(): void
	/** 
 Sets the seconds, according to universal time (from 0-59).
             */
	setUTCSeconds(seconds: long): void
	/** 
 Gets the timezone identifier.
             */
	getTimezone(): void
	/** 
 Gets a copy of the TZDate converted to a given time zone.
             */
	toTimezone(tzid: DOMString): TZDate
	/** 
 Gets a copy of the TZDate converted to the local time zone.
             */
	toLocalTimezone(): TZDate
	/** 
 Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
             */
	toUTC(): TZDate
	/** 
 Calculates the difference with another TZDate object.
             */
	difference(other: TZDate): TimeDuration
	/** 
 Checks whether the TZDate is equal to another.
             */
	equalsTo(other: TZDate): void
	/** 
 Checks whether the TZDate is earlier than another.
             */
	earlierThan(other: TZDate): void
	/** 
 Checks whether the TZDate is later than another.
             */
	laterThan(other: TZDate): void
	/** 
 Gets a new date by adding a duration to the current TZDate object.
             */
	addDuration(duration: TimeDuration): TZDate
	/** 
 Gets the date portion of a TZDate object as a string, using locale conventions.
             */
	toLocaleDateString(): void
	/** 
 Gets the time portion of a TZDate object as a string, using locale conventions.
             */
	toLocaleTimeString(): void
	/** 
 Converts a TZDate object to a string, using locale conventions.
             */
	toLocaleString(): void
	/** 
 Gets the date portion of a TZDate object as a string.
             */
	toDateString(): void
	/** 
 Gets the time portion of a TZDate object as a string.
             */
	toTimeString(): void
	/** 
 Converts a TZDate object to a string.
             */
	toString(): void
	/** 
 Determines the time zone abbreviation to be used at a particular date in the time zone.
             */
	getTimezoneAbbreviation(): void
	/** 
 Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
             */
	secondsFromUTC(): void
	/** 
 Checks whether Daylight Saving Time(DST) is active for this TZDate.
             */
	isDST(): void
	/** 
 Gets the date of the previous daylight saving time transition for the timezone.
             */
	getPreviousDSTTransition(): TZDate
	/** 
 Gets the date of the next daylight saving time transition for the timezone.
             */
	getNextDSTTransition(): TZDate
}

interface TimeDuration {
	/** 
 The duration length.
             */
	length: long long;
	/** 
 The duration unit (milliseconds, seconds, minutes, hours, or days).
             */
	unit: TimeDurationUnit;
	/** 
 Calculates the difference between two TimeDuration objects.
             */
	difference(other: TimeDuration): TimeDuration
	/** 
 Checks whether the TimeDuration is equal to another.
             */
	equalsTo(other: TimeDuration): void
	/** 
 Checks whether the TimeDuration is lower than another.
             */
	lessThan(other: TimeDuration): void
	/** 
 Checks whether the TimeDuration is greater than another.
             */
	greaterThan(other: TimeDuration): void
}

interface TizenObject {
	/**  */
	tizen: Tizen;
}

interface AbstractFilter {
}

interface AttributeFilter {
	/** 
 The name of the object attribute used for filtering.
             */
	attributeName: DOMString;
	/** 
 The match flag used for attribute-based filtering.
             */
	matchFlag: FilterMatchFlag;
	/** 
 The value used for matching.
             */
	matchValue: any;
}

interface AttributeRangeFilter {
	/** 
 The name of the object attribute used for filtering.
             */
	attributeName: DOMString;
	/** 
 Objects with an attribute that is greater than or equal to  will match.
             */
	initialValue: any;
	/** 
 Objects with an attribute that is strictly lower than or equal to  will match.
             */
	endValue: any;
}

interface CompositeFilter {
	/** 
 The composite filter type.
             */
	type: CompositeFilterType;
	/** 
 The list of filters in the composite filter.
             */
	filters: AbstractFilter[];
}

interface SortMode {
	/** 
 The name of the object attribute used for sorting.
             */
	attributeName: DOMString;
	/** 
 The type of the sorting.
             */
	order: SortModeOrder;
}

interface SimpleCoordinates {
	/** 
 Latitude.
             */
	latitude: double;
	/** 
 Longitude.
             */
	longitude: double;
}

interface WebAPIException {
	/** 
 16-bit error code.
             */
	code: number;
	/** 
 An error type. The name attribute must return the value it had been initialized with.
             */
	name: DOMString;
	/** 
 An error message that describes the details of an encountered error.
             */
	message: DOMString;
}

interface WebAPIError {
	/** 
 16-bit error code.
             */
	code: number;
	/** 
 An error type. The name attribute must return the value it had been initialized with.
             */
	name: DOMString;
	/** 
 An error message that describes the details of the error encountered.
             */
	message: DOMString;
}

interface SuccessCallback {
	/** 
 Method invoked when the asynchronous call completes successfully.
             */
	onsuccess(): void
}

interface ErrorCallback {
	/** 
 Method that is invoked when an error occurs.
             */
	onerror(error: WebAPIError): void
}

interface WidgetServiceManagerObject {
	/**  */
	widget: WidgetServiceManager;
}

interface WidgetServiceManager {
	/** 
 Retrieves a Widget object with a given .
             */
	getWidget(widgetId: WidgetId): Widget
	/** 
 Retrieves a list of all widgets. If package id is provided returned list contains widgets included in a given package only.
             */
	getWidgets(successCallback: WidgetArraySuccessCallback,errorCallback: ErrorCallback,packageId: PackageId): void
	/** 
 Returns the primary widget ID of the specified package or application.
             */
	getPrimaryWidgetId(id: union): WidgetId
	/** 
 Returns the size coresponding to the given sizeType.
             */
	getSize(sizeType: WidgetSizeType): WidgetSize
}

interface Widget {
	/** 
 Widget ID.
             */
	id: WidgetId;
	/** 
 Main application ID.
             */
	applicationId: ApplicationId;
	/** 
 Setup application ID.
             */
	setupApplicationId: ApplicationId;
	/** 
 The ID of the package this widget was installed with.
             */
	packageId: PackageId;
	/** 
  if the widget should be hidden in the list of widgets.
             */
	noDisplay: boolean;
	/** 
 Returns a name of the widget in a given locale.
             */
	getName(locale: DOMString): void
	/** 
 Retrieves Widget instances (elements that have been added to the screen). Widget instance as opposed to the widget interface (which is abstarct of application), is a specified application.
             */
	getInstances(successCallback: WidgetInstancesCallback,errorCallback: ErrorCallback): void
	/** 
 Returns object representing widget information related to a given sizeType.
             */
	getVariant(sizeType: WidgetSizeType): WidgetVariant
	/** 
 Retrieves Wiget Variants representing all of the supported widget size types.
             */
	getVariants(successCallback: WidgetVariantsCallback,errorCallback: ErrorCallback): void
	/** 
 Registers a callback which will be called whenever any of this widget instances state changes.
             */
	addStateChangeListener(listener: WidgetChangeCallback): void
	/** 
 Unregisters a callback registered under the given watchId.
             */
	removeStateChangeListener(watchId: long): void
}

interface WidgetSize {
	/** 
 The horizontal dimension of the area in pixels.
             */
	width: long;
	/** 
 The vertical dimension of the area in pixels.
             */
	height: long;
}

interface WidgetVariant {
	/** 
 The WidgetSizeType this WidgetVariant describes.
             */
	sizeType: WidgetSizeType;
	/** 
 Pixel width.
             */
	width: long;
	/** 
 Pixel height.
             */
	height: long;
	/** 
 The preview image path.
             */
	previewImagePath: DOMString;
	/** 
  if the widget was designed to receive mouse events.
             */
	needsMouseEvents: boolean;
	/** 
  if the widget expects the system to show touch effect.
             */
	needsTouchEffect: boolean;
	/** 
  if the widget expects the system to draw a frame.
             */
	needsFrame: boolean;
}

interface WidgetInstance {
	/** 
 The Widget this instance belongs to.
             */
	widget: Widget;
	/** 
 The unique ID of the widget instance.
             */
	id: WidgetInstanceId;
	/** 
 Changes the interval between automatic update of the widget instance data. Minimum value is 1 second.
             */
	changeUpdatePeriod(seconds: double): void
	/** 
 Sends a new content data to the Widget Instance.
             */
	sendContent(data: Object,updateIfPaused: boolean): void
	/** 
 Retrieves content data from the Widget Instance.
             */
	getContent(successCallback: WidgetContentCallback,errorCallback: ErrorCallback): void
}

interface WidgetArraySuccessCallback {
	/** 
 Called when the array of  objects is retrieved successfully.
             */
	onsuccess(widgets: Widget[]): void
}

interface WidgetInstancesCallback {
	/** 
 Called when the array of  objects is retrieved successfully.
             */
	onsuccess(instances: WidgetInstance[]): void
}

interface WidgetVariantsCallback {
	/** 
 Called when the array of  objects is retrieved successfully.
             */
	onsuccess(instances: WidgetVariant[]): void
}

interface WidgetContentCallback {
	/** 
 Called when the content of the widget instance is retrieved successfully.
             */
	onsuccess(data: Object): void
}

interface WidgetChangeCallback {
	/** 
 Called when the instance state was changed.
             */
	onchange(instance: WidgetInstance,event: WidgetStateType): void
}

type DOMString = string
type long = number
type boolean = Boolean
type double = number
type AlarmId = DOMString
type InputDeviceKeyName = DOMString
type ResourceType = DOMString
type ResourceInterface = DOMString
type WidgetId = DOMString
type WidgetInstanceId = DOMString
type ApplicationContextId = DOMString
type ContentDirectoryId = DOMString
type PlaylistId = DOMString
type AID = DOMString
type PushRegistrationId = DOMString
type BluetoothAddress = DOMString
type PackageId = DOMString
type NotificationId = DOMString
type ApplicationId = DOMString
type BluetoothUUID = DOMString
type BluetoothLESolicitationUUID = DOMString
type ContentId = DOMString
type DeviceId = DOMString
type RawData = DOMString

interface Tizen extends AlarmManagerObject,ApplicationManagerObject,ArchiveManagerObject,BadgeManagerObject,BluetoothManagerObject,ContentManagerObject,ConvergenceObject,DataControlManagerObject,DownloadManagerObject,ExifManagerObject,FeedbackManagerObject,FileSystemManagerObject,HumanActivityMonitorManagerObject,InputDeviceManagerObject,IotconObject,KeyManagerObject,MediaControllerObject,MediaKeyManagerObject,MessagePortManagerObject,NFCManagerObject,NotificationObject,PackageManagerObject,PlayerUtilManagerObject,PowerManagerObject,PreferenceManagerObject,PushManagerObject,SensorServiceManagerObject,SEServiceManagerObject,SoundManagerObject,SystemInfoObject,SystemSettingObject,TimeManagerObject,WidgetServiceManagerObject{
}

declare var tizen: Tizen;

