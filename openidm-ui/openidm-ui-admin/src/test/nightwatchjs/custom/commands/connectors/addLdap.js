// Makes REST call to create LDAP connector

var provisioner;

exports.command = function (callback) {
    console.log("Creating LDAP connector...");

    this
    .timeoutsAsyncScript(1000)
    .executeAsync(function(prov, done) {
        // create LDAP connector
        $.ajax({
            method: 'PUT',
            url: '/openidm/config/provisioner.openicf/ldap',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Content-Type","application/json");
                xhr.setRequestHeader("Accept","application/json");
                xhr.setRequestHeader("Cache-Control","no-cache");
            },
            data: prov
        });
        done(true);
    }, [provisioner]);
};

provisioner = JSON.stringify({
    "name" : "ldap",
    "connectorRef" : {
        "bundleName" : "org.forgerock.openicf.connectors.ldap-connector",
        "bundleVersion" : "[1.4.0.0,2.0.0.0)",
        "connectorName" : "org.identityconnectors.ldap.LdapConnector"
    },
    "configurationProperties" : {
        "host" : "localhost",
        "port" : 1389,
        "ssl" : false,
        "principal" : "cn=Directory Manager",
        "credentials" : "password",
        "baseContexts" : [
            "dc=example,dc=com"
        ],
        "baseContextsToSynchronize" : [
            "dc=example,dc=com"
        ],
        "accountSearchFilter" : null,
        "accountSynchronizationFilter" : null,
        "groupSearchFilter" : null,
        "groupSynchronizationFilter" : null,
        "passwordAttributeToSynchronize" : null,
        "synchronizePasswords" : false,
        "removeLogEntryObjectClassFromFilter" : true,
        "modifiersNamesToFilterOut" : [ ],
        "passwordDecryptionKey" : null,
        "changeLogBlockSize" : 100,
        "attributesToSynchronize" : [ ],
        "changeNumberAttribute" : "changeNumber",
        "passwordDecryptionInitializationVector" : null,
        "filterWithOrInsteadOfAnd" : false,
        "objectClassesToSynchronize" : [
            "inetOrgPerson"
        ],
        "vlvSortAttribute" : "uid",
        "passwordAttribute" : "userPassword",
        "useBlocks" : false,
        "maintainPosixGroupMembership" : false,
        "failover" : [ ],
        "readSchema" : true,
        "accountObjectClasses" : [
            "top",
            "person",
            "organizationalPerson",
            "inetOrgPerson"
        ],
        "accountUserNameAttributes" : [
            "uid"
        ],
        "groupMemberAttribute" : "uniqueMember",
        "passwordHashAlgorithm" : null,
        "usePagedResultControl" : true,
        "blockSize" : 100,
        "uidAttribute" : "dn",
        "maintainLdapGroupMembership" : false,
        "respectResourcePasswordPolicyChangeAfterReset" : false
    },
    "resultsHandlerConfig" : {
        "enableNormalizingResultsHandler" : true,
        "enableFilteredResultsHandler" : false,
        "enableCaseInsensitiveFilter" : false,
        "enableAttributesToGetSearchResultsHandler" : true
    },
    "poolConfigOption" : {
        "maxObjects" : 10,
        "maxIdle" : 10,
        "maxWait" : 150000,
        "minEvictableIdleTimeMillis" : 120000,
        "minIdle" : 1
    },
    "operationTimeout" : {
        "CREATE" : -1,
        "VALIDATE" : -1,
        "TEST" : -1,
        "SCRIPT_ON_CONNECTOR" : -1,
        "SCHEMA" : -1,
        "DELETE" : -1,
        "UPDATE" : -1,
        "SYNC" : -1,
        "AUTHENTICATE" : -1,
        "GET" : -1,
        "SCRIPT_ON_RESOURCE" : -1,
        "SEARCH" : -1
    },
    "syncFailureHandler" : {
        "maxRetries" : 5,
        "postRetryAction" : "logged-ignore"
    },
    "objectTypes" : {
        "account" : {
            "$schema" : "http://json-schema.org/draft-03/schema",
            "id" : "__ACCOUNT__",
            "type" : "object",
            "nativeType" : "__ACCOUNT__",
            "properties" : {
                "cn" : {
                    "type" : "string",
                    "nativeName" : "cn",
                    "nativeType" : "string"
                },
                "employeeType" : {
                    "type" : "string",
                    "nativeName" : "employeeType",
                    "nativeType" : "string"
                },
                "description" : {
                    "type" : "string",
                    "nativeName" : "description",
                    "nativeType" : "string"
                },
                "givenName" : {
                    "type" : "string",
                    "nativeName" : "givenName",
                    "nativeType" : "string"
                },
                "mail" : {
                    "type" : "string",
                    "nativeName" : "mail",
                    "nativeType" : "string"
                },
                "telephoneNumber" : {
                    "type" : "string",
                    "nativeName" : "telephoneNumber",
                    "nativeType" : "string"
                },
                "sn" : {
                    "type" : "string",
                    "nativeName" : "sn",
                    "nativeType" : "string"
                },
                "uid" : {
                    "type" : "string",
                    "nativeName" : "uid",
                    "nativeType" : "string"
                },
                "dn" : {
                    "type" : "string",
                    "nativeName" : "__NAME__",
                    "nativeType" : "string",
                    "required" : true
                },
                "userPassword" : {
                    "type" : "string",
                    "nativeName" : "userPassword",
                    "nativeType" : "string",
                    "flags" : [
                        "NOT_READABLE",
                        "NOT_RETURNED_BY_DEFAULT"
                    ]
                },
                "ldapGroups" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "ldapGroups",
                    "nativeType" : "string"
                },
                "disabled" : {
                    "type" : "string",
                    "nativeName" : "ds-pwp-account-disabled",
                    "nativeType" : "boolean"
                }
            }
        },
        "group" : {
            "$schema" : "http://json-schema.org/draft-03/schema",
            "id" : "__GROUP__",
            "type" : "object",
            "nativeType" : "__GROUP__",
            "properties" : {
                "seeAlso" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "seeAlso",
                    "nativeType" : "string"
                },
                "description" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "description",
                    "nativeType" : "string"
                },
                "uniqueMember" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "uniqueMember",
                    "nativeType" : "string"
                },
                "dn" : {
                    "type" : "string",
                    "required" : true,
                    "nativeName" : "__NAME__",
                    "nativeType" : "string"
                },
                "o" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "o",
                    "nativeType" : "string"
                },
                "ou" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "ou",
                    "nativeType" : "string"
                },
                "businessCategory" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "businessCategory",
                    "nativeType" : "string"
                },
                "owner" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "nativeName" : "owner",
                    "nativeType" : "string"
                },
                "cn" : {
                    "type" : "array",
                    "items" : {
                        "type" : "string",
                        "nativeType" : "string"
                    },
                    "required" : true,
                    "nativeName" : "cn",
                    "nativeType" : "string"
                }
            }
        }
    },
    "operationOptions" : {
        "DELETE" : {
            "denied" : false,
            "onDeny" : "DO_NOTHING"
        },
        "UPDATE" : {
            "denied" : false,
            "onDeny" : "DO_NOTHING"
        },
        "CREATE" : {
            "denied" : false,
            "onDeny" : "DO_NOTHING"
        }
    }
});
