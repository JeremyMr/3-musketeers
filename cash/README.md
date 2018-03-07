# cash

## Packages
To run the index.js you need to install some packages. Every packages you need to add are in the package.json file.

*If you need help*<br/>
	- Open the console.<br/>
	- Go in the cash folder : "cd .../cash"<br/>
	- Write the command "npm install"<br/>

## Purpose
This program convert a currency in another. For exemple, if you want to know how much USD you have for 10 euros you can know with this program.<br/>

## How to use it
Go in your folder 
```sh
cd PATH/3-musketeers/cash/bin
```
If you need help
```sh
node index.js
```
Example : convert 1 USD in the default currencies
```sh
node index.js 1 usd
```
Example : convert 100 EUR in Australian dollar
```sh
node index.js 100 eur aud
```
Example : set up the default currencies for EUR (USD GBP AUD)
```sh
node index.js --save eur usd gbp aud
```
