import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => {setTimeout(resolve, ms)}));

defineSupportCode(function ({ Given, When, Then }) {
	Given(/^Eu estou na página "([^"]*)"$/, async(pagina) =>{
		await browser.get("http://localhost:4000/"+pagina);
	});
	When(/^Eu adiciono o formulário “([^"]*)” como associado à uma planilha$/, async(nome_form) =>{
		 await $("criar formulário").click();
		 await $("associar a uma planilha").click();
	});
	When(/^Eu vou para a página "([^"]*)"$/, async(pagina) =>{
		await browser.get("http://localhost:4000/"+pagina);
	});
	Then(/^Eu posso ver a planilha "([^"]*)"$/, async(planilha)=>{
		expect(element(by.binding(<string> planilha)).isPresent()).toBe(true);
	});
});
