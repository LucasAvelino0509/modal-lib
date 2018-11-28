
var $modal = {
  modal : '<div class="bckgModal"><div class="modal"><++CONTENT++></div></div>',
  openModal : function(content, fieldNames, fieldValues, template = "", target = "#modalMaster"){
    var modalHtml = $modal.modal.replace("<++CONTENT++>",content)
    if (fieldNames.length > 0) {
      var templatePreenchido = template;
      for (var i = 0; i < fieldNames.length; i++) {
        templatePreenchido = templatePreenchido.replace(new RegExp(fieldNames[i],"g"),fieldValues[i]);
      }
      modalHtml = modalHtml.replace('<++template++>',templatePreenchido)
    }
    $(target).html(modalHtml);
    return modalHtml;
  },
  closeModal : function(target = "#modalMaster") {
    $(target).html("");
  }
}
// [ '<++NomePRP++>','<++NomeValor++>']
// [ 'Categoria','Acesso']
// "<div class='item'><span><++NomePRP++></span><span><++NomeValor++></span></div>"
//$modal.openModal('    <div class="mdlHeader"> <h3>Informações do Chamado</h3> <div class="close" onclick="$modal.closeModal()">X</div></div> <++template++>',['NomePRP','NomeValor'],['Categoria','Acesso'],"<div class='item'><span>NomePRP</span><span>NomeValor</span></div>")
