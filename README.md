# LabsCypress

Projet Git pour le suivis du cours : <https://www.udemy.com/course/cypress-tutorial/learn/lecture/26426106#overview>

## Généralité 

Cypress utilise mocha et chai jquery pour l'écriture de ses tests
https://mochajs.org/
https://www.chaijs.com/plugins/chai-jquery/

## Lancer Cypress

node_modules\.bin\cypress open

### Run headless

- Run only one test
node_modules\.bin\cypress run --spec "cypress\integration\3-MyTests\Test1.js"

- Run only one folder
node_modules\.bin\cypress run --spec "cypress\integration\3-MyTests\*"

### Run with head

- Run in chrome
node_modules\.bin\cypress run --headed --browser chrome --spec "cypress\integration\3-MyTests\*"

### Configuration

On peux éditer la configuration dans cypress.json
on peux voir la configuration dans le test runner Settings > configuration
exemple : "pageLoadTimeout": 10000

### .then()

Toute les méthode cypress son des promesse que .then peux résoudre pour permettre d'utiliser Jquery pour faire un .text() par exemple :
OK

``` javascript
cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })
```

KO
```cy.log(cy.get('.brand').text())```

### Console.log

Les console.log arrive dans le navigateur dans lequel cypress est exécuter, cypress utilise des promesse et est asynchrone ce qui fait que les console.log s'éxécute bien avant la ligne ou il sont dans le code
les cy.log('text') arrive dans la console de node.js

### Assertion

Les assertions en Cypress utilise chai-jquery ce qui donne des test trés lisible tel que : 
should.have.prop / should.be.visible
exemple : `$('.name').should.be.visible; expect($('.year')).to.be.visible;`
https://www.chaijs.com/plugins/chai-jquery/


### Alert 

Les Alert sont automatiquement confirmer et les message apparaisse directemetn dans les logs de cypress, mais ne s'affiche pas dans le navigateur de cypress