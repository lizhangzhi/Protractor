/**
 * Created by Lee on 2017/5/26.
 */
var ParameterPage = function () {
  /*CB User*/
  this.CBCompanyId1 = 'SG2BFE1';
  this.CBUser1 = 'SG2BFE1S05';
  this.CBUser2 = 'SG2BFE1S04';
  /*Payments*/
  this.amount = '10';
  this.fromAccount1 = 'LEONA ALBRECHT 0018001843 (SGD)';
  this.paymentdetails = 'Payment details to the payee bank';
  this.paymentdetailsCopy = 'This transaction copied from existing transaction';
  this.paymentdetailsModify = 'This transaction had been modified';
  this.invoiceDetails = 'Invoice Details';
  this.clientReference = 'Client Reference';
  this.insToDBS = 'Instruction to DBS Bank';
  this.transactionNote = 'Transaction Notes';
  this.responseCode = '1234';
  this.rejectReason = 'reject for fun';
  /*SG Account Transfer Payee*/
  this.ACTbeneficiary = 'ACTBENEDONDELETE';
  /*SG Telegraphic Transfer Payee*/
  this.TTbeneficiary = 'TTBENEDONDELETE';
  /*SG Domestic Payee*/
  this.Domesticbeneficiary = 'FASTPAYEEDONDELETE';
  /*SAM User*/
  this.SAMUser1 = 'ASADM1';
  this.SAMUser2 = 'DBSCM1';
  /*User*/
  this.NewCBUser = 'SANITYUSER';
  this.EmailAddress = 'email@163.com';
  this.message = 'Message to Payee';
  this.messageToApprover = 'Message to your Approver';
  this.specInstrucToDBS = 'Special instructions to DBS';
  /*Panel Authorization > Profile*/
  this.newProfileName = 'profile';
  this.profileWeight = '100';
  this.profileDescription = 'ProfileDescription';
  this.profileMinAmount = '1';
  this.profileMaxAmount = '10';
  /*Panel Authorization > Group*/
  this.groupName = 'group';
  /*OPERATIONS*/
  this.startDate = '01-Jan-2016';
};
module.exports = ParameterPage;
