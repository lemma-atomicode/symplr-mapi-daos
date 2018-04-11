
var assert = require('assert');
var expect = require('chai').expect;
var MongoClient = require('mongodb').MongoClient;
var AccountDAO = require('../src/account-dao.js').AccountDAO;
describe('AccountDAO', function () {
    let accountDao;
    before(async function () {
        console.log('Preparing connection');
        var client = await MongoClient.connect('mongodb+srv://admin:admin@symplr-dev-f5ldu.mongodb.net/test');
        accountDao = new AccountDAO(client);
    });

    describe('#getAccountByName()', function () {
        it('should return null for unexisting account', async function () {
            var unexistingAccountName = 'UnexistingAccountName';
            var account = await accountDao.getAccountByName(unexistingAccountName);
            console.debug('Expect account to be null, account: ' + account);
            expect(account).to.be.null;
        });

        it('should return an existing account object', async function(){
            var existingAccountName = 'AtomiCodeDemos';
            var account = await accountDao.getAccountByName(existingAccountName);
            console.debug('Expect account to not be null, account: ' + account);
            expect(account).to.not.be.null;
        });
    });    
});