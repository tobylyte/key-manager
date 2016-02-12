/**
 * Manages an array of keys with each having a name and a value
 * Usage.
 * KeyManager.addKey("testKey1", "F3casd£SDfsdvsdv");
 * var keys = KeyManager.getKeys(); 
 * console.log(keys[0].name); // logs "testKey1"
 */ 
var KeyManager = (function () { 
	var keys = [];

	return {
		/**
		 * Adds an object to the keys array with the structure
		 * { 
		 * 	 "name": "TestKey", "value": "ASDFSDFSDF"
		 * }
		 */
		addKey : function(keyName, keyValue) {
			keys.push({"name": keyName, "key" : keyValue});
		},
		
		/**
		 * Returns an array of keys
		 */
		getKeys : function() {
			return keys;
		}
	};
})();