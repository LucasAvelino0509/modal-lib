var $md = {
  modal : '<div class="bckgModal"><div style="width:100%;height:100%;position:absolute;top:0;left:0;"  onclick="$md.closeModal(\'target__\')"></div><div class="modal"><++CONTENT++></div></div>',
  contentMDL: [],
  templateMDL: [],
  start: function(a,b){
    this.contentMDL.push(a.html());
    this.templateMDL.push(b.html());
  },
  activeModais: [],
  openModal : function(fieldNames, fieldValues, content = this.contentMDL[0], template = this.templateMDL[0], target = "#1"){
    if (typeof content == "number"){content = this.contentMDL[content];}
    if (typeof template == "number"){template = this.templateMDL[template];}
    var modalHtml = $md.modal.replace("<++CONTENT++>",content)
    if (fieldNames.length > 0) {
      var templatePreenchido = template;
      for (var i = 0; i < fieldNames.length; i++) {
        templatePreenchido = templatePreenchido.replace(new RegExp(fieldNames[i],"g"),fieldValues[i]);
      }
      modalHtml = modalHtml.replace(new RegExp('template__',"g"), templatePreenchido);
      modalHtml = modalHtml.replace(new RegExp('target__',"g"), target);
    }
    this.closeModal(target);
    this.activeModais.push(target);
    $(target).html(modalHtml);
    return modalHtml;
  },
  closeModal : function(target = "#1") {
    if (target == "last") {target = this.activeModais[this.activeModais.length-1]}
    if($(target).html().length>0){
      var found = false;
      for (var i = 0; i < this.activeModais.length; i++) {
        if(this.activeModais[i] == target){found = true;}
        if (found) {
          $(this.activeModais[i]).html("");
          delete this.activeModais[i];
        }
      }
      this.activeModais = this.activeModais.filter(a => a !=null);
    }
  }
}

window.onkeydown = function functionName(e) {
  if (e.keyCode == 27) {
    $md.closeModal("last");
  }
}
