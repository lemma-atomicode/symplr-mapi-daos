'use strict';

var getAccountByName = async function(name){
    console.log('Getting account by name');
    var accounts = await this.db.collection('accounts');
    var account = await accounts.findOne({name: name});
    return account;
};

var saveAccount = async function(account){
    console.log('Saving account.');
    var accounts = await this.db.collection('accounts');
    var writeOpResult = await accounts.insertOne(account);
    return writeOpResult.insertedId;
};

let AccountDAO = function(client){
    this.client = client;
    this.db = client.db('symplr');
    this.getAccountByName = getAccountByName;
    this.saveAccount = saveAccount;
};

module.exports.AccountDAO = AccountDAO;