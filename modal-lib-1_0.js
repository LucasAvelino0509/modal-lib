var $md = {
  modal : '<div class="bckgModal"><div class="modal"><++CONTENT++></div></div>',
  contentMDL: [],
  templateMDL: [],
  openModal : function(fieldNames, fieldValues, content = this.contentMDL[0], template = this.templateMDL[0], target = "#modalMaster"){
    if (typeof content == "number"){content = this.contentMDL[content];}
    if (typeof template == "number"){template = this.templateMDL[template];}
    var modalHtml = $md.modal.replace("<++CONTENT++>",content)
    if (fieldNames.length > 0) {
      var templatePreenchido = template;
      for (var i = 0; i < fieldNames.length; i++) {
        templatePreenchido = templatePreenchido.replace(new RegExp(fieldNames[i],"g"),fieldValues[i]);
      }
      modalHtml = modalHtml.replace('<++template++>',templatePreenchido)
      modalHtml = modalHtml.replace('<TARGET>',target)
    }
    $(target).html(modalHtml);
    return modalHtml;
  },
  closeModal : function(target = "#modalMaster") {
    $(target).html("");
  }
}
