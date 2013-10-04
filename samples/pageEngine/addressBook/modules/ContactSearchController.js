/**
 * Module controller for contact search
 * @class addressBook.modules.ContactSearchTemplateController
 */
Aria.classDefinition({
	$classpath : 'samples.pageEngine.addressBook.modules.ContactSearchController',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['samples.pageEngine.addressBook.modules.IContactSearchController'],	
	$dependencies : [],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);		
	},
	$destructor : function () {
		this.$ModuleCtrl.$destructor.call(this);
	},	
	$prototype : {
		$publicInterfaceName : "samples.pageEngine.addressBook.modules.IContactSearchController",	
		
		init : function (args, cb) {
            // Load the external DB (json)
            var url = "./mock/contactsDB.json";
    
            aria.core.IO.asyncRequest({
                url : url,
                expectedResponseType : "json",
                callback : {
                    fn : this._dataLoaded,
                    onerror : this._onDataLoadError,
                    scope : this,
                    args : cb
                }
            });
        },

        /**
		 * Simple search function called when clicking the search button.
		 */
        searchContact : function () {
            var query = this._data.query;

            this._data.results = [];
            this._searchByMatch(query);
            /*
            if (query.indexOf(" ") == -1) {
                this._searchOneWord(query);
            } else {
                this._searchMoreWords(query);
            }
            */
        },

        _searchByMatch : function (query) {
            var addressBook = this._data.addressBook.addressBook;
            var query = query.toLowerCase();
            var tmp = [];
            var regexp = new RegExp(query), found;

            for(var i=0; i < addressBook.length; i++) {
                found = false;
                var contact = addressBook[i];
                
                for (var field in contact) {
                    if ((!aria.utils.Json.isMetadata(field)) && (contact.hasOwnProperty(field))) {
                        if (contact[field].toLowerCase().match(regexp) !== null) {
                            found = true;       
                        }
                    }
                }
                if (found) {
                    tmp.push(contact);
                }
            }
            tmp.sort(function (a,b) {
                var first = (a.name + a.surname).toLowerCase();
                var second = (b.name + b.surname).toLowerCase();
                if (first < second) {
                    return -1;
                }
                if (first == second) {
                    return 0;
                }
                if (first > second) {
                    return 1;
                }

            });
            this.json.setValue(this._data, "results", tmp);
            this.$raiseEvent({
                name : "navigate",
                page : {
                    pageId : "SHOWRESULTS"
                }
            });
        },

        _searchOneWord : function (query) {
            var addressBook = this._data.addressBook.addressBook;
            var query = query.toLowerCase();
            var tmp = [];

            for(var i=0; i < addressBook.length; i++) {
                var contact = addressBook[i];
                
                for (var field in contact) {
                    if ((!aria.utils.Json.isMetadata(field)) && (contact.hasOwnProperty(field))) {
                        if (contact[field].toLowerCase() == query) {
                            tmp.push(contact);        
                        }
                    }
                }
            }
            this.json.setValue(this._data, "results", tmp);
            this.$raiseEvent({
                name : "navigate",
                page : {
                    pageId : "SHOWRESULTS"
                }
            });
        },

        _searchMoreWords : function (query) {
            var addressBook = this._data.addressBook.addressBook;
            var query = query.toLowerCase();
            var words = query.split(" ");
            var tmpRes = [];

            for(var i=0; i < addressBook.length; i++) {
                var contact = addressBook[i];

                for (var field in contact) {
                    if ((!aria.utils.Json.isMetadata(field)) && (contact.hasOwnProperty(field))) {
                        for (var j=0; j < words.length; j++) {
                            if (contact[field].toLowerCase() == words[j]) {

                                var idx = this._checkContactInRes(contact, tmpRes);
                                if (idx == -1) {
                                    var obj = {
                                        who : contact,
                                        numMatches : 1
                                    };

                                    tmpRes.push(obj);
                                } else {
                                    tmpRes[idx].numMatches++;
                                }

                            }
                        }
                    }
                }
            }

            tmpRes = this._sortRes(tmpRes);
            this._copyRes(tmpRes);
        },

        _checkContactInRes : function (contact, results) {
            for(var i=0; i < results.length; i++) {
                if (aria.utils.Json.equals(contact, results[i].who)) {
                    return i;
                }
            }
            return -1;
        },

        _sortRes : function (results) {
            var sort_by = function(field, reverse, primer){

                var key = function (x) {return primer ? primer(x[field]) : x[field]};

                return function (a,b) {
                    var A = key(a), B = key(b);
                    return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
                }
            }

            results.sort(sort_by('numMatches', false, parseInt));
            return results;
        },

        _copyRes : function (results) {
            var max = results[0].numMatches;            
            var tmp = [];

            for (var i=0; i < results.length; i++) {
                if (results[i].numMatches == max) {
                    tmp.push(results[i].who);
                }
            }
            
            this.json.setValue(this._data, "results", tmp);
        },

        _dataLoaded : function (ioRes, cb) {
            this._data.addressBook = ioRes.responseJSON || [];
            this.$callback(cb);
        },

        _onDataLoadError : function (cb) {
            // Error loading ext json
            this.$callback(cb);
        },

        newSearch : function () {
        	this._data.query = "";
        	this._data.results = [];
        	this.$raiseEvent({
            	name : "navigate",
            	page : {
            		pageId : "HOME"
            	}
            });
        },

        navigate : function (args) {
            this.json.setValue(this._data, "selected", args.item);
            if (args.type == "facebook") {
                this.$raiseEvent({
                    name : "navigate",
                    page : {
                        pageId : "FACEBOOK"
                    }
                });
            }
        }
	}
});