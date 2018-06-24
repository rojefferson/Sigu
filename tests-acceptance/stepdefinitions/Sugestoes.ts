import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => {setTimeout(resolve, ms)}));

defineSupportCode(function ({ Given, When, Then }) {
	Given(/^Eu estou na página "([^"]*)"$/, async(pagina) =>{
		await browser.get("http://localhost:4000/"+pagina);
	});
	When(/^Na página de planilhas eu vejo a planilha “([^"]*)” com o campo “([^"]*)” contendo “([^"]*)”$/, async(planilha, campo, conteudo) =>{
		await browser.get("http://localhost:4000/planilhas");
		expect(element(by.binding(<string> campo)).getText().to.eventually.equal(conteudo));
	});
	Then(/^Eu posso ver a planilha "([^"]*)"$/, async(planilha)=>{
		expect(element(by.binding(<string> planilha)).isPresent()).toBe(true);
	});
});
