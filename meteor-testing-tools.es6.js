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
  }
};
