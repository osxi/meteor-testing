Meteor Testing Tools [![Build Status](https://travis-ci.org/osxi/meteor-testing-tools.svg)](https://travis-ci.org/osxi/meteor-testing-tools)
====================

Meteor Testing Tools are a collection of tools for use in Meteor apps tested with Velocity + Mocha + Chai along with support for AutoForm. This tool might be compatible with other test frameworks like Jasmine.

`meteor add osxi:meteor-testing-tools`

Methods
=======

`fillIn(property, value)`
-------------------------
Assign value `value` to text input field with the placeholder of `property`.

`check(property, value)`
------------------------
Check or uncheck checkbox (with values true and false, repsectively) with name attribute equal to `property`.

`submit(formSelector)`
----------------------
Submit form with selector equal to `formSelector` (can be a class or ID such as ".survey-form" or "#contact-us-form"). Returns a Promise.

`getValidity(formSelector)`
---------------------------
Returns a boolean representing form validation state of an AutoForm-powered form. Returns a Promise.
