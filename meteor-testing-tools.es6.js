"use strict";

MTT = {
  fillIn(property, value) {
    return $("input[placeholder='" + property + "']").val(value);
  },

  check(property, value) {
    var sel = "input[type='checkbox'][name='" + property + "']";
    return $(sel).prop('checked', value);
  },

  submit(formSelector) {
    return new Promise((resolve, reject) => {
      try {
        var submit = $(formSelector).submit();
        resolve(submit);
      } catch(e) {
        reject(e);
      }
    });
  },

  getValidity(formSelector) {
    return new Promise((resolve, reject) => {
      try {
        var validationResult = AutoForm.validateForm(formId);
        resolve(validationResult);
      } catch(e) {
        reject(e);
      }
    });
  },

  clickOn(text) {
    return new Promise((resolve, reject) => {
      try {
        var clickOnResult = $("div,a:contains('" + text + "')").click();
        resolve(clickOnResult);
      } catch(e) {
        reject(e);
      }
    });
  }
};
